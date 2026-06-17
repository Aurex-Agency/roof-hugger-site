import { useState, FormEvent } from "react";
import { Trophy, Gift, DollarSign, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";
import PageHero from "@/components/site/PageHero";
import { toast } from "@/hooks/use-toast";

const Field = ({
  label,
  name,
  type,
  ...rest
}: {
  label: string;
  name: string;
  type: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div>
    <label htmlFor={name} className="mb-2 block font-body text-xs font-bold uppercase tracking-wider text-dark-foreground/95">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      className="w-full rounded-md border border-white/10 bg-secondary/40 px-4 py-3 font-body text-sm text-dark-foreground placeholder:text-dark-foreground/90 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      {...rest}
    />
  </div>
);

const TIERS = [
  {
    icon: DollarSign,
    name: "Tier 1 — Neighbor",
    refs: "1–2 successful referrals",
    perks: "$200 cash per referral. Welcome to the crew.",
  },
  {
    icon: Trophy,
    name: "Tier 2 — Roof Captain",
    refs: "3–5 successful referrals",
    perks: "$250 cash per referral + entry into quarterly prize drawings.",
  },
  {
    icon: Sparkles,
    name: "Tier 3 — Legend",
    refs: "6+ successful referrals",
    perks: "$300 cash per referral + bonus prizes (gift cards, gear, big-ticket giveaways).",
  },
];

const ReferralJoinPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [smsOptIn, setSmsOptIn] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim().slice(0, 100);
    const phone = String(data.get("phone") ?? "").trim();

    if (!name) {
      toast({ title: "Name required", description: "Please enter your full name.", variant: "destructive" });
      return;
    }
    if (!/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(phone)) {
      toast({ title: "Invalid phone number", description: "Please enter a 10-digit US phone number.", variant: "destructive" });
      return;
    }
    if (!smsOptIn) {
      toast({ title: "Text opt-in required", description: "Please confirm we can text you referral program updates.", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("https://services.leadconnectorhq.com/hooks/QpLtWVK3YfPZ7e1MRBtO/webhook-trigger/ad482d83-e208-49d3-ba6e-54f49c4afcbd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: name,
          phone,
          opt_in_referral_sms: true,
          source: "shurdensroofing.com — Referral Join",
          submitted_at: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      form.reset();
      setSmsOptIn(false);
      toast({ title: "You're in!", description: "Thanks for joining. We'll text you updates and your referral details shortly." });
    } catch (err) {
      toast({ title: "Could not submit", description: "Please try again or call 662-498-6629.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <SEO
        title="Join the Shurden's Roofing Referral Program | Earn $200 Per Referral"
        description="Earn $200 cash every time you refer someone who gets a roof replacement. Level up tiers for bigger payouts and prize drawings. Join in under a minute."
        path="/referral-join"
      />
      <Navigation />
      <main>
        <PageHero
          eyebrow="Referral Program"
          title={<>Earn $200 Cash for Every <span className="text-primary">Roof Replacement</span> You Refer.</>}
          subtitle="Earn $200 in cash every time you refer someone and they get a roof replacement. Level up tiers, unlock bigger payouts, and win extra prizes."
        />

        <section className="bg-secondary text-secondary-foreground">
          <div className="container grid gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28">
            <div>
              <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">How It Works</p>
              <h2 className="font-display text-3xl leading-tight md:text-5xl">Refer. Level Up. Get Paid.</h2>
              <p className="mt-6 max-w-md font-body text-base text-secondary-foreground/75 md:text-lg">
                It's gamified — the more friends, family, and neighbors you refer, the higher your tier climbs.
                Each tier unlocks more cash per referral and entries into bonus prize drawings.
              </p>

              <div className="mt-10 space-y-5">
                {TIERS.map(({ icon: Icon, name, refs, perks }) => (
                  <div key={name} className="flex items-start gap-4 rounded-lg border border-white/10 bg-dark/40 p-5">
                    <span className="grid h-12 w-12 flex-none place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-display text-lg text-secondary-foreground md:text-xl">{name}</p>
                      <p className="font-body text-xs font-bold uppercase tracking-wider text-primary">{refs}</p>
                      <p className="mt-1 font-body text-sm text-secondary-foreground/85">{perks}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-3 rounded-md border border-primary/30 bg-primary/10 p-4">
                <Gift className="mt-0.5 h-5 w-5 flex-none text-primary" />
                <p className="font-body text-sm text-secondary-foreground/90">
                  A referral counts the moment your friend signs a roof replacement contract with Shurden's Roofing. Cash is paid out after the job is complete.
                </p>
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="self-start rounded-lg border border-white/5 bg-dark p-6 shadow-[var(--shadow-card)] md:p-8"
              noValidate
            >
              <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Join the Program</p>
              <h3 className="mb-3 font-display text-2xl text-dark-foreground md:text-3xl">Sign Up in Under a Minute</h3>
              <p className="mb-6 font-body text-sm text-dark-foreground/90">
                Drop your name and number. We'll text you your referral details and update you whenever you level up a tier or earn cash.
              </p>
              <div className="space-y-5">
                <Field label="Full Name" name="name" type="text" required autoComplete="name" />
                <Field label="Phone Number" name="phone" type="tel" required autoComplete="tel" placeholder="(662) 555-1234" />
                <label className="flex cursor-pointer items-start gap-3 rounded-md border border-white/10 bg-secondary/40 px-3 py-3 font-body text-sm text-dark-foreground">
                  <input
                    type="checkbox"
                    checked={smsOptIn}
                    onChange={(e) => setSmsOptIn(e.target.checked)}
                    className="mt-0.5 h-4 w-4 accent-primary"
                  />
                  <span>I agree to receive text message updates from Shurden's Roofing about the referral program (tier progress, payouts, and prize drawings). Msg &amp; data rates may apply. Reply STOP to opt out.</span>
                </label>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-md bg-primary px-6 py-4 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.01] hover:shadow-cta disabled:opacity-70"
                >
                  {submitting ? "Submitting..." : "Join the Referral Program →"}
                </button>
                <p className="text-center font-body text-[11px] text-dark-foreground/75">
                  Your information stays private. We never sell or share your details — it's only used for the referral program.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default ReferralJoinPage;
