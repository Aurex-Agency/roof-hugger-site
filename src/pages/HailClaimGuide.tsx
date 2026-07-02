import SEO from "@/components/SEO";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";
import { Link } from "react-router-dom";
import { CloudHail, Wind, Search, AlertCircle } from "lucide-react";

const damageSigns = [
  {
    name: "Hail Bruising on Shingles",
    icon: CloudHail,
    desc: "Hail strikes knock the protective granules off asphalt shingles, leaving soft, dark circles — often the size of a dime to a golf ball. From the ground they're nearly invisible, but every strike exposes the shingle's mat to UV and water, shortening its life and compromising the roof even if it isn't leaking yet.",
  },
  {
    name: "Wind-Lifted and Missing Shingles",
    icon: Wind,
    desc: "Straight-line winds lift shingle tabs and break their adhesive seal. A lifted shingle may lay back down and look fine from the street while letting wind-driven rain underneath. Missing tabs and torn ridge cap are the obvious version — exposed nail lines that leak in the very next rain.",
  },
  {
    name: "Collateral Damage You Can Check Yourself",
    icon: Search,
    desc: "Dented gutters and downspouts, dinged mailboxes, pockmarked AC fins, and splatter marks on fences and decks are all evidence hail hit your property hard enough to matter. Adjusters look at these same indicators — if your gutters took dents, your shingles took strikes.",
  },
  {
    name: "Interior Warning Signs",
    icon: AlertCircle,
    desc: "Ceiling stains, blistered paint, damp attic insulation, or a musty smell upstairs after a storm mean water is already inside. At that point tarping comes first — stop the water, then work the claim.",
  },
];

const claimSteps = [
  {
    title: "Document First, File Second",
    body: "Before you call your carrier, get the roof inspected and photographed by a roofer who documents storm damage professionally. Filing with evidence in hand means your claim starts strong — and if the damage doesn't justify a claim, you find that out before putting one on your record.",
  },
  {
    title: "File Promptly — Policies Have Deadlines",
    body: "Most Mississippi homeowner policies require prompt notice of storm damage, and some limit how long after a storm you can file. Hail damage doesn't heal, but evidence weathers: granule loss spreads and distinct strike marks blur into general wear the longer you wait. Check your policy and don't sit on a storm.",
  },
  {
    title: "Meet the Adjuster With Your Roofer",
    body: "Your carrier sends an adjuster to inspect the roof. You want your roofer on the roof with them — walking every marked hit, pointing out damage on all slopes, and making sure the adjuster's scope reflects what's actually up there. Damage that doesn't make the scope doesn't get paid.",
  },
  {
    title: "Review the Scope Line by Line",
    body: "The carrier's scope of loss lists everything they've approved: squares of shingles, underlayment, flashing, vents, labor. Scopes miss things — a slope, code-required components, disposal. A roofer who reviews the scope line by line and files supplements with photo documentation is the difference between a complete roof and a partial payment.",
  },
  {
    title: "Understand ACV vs. RCV and Your Deductible",
    body: "Most policies pay in two checks: actual cash value (the depreciated amount) up front, then recoverable depreciation after the work is completed and invoiced. Your deductible is your out-of-pocket share — and be wary of any contractor who offers to 'eat' or 'waive' it. That's insurance fraud in most cases, and it tells you how they treat honesty elsewhere.",
  },
  {
    title: "Choose Your Own Contractor",
    body: "Mississippi homeowners choose who repairs their roof — not the insurance company. Carriers may suggest preferred vendors, but the decision is yours. Pick a local, certified contractor who will still be down the road when the warranty matters.",
  },
];

const stormChasers = [
  "They knock on your door within days of a storm, from out of state, with no local address",
  "They ask you to sign an assignment of benefits or contract 'just to get the inspection'",
  "They offer to waive or absorb your deductible — that's a fraud red flag, not a discount",
  "They pressure you to file a claim before anyone has documented actual damage",
  "They collect deposits and disappear when the next storm hits two states over",
];

const faqs = [
  {
    q: "How do I know if my roof has hail damage?",
    a: "Usually, you can't tell from the ground. Hail bruising is subtle — soft dark circles where granules were knocked away. Check collateral indicators you can see safely: dented gutters, downspouts, and AC fins. If hail fell in your area, get a free professional inspection; a roofer will climb the roof and photograph every strike.",
  },
  {
    q: "Should I call my insurance company or a roofer first?",
    a: "Roofer first. A documented inspection tells you whether the damage justifies a claim before one goes on your record, and it means you file with drone photos and marked damage instead of a guess.",
  },
  {
    q: "How long do I have to file a hail damage claim in Mississippi?",
    a: "It depends on your policy — most require 'prompt' notice, and many set specific windows for storm claims. Practically, file as soon as damage is documented: evidence weathers, and late claims invite disputes about which storm caused what.",
  },
  {
    q: "Will my rates go up if I file?",
    a: "Storm damage is generally treated as an 'act of God' claim, different from negligence claims. Carriers vary, and regional rate changes after major storms affect everyone whether or not they filed. Confirm specifics with your agent — but don't let rate fear stop you from claiming legitimate damage you've been paying premiums to cover.",
  },
  {
    q: "What if my claim is denied or the scope seems low?",
    a: "Denials and short scopes aren't the end. With proper photo documentation, your contractor can request a re-inspection and file supplements for missed items. This is exactly why documentation before and during the adjuster meeting matters so much.",
  },
  {
    q: "Does hail damage metal roofs too?",
    a: "Large hail can dent metal panels. Often it's cosmetic, but severe strikes can damage seams, fasteners, and coatings. We document metal roof damage the same way — drone photos and a walk with your adjuster.",
  },
];

