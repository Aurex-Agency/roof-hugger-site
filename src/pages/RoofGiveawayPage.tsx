import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ClipboardCheck,
  Search,
  BadgeCheck,
  Vote,
  Home,
  Users,
  UserPlus,
  CheckCircle2,
  XCircle,
  Facebook,
  Instagram,
  QrCode,
  Download,
  Copy,
  Check,
  PartyPopper,
  Phone,
} from "lucide-react";
import SEO from "@/components/SEO";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";
import PageHero from "@/components/site/PageHero";
import { toast } from "@/hooks/use-toast";
import { getReferralCode } from "@/lib/referral";
import heroImg from "@/assets/storm-damage.jpg";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const PAGE_PATH = "/roof-giveaway";
const PAGE_URL = `https://shurdensroofing.com${PAGE_PATH}`;
const FACEBOOK_URL = "https://www.facebook.com/shurdensroofing";
const INSTAGRAM_URL = "https://www.instagram.com/shurdensroofing";

// Giveaway entries post to the same GHL inbound webhook the contact forms use,
// tagged with a distinct `source` / `entry_type` so a GHL workflow can route
// them into the giveaway pipeline. Swap this URL for a dedicated webhook if
// one is created for the campaign.
const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/QpLtWVK3YfPZ7e1MRBtO/webhook-trigger/4c2e69fd-37d3-4a83-ad28-e07bcec714b9";

type Mode = "self" | "nominate";
type Answer = "yes" | "no" | "unsure" | "";

const PHONE_RE = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const steps = [
  {
    icon: ClipboardCheck,
    title: "Sign Up Online",
    body: "Enter your own home below, or nominate a friend, family member, or neighbor whose roof needs help. It takes about a minute.",
  },
  {
    icon: Search,
    title: "Get a Free Roof Inspection",
    body: "We come out, get on the roof, and document everything with drone photos. No cost, no obligation, no pressure.",
  },
  {
    icon: BadgeCheck,
    title: "Qualify",
    body: "If the inspection shows the roof needs to be replaced and the home meets the rules below, the entry is officially in the running.",
  },
  {
    icon: Vote,
    title: "Vote and Win",
    body: "We pick the three roughest roofs and put them to a public vote on our Facebook page. The roof with the most votes gets replaced for free.",
  },
];

const qualifies = [
  "You own the home (or the person you nominate does)",
  "It is your primary residence, the place you actually live",
  "It is a single-family house",
  "The roof is up to 30 squares (about 3,000 sq ft of roof area)",
  "A free Shurden's inspection confirms the roof needs to be replaced",
];

const doesNotQualify = [
  "Rental or investment properties",
  "Commercial buildings, churches, or businesses",
  "Apartments, duplexes, or other multi-family buildings",
  "Roofs larger than 30 squares",
];

const finePrint = [
  "Open to owner-occupied, single-family homes only. The entrant (or the nominated homeowner) must own the home and live in it as their primary residence.",
  "Rental properties, investment properties, and commercial buildings of any kind are not eligible.",
  "Roof size is limited to 30 squares (3,000 square feet of roof area). Larger roofs are not eligible for the giveaway but still qualify for a free inspection and estimate.",
  "To qualify, an entry must be submitted through this website and the home must receive a free roofing inspection from Shurden's Roofing. The inspection must show the roof needs a full replacement.",
  "Shurden's Roofing selects three finalists from qualified entries. The winner is chosen by public vote on the Shurden's Roofing Facebook page.",
  "The giveaway covers a standard GAF shingle roof replacement. Structural or decking repairs beyond normal replacement scope will be discussed with the homeowner before any work begins.",
  "Finalists agree to have photos of their roof shared on Shurden's Roofing social media for the vote.",
  "Shurden's Roofing reserves the right to verify eligibility, ownership, and residency before awarding the roof.",
];

