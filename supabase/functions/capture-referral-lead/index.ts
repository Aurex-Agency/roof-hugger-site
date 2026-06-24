import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function normalizePhone(raw: string): string {
  const digits = String(raw ?? "").replace(/[\s().\-]/g, "");
  const stripped = digits.startsWith("+1")
    ? digits.slice(2)
    : digits.startsWith("1") && digits.length === 11
      ? digits.slice(1)
      : digits.replace(/^\+/, "");
  return stripped.replace(/\D/g, "");
}

function toE164(raw: string): string {
  const digits = normalizePhone(raw);
  if (!digits || digits.length < 10) return "";
  // US numbers — ensure leading +1
  const us = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  return `+1${us}`;
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      friend_name,
      friend_phone,
      friend_email,
      friend_address,
      advocate_referral_code,
    } = await req.json();

    if (!friend_name || !advocate_referral_code) {
      return json(
        { error: "friend_name and advocate_referral_code are required" },
        400,
      );
    }

    const normalizedPhone = friend_phone ? normalizePhone(friend_phone) : "";

    const supabaseUrl = Deno.env.get("ADVOCATES_SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("ADVOCATES_SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !serviceRoleKey) {
      return json({ error: "Server not configured" }, 500);
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false },
    });

    const code = String(advocate_referral_code).trim();

    const { data: advocate, error: lookupError } = await supabase
      .from("Advocates")
      .select("referral_code, Name, Phone")
      .eq("referral_code", code)
      .maybeSingle();

    if (lookupError) {
      return json({ error: "Advocate lookup failed", detail: lookupError.message }, 500);
    }

    if (!advocate) {
      return json({ error: "Invalid referral code" }, 400);
    }

    const { data: insertedLead, error: insertError } = await supabase
      .from("Referral Leads")
      .insert({
        friend_name: String(friend_name).trim(),
        friend_phone: normalizedPhone,
        friend_email: friend_email ? String(friend_email).trim() : null,
        friend_address: friend_address ? String(friend_address).trim() : null,
        advocate_referral_code: code,
      })
      .select("id")
      .single();

    if (insertError) {
      return json({ error: "Insert failed", detail: insertError.message }, 500);
    }

    // Advocate GHL webhook — fire-and-forget; failure does not break the lead save
    try {
      const advocateName = advocate.Name ? String(advocate.Name).trim() : "";
      const advocateE164 = toE164(advocate.Phone ?? "");
      await fetch(
        "https://services.leadconnectorhq.com/hooks/QpLtWVK3YfPZ7e1MRBtO/webhook-trigger/eff8ef53-0556-434c-b1e1-659d55f56c08",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            advocate_name: advocateName,
            advocate_phone: advocateE164,
            advocate_referral_code: code,
            friend_name: String(friend_name).trim(),
          }),
        },
      );
    } catch (ghlErr) {
      console.error("Advocate GHL webhook failed:", (ghlErr as Error).message);
    }

    // Friend GHL webhook
    let friendGhlOk = false;
    let friendGhlErrorText: string | null = null;
    try {
      const friendE164 = toE164(friend_phone ?? "");
      const friendGhlResponse = await fetch(
        "https://services.leadconnectorhq.com/hooks/QpLtWVK3YfPZ7e1MRBtO/webhook-trigger/d0171b17-914a-4899-ac44-3e71ac52d2e6",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            friend_name: String(friend_name).trim(),
            friend_phone: friendE164,
            friend_email: friend_email ? String(friend_email).trim() : null,
            friend_address: friend_address ? String(friend_address).trim() : null,
            advocate_referral_code: code,
          }),
        },
      );
      friendGhlOk = friendGhlResponse.ok;
      if (!friendGhlOk) {
        friendGhlErrorText = await friendGhlResponse.text();
        console.error("Friend GHL webhook failed:", friendGhlResponse.status, friendGhlErrorText);
      }
    } catch (friendGhlErr) {
      friendGhlErrorText = (friendGhlErr as Error).message;
      console.error("Friend GHL webhook exception:", friendGhlErrorText);
    }

    // Update lead row with GHL sync status
    if (insertedLead?.id) {
      const { error: updateError } = await supabase
        .from("Referral Leads")
        .update({
          ghl_synced: friendGhlOk,
          ghl_error: friendGhlErrorText,
        })
        .eq("id", insertedLead.id);
      if (updateError) {
        console.error("Failed to update lead ghl_synced:", updateError.message);
      }
    }

    return json({ success: true, ghl_synced: friendGhlOk });
  } catch (err) {
    return json({ error: "Unexpected error", detail: (err as Error).message }, 500);
  }
});
