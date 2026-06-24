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
    const { advocate_referral_code, friend_phone } = await req.json();

    if (!advocate_referral_code || !friend_phone) {
      return json(
        { error: "advocate_referral_code and friend_phone are required" },
        400,
      );
    }

    const normalizedPhone = normalizePhone(friend_phone);

    const supabaseUrl = Deno.env.get("ADVOCATES_SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("ADVOCATES_SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !serviceRoleKey) {
      return json({ error: "Server not configured" }, 500);
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false },
    });

    const code = String(advocate_referral_code).trim();

    // Find and update the matching lead row
    const { data: updatedLeads, error: updateError } = await supabase
      .from("Referral Leads")
      .update({
        status: "closed",
        amount_owed: 200,
        closed_at: new Date().toISOString(),
      })
      .eq("advocate_referral_code", code)
      .eq("friend_phone", normalizedPhone)
      .select("id");

    if (updateError) {
      return json({ error: "Update failed", detail: updateError.message }, 500);
    }

    if (!updatedLeads || updatedLeads.length === 0) {
      return json({ error: "No matching lead found" }, 404);
    }

    // Look up advocate
    const { data: advocate, error: lookupError } = await supabase
      .from("Advocates")
      .select("referral_code, Name, Phone")
      .eq("referral_code", code)
      .maybeSingle();

    if (lookupError) {
      console.error("Advocate lookup failed:", lookupError.message);
    }

    // Advocate GHL webhook
    let ghlOk = true;
    if (advocate) {
      try {
        const advocateName = advocate.Name ? String(advocate.Name).trim() : "";
        const advocateE164 = toE164(advocate.Phone ?? "");
        const ghlResponse = await fetch(
          "https://services.leadconnectorhq.com/hooks/QpLtWVK3YfPZ7e1MRBtO/webhook-trigger/87fb141a-cc5e-4e80-8107-914ab20e9983",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              advocate_name: advocateName,
              advocate_phone: advocateE164,
              advocate_referral_code: code,
              amount_owed: 200,
            }),
          },
        );
        ghlOk = ghlResponse.ok;
        if (!ghlOk) {
          const ghlErrorText = await ghlResponse.text();
          console.error("GHL webhook failed:", ghlResponse.status, ghlErrorText);
        }
      } catch (ghlErr) {
        ghlOk = false;
        console.error("GHL webhook exception:", (ghlErr as Error).message);
      }
    }

    return json({ success: true, ghl_synced: ghlOk });
  } catch (err) {
    return json({ error: "Unexpected error", detail: (err as Error).message }, 500);
  }
});