const faqs = [
  {
    q: "Do I have to pay anything to enter?",
    a: "No. Entering is free, the roof inspection is free, and the winning roof is replaced at no cost to the homeowner.",
  },
  {
    q: "Can I nominate someone else?",
    a: "Yes. Choose \"I'm nominating someone\" on the form. We will reach out to that homeowner to schedule their free inspection. Please make sure they are okay with you sharing their information.",
  },
  {
    q: "What if my roof doesn't need to be fully replaced?",
    a: "Then you are not in the running for the giveaway, but you still walk away with a free inspection and a clear picture of what your roof needs. If a repair would take care of it, we will tell you that.",
  },
  {
    q: "What counts as 30 squares?",
    a: "Roofers measure in squares, and one square is 100 square feet of roof. Thirty squares is about 3,000 square feet of roof area, which covers most typical single-story and many two-story homes. If you are not sure, enter anyway. We will measure during the inspection.",
  },
  {
    q: "How is the winner chosen?",
    a: "After inspections, we pick the three worst roofs among qualified entries and post them on our Facebook page. Whoever gets the most votes wins the free roof.",
  },
  {
    q: "I have an active leak right now. Should I wait for the giveaway?",
    a: "No. Call us at 662-498-6629 so we can stop the water. Emergency repairs will not hurt your giveaway entry.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ---------------------------------------------------------------------------
// Form primitives
// ---------------------------------------------------------------------------

const inputClass =
  "w-full rounded-md border border-white/10 bg-secondary/40 px-4 py-3 font-body text-sm text-dark-foreground placeholder:text-dark-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

const labelClass = "mb-2 block font-body text-xs font-bold uppercase tracking-wider text-dark-foreground/95";

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
    <label htmlFor={name} className={labelClass}>
      {label}
    </label>
    <input id={name} name={name} type={type} className={inputClass} {...rest} />
  </div>
);

const YesNo = ({
  label,
  name,
  value,
  onChange,
  allowUnsure,
}: {
  label: string;
  name: string;
  value: Answer;
  onChange: (v: Answer) => void;
  allowUnsure: boolean;
}) => {
  const options: { v: Answer; l: string }[] = [
    { v: "yes", l: "Yes" },
    { v: "no", l: "No" },
    ...(allowUnsure ? [{ v: "unsure" as Answer, l: "Not sure" }] : []),
  ];
  return (
    <fieldset>
      <legend className={labelClass}>{label}</legend>
      <div className={`grid gap-2 ${allowUnsure ? "grid-cols-3" : "grid-cols-2"}`}>
        {options.map((o) => (
          <label
            key={o.v}
            className={`flex cursor-pointer items-center justify-center gap-2 rounded-md border px-3 py-2.5 font-body text-sm transition-colors ${
              value === o.v
                ? "border-primary bg-primary/15 text-dark-foreground"
                : "border-white/10 bg-secondary/40 text-dark-foreground/90 hover:border-primary/50"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={o.v}
              checked={value === o.v}
              onChange={() => onChange(o.v)}
              className="sr-only"
            />
            {o.l}
          </label>
        ))}
      </div>
    </fieldset>
  );
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const RoofGiveawayPage = () => {
  const [mode, setMode] = useState<Mode>("self");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [optIn, setOptIn] = useState(false);
  const [owns, setOwns] = useState<Answer>("");
  const [primary, setPrimary] = useState<Answer>("");
  const [singleFamily, setSingleFamily] = useState<Answer>("");
  const [leaks, setLeaks] = useState<Answer>("");
  const [copied, setCopied] = useState(false);

  const isNominate = mode === "nominate";

  const switchMode = (next: Mode) => {
    if (next === mode) return;
    setMode(next);
    setOwns("");
    setPrimary("");
    setSingleFamily("");
    setLeaks("");
    setOptIn(false);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(PAGE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: "Copy failed", description: "Please select and copy the link manually.", variant: "destructive" });
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string, max = 200) => String(data.get(k) ?? "").trim().slice(0, max);

    const nominatorName = isNominate ? get("nominatorName", 100) : "";
    const nominatorPhone = isNominate ? get("nominatorPhone", 30) : "";
    const homeownerName = get("homeownerName", 100);
    const homeownerPhone = get("homeownerPhone", 30);
    const homeownerEmail = get("homeownerEmail", 200);
    const address = get("address", 300);
    const sqft = get("sqft", 10);
    const notes = get("notes", 2000);
    const relationship = isNominate ? get("relationship", 100) : "";

    const who = isNominate ? "the homeowner's" : "your";

    if (isNominate && !nominatorName) {
      toast({ title: "Your name is required", description: "Tell us who is making the nomination.", variant: "destructive" });
      return;
    }
    if (isNominate && !PHONE_RE.test(nominatorPhone)) {
      toast({ title: "Your phone number is required", description: "Please enter a 10-digit US phone number so we can follow up with you.", variant: "destructive" });
      return;
    }
    if (!homeownerName) {
      toast({ title: "Name required", description: `Please enter ${who} full name.`, variant: "destructive" });
      return;
    }
    if (!PHONE_RE.test(homeownerPhone)) {
      toast({ title: "Phone number required", description: `Please enter ${who} 10-digit US phone number.`, variant: "destructive" });
      return;
    }
    if (!address) {
      toast({ title: "Address required", description: "We need the home's address to schedule the inspection.", variant: "destructive" });
      return;
    }
    if (!owns || !primary || !singleFamily || !leaks) {
      toast({ title: "A few quick questions", description: "Please answer each of the eligibility questions.", variant: "destructive" });
      return;
    }
    if (owns === "no" || primary === "no" || singleFamily === "no") {
      toast({
        title: "This home isn't eligible for the giveaway",
        description: "The giveaway is limited to owner-occupied, single-family homes. You can still request a free inspection through our contact page.",
        variant: "destructive",
      });
      return;
    }
    if (!optIn) {
      toast({ title: "Consent required", description: "Please check the box so we can follow up about the giveaway.", variant: "destructive" });
      return;
    }

    const answerText = (a: Answer) => (a === "yes" ? "Yes" : a === "no" ? "No" : "Not sure");
    const summaryLines = [
      isNominate
        ? `ROOF GIVEAWAY NOMINATION submitted by ${nominatorName} (${nominatorPhone})${relationship ? ` — ${relationship}` : ""}`
        : "ROOF GIVEAWAY ENTRY (homeowner signed up)",
      `Homeowner: ${homeownerName}`,
      `Home address: ${address}`,
      `Owns the home: ${answerText(owns)}`,
      `Primary residence (not rental/commercial): ${answerText(primary)}`,
      `Single-family home: ${answerText(singleFamily)}`,
      `Active leaks: ${answerText(leaks)}`,
      sqft ? `Approx. home size: ${sqft} sq ft` : "",
      notes ? `About the roof: ${notes}` : "",
    ].filter(Boolean);

    setSubmitting(true);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // Fields shared with the contact forms so GHL maps the contact.
          full_name: homeownerName,
          phone: homeownerPhone,
          email: homeownerEmail || null,
          address,
          service_interest: "Roof Giveaway",
          message: summaryLines.join("\n"),
          opt_in: true,
          source: "shurdensroofing.com — Roof Giveaway",
          submitted_at: new Date().toISOString(),
          referred_by_code: getReferralCode(),
          // Giveaway-specific fields.
          entry_type: isNominate ? "nomination" : "self",
          nominator_name: nominatorName || null,
          nominator_phone: nominatorPhone || null,
          nominator_relationship: relationship || null,
          owns_home: owns,
          primary_residence: primary,
          single_family: singleFamily,
          active_leaks: leaks,
          approx_home_sqft: sqft || null,
          roof_notes: notes || null,
        }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      form.reset();
      setSubmitted(true);
    } catch {
      toast({ title: "Could not submit your entry", description: "Please try again or call 662-498-6629.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  // -------------------------------------------------------------------------

  const thankYou = (
    <div className="self-start rounded-lg border border-white/5 bg-dark p-6 text-center shadow-[var(--shadow-card)] md:p-8">
      <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
        <PartyPopper className="h-7 w-7" />
      </div>
      <p className="mb-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">You're In</p>
      <h3 className="mb-3 font-display text-2xl text-dark-foreground md:text-3xl">
        {isNominate ? "Nomination Received" : "Entry Received"}
      </h3>
      <p className="font-body text-sm text-dark-foreground/90">
        {isNominate
          ? "Thanks for looking out for your neighbor. We will reach out to the homeowner to schedule their free roof inspection."
          : "We will call you shortly to schedule your free roof inspection. Once the inspection confirms the roof needs replacing, you are officially in the running."}
      </p>
      <p className="mt-4 font-body text-sm text-dark-foreground/90">
        Follow us on{" "}
        <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-accent">
          Facebook
        </a>{" "}
        to see the finalists and vote. Questions? Call{" "}
        <a href="tel:6624986629" className="text-primary underline hover:text-accent">
          662-498-6629
        </a>
        .
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PAGE_URL)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-cta"
        >
          <Facebook className="h-4 w-4" /> Share on Facebook
        </a>
        <button
          type="button"
          onClick={copyLink}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 font-display text-sm uppercase tracking-wide text-dark-foreground transition-colors hover:border-primary hover:text-primary"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Link Copied" : "Copy Link"}
        </button>
      </div>
    </div>
  );

  const formBlock = (
    <form
      onSubmit={onSubmit}
      className="self-start rounded-lg border border-white/5 bg-dark p-6 shadow-[var(--shadow-card)] md:p-8"
      noValidate
    >
      <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Free Roof Giveaway Entry</p>
      <h3 className="mb-3 font-display text-2xl text-dark-foreground md:text-3xl">Enter the Giveaway</h3>
      <p className="mb-6 font-body text-sm text-dark-foreground/90">
        Signing up your own home, or know someone whose roof is in rough shape? Pick one to get started.
      </p>

      {/* Mode toggle */}
      <div className="mb-6 grid grid-cols-2 gap-2" role="radiogroup" aria-label="Who are you entering?">
        {(
          [
            { v: "self", icon: Home, title: "It's My Roof", sub: "I'm signing up my own home" },
            { v: "nominate", icon: UserPlus, title: "I'm Nominating Someone", sub: "A friend, family member, or neighbor" },
          ] as { v: Mode; icon: typeof Home; title: string; sub: string }[]
        ).map(({ v, icon: Icon, title, sub }) => (
          <button
            key={v}
            type="button"
            role="radio"
            aria-checked={mode === v}
            onClick={() => switchMode(v)}
            className={`flex flex-col items-start gap-1 rounded-md border p-3 text-left transition-colors md:p-4 ${
              mode === v
                ? "border-primary bg-primary/15"
                : "border-white/10 bg-secondary/40 hover:border-primary/50"
            }`}
          >
            <Icon className={`h-5 w-5 ${mode === v ? "text-primary" : "text-dark-foreground/70"}`} />
            <span className="font-display text-sm uppercase tracking-wide text-dark-foreground md:text-base">{title}</span>
            <span className="font-body text-xs text-dark-foreground/75">{sub}</span>
          </button>
        ))}
      </div>

      <div className="space-y-5">
        {isNominate && (
          <div className="space-y-5 rounded-md border border-primary/30 bg-primary/5 p-4">
            <p className="font-body text-xs font-bold uppercase tracking-wider text-primary">About You</p>
            <Field label="Your Full Name" name="nominatorName" type="text" required autoComplete="name" />
            <Field label="Your Phone Number" name="nominatorPhone" type="tel" required autoComplete="tel" placeholder="(662) 555-1234" />
            <Field label="How do you know them? (optional)" name="relationship" type="text" placeholder="Neighbor, mom, coworker..." />
          </div>
        )}

        <p className="font-body text-xs font-bold uppercase tracking-wider text-primary">
          {isNominate ? "About the Homeowner" : "About You"}
        </p>
        <Field
          label={isNominate ? "Homeowner's Full Name" : "Full Name"}
          name="homeownerName"
          type="text"
          required
          autoComplete={isNominate ? "off" : "name"}
        />
        <Field
          label={isNominate ? "Homeowner's Phone Number" : "Phone Number"}
          name="homeownerPhone"
          type="tel"
          required
          autoComplete={isNominate ? "off" : "tel"}
          placeholder="(662) 555-1234"
        />
        <Field
          label={isNominate ? "Homeowner's Email (optional)" : "Email (optional)"}
          name="homeownerEmail"
          type="email"
          autoComplete={isNominate ? "off" : "email"}
          placeholder="you@example.com"
        />
        <Field
          label="Home Address"
          name="address"
          type="text"
          required
          autoComplete={isNominate ? "off" : "street-address"}
          placeholder="123 Main St, Starkville, MS"
        />

        <p className="pt-2 font-body text-xs font-bold uppercase tracking-wider text-primary">
          {isNominate ? "Eligibility (as best you know)" : "Eligibility"}
        </p>
        <YesNo
          label={isNominate ? "Do they own the home?" : "Do you own the home?"}
          name="owns"
          value={owns}
          onChange={setOwns}
          allowUnsure={isNominate}
        />
        <YesNo
          label={isNominate ? "Is it their primary residence? (not a rental or business)" : "Is it your primary residence? (not a rental or business)"}
          name="primary"
          value={primary}
          onChange={setPrimary}
          allowUnsure={isNominate}
        />
        <YesNo label="Is it a single-family house?" name="singleFamily" value={singleFamily} onChange={setSingleFamily} allowUnsure={isNominate} />
        <YesNo label="Does the roof have active leaks?" name="leaks" value={leaks} onChange={setLeaks} allowUnsure />

        <Field
          label="Approx. Home Size in Sq Ft (optional)"
          name="sqft"
          type="number"
          inputMode="numeric"
          min={0}
          placeholder="1,800"
        />

        <div>
          <label htmlFor="notes" className={labelClass}>
            {isNominate ? "Why does this roof deserve to win?" : "Tell us about the roof"}
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            className={inputClass}
            placeholder={
              isNominate
                ? "Tell us about the homeowner and what's going on with their roof..."
                : "How old is it? Leaks, missing shingles, storm damage, sagging..."
            }
          />
        </div>

        <label className="flex cursor-pointer items-start gap-3 rounded-md border border-white/10 bg-secondary/40 px-3 py-3 font-body text-sm text-dark-foreground">
          <input
            type="checkbox"
            checked={optIn}
            onChange={(e) => setOptIn(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-primary"
          />
          <span>
            {isNominate
              ? "I have the homeowner's permission to share their information, and I agree that Shurden's Roofing may contact both of us about the giveaway and the free inspection."
              : "I agree to be contacted by Shurden's Roofing about the giveaway and my free roof inspection, and I confirm the information above is accurate."}
          </span>
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-md bg-primary px-6 py-4 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.01] hover:shadow-cta disabled:opacity-70"
        >
          {submitting ? "Submitting..." : isNominate ? "Submit Nomination →" : "Enter the Giveaway →"}
        </button>
        <p className="text-center font-body text-[11px] text-dark-foreground/75">
          Your information stays private. We never sell or share your details. It is only used for the giveaway and your free inspection.
        </p>
      </div>
    </form>
  );

  // -------------------------------------------------------------------------

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <SEO
        title="Free Roof Giveaway | Win a New Roof from Shurden's Roofing"
        description="Sign up for a chance to win a free roof replacement in North Mississippi. Enter your own home or nominate a neighbor, get a free inspection, and the community votes on the winner."
        path={PAGE_PATH}
        jsonLd={faqSchema}
      />
      <Navigation />
      <main>
        <PageHero
          eyebrow="Free Roof Giveaway"
          title={
            <>
              Got the Worst Roof in North Mississippi? <span className="text-primary">Let Us Replace It. Free.</span>
            </>
          }
          subtitle="Sign up, get a free inspection, and if your roof needs replacing you're in the running. The three roughest roofs go to a public vote, and the winner gets a brand-new GAF roof on us."
          image={heroImg}
          imageAlt="Storm-damaged shingle roof on a North Mississippi home"
        >
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#enter"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-cta"
            >
              <Home className="h-4 w-4" /> Enter My Roof
            </a>
            <a
              href="#enter"
              onClick={() => switchMode("nominate")}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-dark/60 px-7 py-4 font-display text-sm uppercase tracking-wide text-dark-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Users className="h-4 w-4" /> Nominate Someone
            </a>
          </div>
        </PageHero>

        {/* How it works */}
        <section className="bg-background py-20 md:py-28">
          <div className="container">
            <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">How It Works</p>
            <h2 className="max-w-3xl font-display text-3xl leading-tight text-foreground md:text-5xl">
              Four Steps Between You and a Free Roof.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ icon: Icon, title, body }, i) => (
                <div key={title} className="relative rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                  <span className="absolute right-5 top-4 font-display text-5xl font-extrabold text-primary/15">{i + 1}</span>
                  <span className="grid h-12 w-12 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl text-foreground">{title}</h3>
                  <p className="mt-2 font-body text-sm text-muted-foreground md:text-base">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility + form */}
        <section id="enter" className="scroll-mt-20 bg-secondary text-secondary-foreground">
          <div className="container grid gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28">
            <div>
              <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Who Qualifies</p>
              <h2 className="font-display text-3xl leading-tight md:text-5xl">Simple Rules. No Catch.</h2>
              <p className="mt-6 max-w-md font-body text-base text-secondary-foreground/75 md:text-lg">
                This is for real families in real homes who need a roof and can't swing it right now. Here is what makes an entry eligible.
              </p>

              <ul className="mt-8 space-y-3">
                {qualifies.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-base text-secondary-foreground/90">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 font-body text-xs font-bold uppercase tracking-wider text-secondary-foreground/70">Not eligible</p>
              <ul className="mt-3 space-y-2">
                {doesNotQualify.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-secondary-foreground/75">
                    <XCircle className="mt-0.5 h-4 w-4 flex-none text-secondary-foreground/50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-start gap-3 rounded-md border border-primary/30 bg-primary/10 p-4">
                <Phone className="mt-0.5 h-5 w-5 flex-none text-primary" />
                <p className="font-body text-sm text-secondary-foreground/90">
                  Roof leaking right now? Don't wait on the giveaway. Call{" "}
                  <a href="tel:6624986629" className="font-bold text-primary hover:text-accent">
                    662-498-6629
                  </a>{" "}
                  and we will stop the water first.
                </p>
              </div>
            </div>

            {submitted ? thankYou : formBlock}
          </div>
        </section>

        {/* The vote */}
        <section className="bg-dark py-20 text-dark-foreground md:py-28">
          <div className="container grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">The Vote</p>
              <h2 className="max-w-2xl font-display text-3xl leading-tight md:text-5xl">
                The Community Picks the Winner.
              </h2>
              <p className="mt-6 max-w-2xl font-body text-base text-dark-foreground/80 md:text-lg">
                Once inspections are done, we will post the three roughest qualifying roofs on our Facebook page. Friends, family, and neighbors vote, and the roof with the most votes gets replaced for free. Follow us so you don't miss the announcement.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-cta"
              >
                <Facebook className="h-4 w-4" /> Follow on Facebook
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-7 py-4 font-display text-sm uppercase tracking-wide text-dark-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" /> Follow on Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Share / QR */}
        <section className="bg-background py-20 md:py-28">
          <div className="container grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16">
            <div className="mx-auto w-full max-w-[260px] rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-card)]">
              <img
                src="/roof-giveaway-qr.svg"
                alt="QR code linking to shurdensroofing.com/roof-giveaway"
                width={512}
                height={512}
                loading="lazy"
                className="h-auto w-full"
              />
              <p className="mt-3 break-all text-center font-body text-xs font-bold text-muted-foreground">
                shurdensroofing.com/roof-giveaway
              </p>
            </div>
            <div>
              <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Spread the Word</p>
              <h2 className="max-w-2xl font-display text-3xl leading-tight text-foreground md:text-5xl">
                Know Someone Who Needs This?
              </h2>
              <p className="mt-6 max-w-2xl font-body text-base text-muted-foreground md:text-lg">
                Scan the code or share the link. Every entry gets a free inspection whether it wins or not, so there is nothing to lose by passing it along.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={copyLink}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-cta"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Link Copied" : "Copy Link"}
                </button>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PAGE_URL)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3.5 font-display text-sm uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Facebook className="h-4 w-4" /> Share
                </a>
                <a
                  href="/roof-giveaway-qr.png"
                  download="shurdens-roof-giveaway-qr.png"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3.5 font-display text-sm uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Download className="h-4 w-4" /> Download QR
                </a>
              </div>
              <p className="mt-4 flex items-center gap-2 font-body text-sm text-muted-foreground">
                <QrCode className="h-4 w-4" /> Print-ready QR for yard signs, flyers, and door hangers.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background pb-20 md:pb-28">
          <div className="container max-w-4xl">
            <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Quick Answers</p>
            <h2 className="font-display text-3xl leading-tight text-foreground md:text-5xl">Giveaway Questions.</h2>
            <div className="mt-10 divide-y divide-border border-y border-border">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base text-foreground md:text-lg">
                    {f.q}
                    <span className="grid h-8 w-8 flex-none place-items-center rounded-full border border-border text-primary transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-3xl font-body text-base text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Fine print */}
        <section className="border-t border-border bg-muted py-14 md:py-16">
          <div className="container max-w-4xl">
            <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">The Fine Print</p>
            <ol className="list-decimal space-y-2 pl-5 font-body text-sm text-muted-foreground">
              {finePrint.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ol>
            <p className="mt-6 font-body text-sm text-muted-foreground">
              Not eligible but still need a roof? Request a{" "}
              <Link to="/contact" className="text-primary underline hover:text-primary-dark">
                free inspection and estimate
              </Link>{" "}
              and we will take care of you the same way.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default RoofGiveawayPage;
