import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function normalizePhone(raw: string): string {
  const digits = String(raw).replace(/[\s().\-]/g, "");
  const stripped = digits.startsWith("+1")
    ? digits.slice(2)
    : digits.startsWith("1") && digits.length === 11
      ? digits.slice(1)
      : digits.replace(/^\+/, "");
  return stripped.replace(/\D/g, "");
}

function generateCode(firstName: string): string {
  const base = firstName.toUpperCase().replace(/[^A-Z]/g, "") || "ADVOCATE";
  const num = Math.floor(1000 + Math.random() * 9000);
  return `${base}-${num}`;
}

function toE164(normalizedDigits: string): string {
  if (normalizedDigits.length === 10) {
    return `+1${normalizedDigits}`;
  }
  if (normalizedDigits.length === 11 && normalizedDigits.startsWith("1")) {
    return `+${normalizedDigits}`;
  }
  return `+${normalizedDigits}`;
}

async function sendGhlConfirmation(
  advocateName: string,
  advocatePhone: string,
  referralCode: string,
): Promise<void> {
  const shareUrl = `https://shurdensroofing.com/refer?code=${referralCode}`;
  const body = {
    advocate_name: advocateName,
    advocate_phone: toE164(advocatePhone),
    referral_code: referralCode,
    is_new: true,
    share_url: shareUrl,
  };

  try {
    const resp = await fetch(
      "https://services.leadconnectorhq.com/hooks/QpLtWVK3YfPZ7e1MRBtO/webhook-trigger/3fbac592-d9a7-4073-94e6-134265dc9e6c",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );
    if (!resp.ok) {
      console.error(`GHL confirmation failed: ${resp.status} ${await resp.text()}`);
    }
  } catch (err) {
    console.error(`GHL confirmation error: ${(err as Error).message}`);
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { first_name, last_name, phone } = await req.json();

    if (!first_name || !last_name || !phone) {
      return new Response(
        JSON.stringify({ error: "first_name, last_name, and phone are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const normalizedPhone = normalizePhone(phone);
    if (!normalizedPhone) {
      return new Response(
        JSON.stringify({ error: "Invalid phone number" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const supabaseUrl = Deno.env.get("ADVOCATES_SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("ADVOCATES_SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !serviceRoleKey) {
      return new Response(
        JSON.stringify({ error: "Server not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false },
    });

    const { data: existing, error: lookupError } = await supabase
      .from("Advocates")
      .select("referral_code")
      .eq("Phone", normalizedPhone)
      .maybeSingle();

    if (lookupError) {
      return new Response(
        JSON.stringify({ error: "Lookup failed", detail: lookupError.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    if (existing?.referral_code) {
      return new Response(
        JSON.stringify({ referral_code: existing.referral_code, is_new: false }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const fullName = `${String(first_name).trim()} ${String(last_name).trim()}`.trim();

    for (let attempt = 0; attempt < 8; attempt++) {
      const code = generateCode(String(first_name).trim());
      const { data: inserted, error: insertError } = await supabase
        .from("Advocates")
        .insert({ Name: fullName, Phone: normalizedPhone, referral_code: code })
        .select("referral_code")
        .single();

      if (!insertError && inserted?.referral_code) {
        await sendGhlConfirmation(fullName, normalizedPhone, inserted.referral_code);
        return new Response(
          JSON.stringify({ referral_code: inserted.referral_code, is_new: true }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }

      // 23505 = unique_violation — retry on collision
      const msg = insertError?.message?.toLowerCase() ?? "";
      const isCollision = (insertError as any)?.code === "23505" || msg.includes("duplicate") || msg.includes("unique");
      if (!isCollision) {
        return new Response(
          JSON.stringify({ error: "Insert failed", detail: insertError?.message }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
    }

    return new Response(
      JSON.stringify({ error: "Could not generate a unique referral code" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Unexpected error", detail: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