const HailClaimGuide = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Hail Damage Roof Insurance Claims in Mississippi: A Homeowner's Guide",
    description:
      "How to spot hail and wind damage, when to file an insurance claim in Mississippi, what happens with the adjuster, and how to avoid storm-chaser scams.",
    author: { "@id": "https://shurdensroofing.com/#business" },
    publisher: { "@id": "https://shurdensroofing.com/#business" },
    datePublished: "2026-07-02",
    dateModified: "2026-07-02",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <SEO
        title="Hail Damage Roof Insurance Claims in Mississippi"
        description="How to spot hail damage, file your Mississippi homeowner's claim the right way, handle the adjuster meeting, and avoid storm-chaser scams — from a local GAF Master Elite® roofer."
        path="/guides/hail-damage-roof-insurance-claim-mississippi"
        ogType="article"
        jsonLd={[articleSchema, faqSchema]}
      />
      <Navigation />
      <main>
        <PageHero
          eyebrow="Homeowner Guide"
          title="Hail Hit Your Roof. Now What?"
          subtitle="A Mississippi homeowner's guide to hail and wind damage insurance claims — what to look for, how the claim actually works, and the scams to avoid after every storm."
        />

        <section className="bg-background">
          <div className="container max-w-3xl py-14 md:py-20">
            <div className="space-y-12 font-body text-base leading-relaxed text-foreground">
              <div>
                <p className="text-sm text-muted-foreground">By Shurden's Roofing · Updated July 2, 2026 · 10 min read</p>
                <p className="mt-6 text-lg">
                  Every spring, hail and straight-line winds tear across North Mississippi — and every
                  spring, homeowners face the same two problems: figuring out whether their roof actually
                  took damage, and navigating an insurance claim they've never filed before while
                  out-of-town crews knock on their doors. This guide walks through both, step by step,
                  the same way we walk our own customers through it.
                </p>
              </div>

              <div>
                <h2 className="mb-6 font-display text-3xl font-bold">What Storm Damage Actually Looks Like</h2>
                <div className="space-y-6">
                  {damageSigns.map((t) => {
                    const Icon = t.icon;
                    return (
                      <div key={t.name} className="rounded-lg border border-border bg-card p-6">
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" />
                          </span>
                          <h3 className="font-display text-xl font-bold">{t.name}</h3>
                        </div>
                        <p className="mt-4">{t.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="mb-6 font-display text-3xl font-bold">The Claim, Step by Step</h2>
                <ol className="space-y-5">
                  {claimSteps.map((m, i) => (
                    <li key={m.title} className="flex gap-4">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold">{m.title}</h3>
                        <p className="mt-1">{m.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="mb-4 font-display text-3xl font-bold">How to Spot a Storm Chaser</h2>
                <p className="mb-4">
                  After every major hail event, out-of-town crews sweep through Mississippi neighborhoods
                  chasing insurance money. Some do adequate work; many don't — and none of them will be
                  around when the warranty matters. Watch for these signs:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  {stormChasers.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-3 font-display text-3xl font-bold">Why Documentation Wins Claims</h2>
                <p>
                  The entire claim rests on evidence. That's why we document every storm inspection with
                  high-resolution drone photography — every strike marked, every slope covered, every
                  damaged accessory photographed — before you ever call your carrier. Then we meet your
                  adjuster on the roof and walk every hit with them. We regularly work claims alongside
                  State Farm, Allstate, USAA, Farm Bureau, and Liberty Mutual adjusters across North
                  Mississippi, and the process is the same every time: document thoroughly, walk the
                  adjuster through it, review the scope line by line, and flag anything missing before
                  approval. You can read exactly how our{" "}
                  <Link to="/services/storm-damage-insurance-claims" className="text-primary underline">
                    storm damage and insurance claim process
                  </Link>{" "}
                  works from first call to final invoice.
                </p>
              </div>

              <div>
                <h2 className="mb-6 font-display text-3xl font-bold">Frequently Asked Questions</h2>
                <div className="space-y-5">
                  {faqs.map((f) => (
                    <div key={f.q}>
                      <h3 className="font-display text-lg font-bold">{f.q}</h3>
                      <p className="mt-2">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-primary/30 bg-primary/5 p-6">
                <h2 className="font-display text-2xl font-bold">Storm Roll Through Your Area?</h2>
                <p className="mt-3">
                  We offer free, drone-documented storm inspections across Starkville, Columbus, West
                  Point, Tupelo, Louisville, and the rest of North Mississippi. If there's a claim worth
                  filing, you'll have the evidence. If there isn't, you'll have peace of mind — either
                  way, it costs you nothing.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center rounded-md bg-primary px-5 py-3 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Request a Free Storm Inspection
                  </Link>
                  <a
                    href="tel:6624986629"
                    className="inline-flex items-center rounded-md border border-primary px-5 py-3 font-display text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:bg-primary/10"
                  >
                    Call 662-498-6629
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaBanner
          eyebrow="Free Storm Inspection"
          title="Don't Let the Claim Window Close."
          body="Free drone-documented inspection and a straight answer about whether a claim makes sense. Evidence first, paperwork second."
          buttonLabel="Schedule My Inspection"
          to="/contact"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
};

export default HailClaimGuide;
