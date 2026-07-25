import SEO from "@/components/SEO";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";
import { Link } from "react-router-dom";
import { Wrench, Home, Scale, FileText } from "lucide-react";

const repairCases = [
  "The roof is under 12–15 years old with plenty of granule left on the shingles",
  "The damage is isolated — a cracked pipe boot, a flashing section, a handful of blown-off shingles",
  "The leak traces to one penetration or one slope, not multiple spots across the roof",
  "The decking underneath is dry and solid",
  "This is the first or second problem the roof has had, not the latest in a string of them",
];

const replaceCases = [
  "The roof is 18+ years old and problems are starting to stack up",
  "Shingles are brittle, curling, or losing granules across whole slopes — not just one spot",
  "You've paid for more than a couple of repairs in the last few years",
  "Leaks keep appearing in new places after each repair",
  "Storm damage is widespread enough that insurance is covering replacement",
  "Decking feels soft underfoot or shows rot from long-term moisture",
];

const decisionFactors = [
  {
    name: "Age Sets the Baseline",
    icon: Home,
    desc: "In Mississippi heat and humidity, architectural shingles realistically last 18 to 25 years. A repair on a 8-year-old roof buys you a decade or more of remaining life — money well spent. The same repair on a 22-year-old roof buys you months. Start every repair-or-replace decision with the age of the roof, because it determines what a repair can actually return.",
  },
  {
    name: "Isolated vs. Widespread",
    icon: Wrench,
    desc: "Most leaks start at a failure point — a pipe boot, chimney flashing, a valley — and those are genuine repairs, often modest ones. But when shingles across multiple slopes are brittle, bald, or lifting, there is no failure point to fix; the whole surface is failing at once. Repairs on a roof like that are a subscription, not a solution.",
  },
  {
    name: "The Math Over Five Years",
    icon: Scale,
    desc: "Don't compare one repair bill against a replacement quote — compare the next five years of each path. A roof needing repeated repairs costs money every year, still leaks between visits, still risks interior damage, and still needs replacement at the end. A rough rule: when repairs approach 25–30% of replacement cost, or damage covers more than a third of the roof, replacement usually wins the five-year math.",
  },
  {
    name: "The Insurance Wildcard",
    icon: FileText,
    desc: "If the damage came from hail or wind, the decision may not be repair vs. replace at all — it may be a claim. Widespread storm damage on a Mississippi roof often justifies full replacement paid by insurance, minus your deductible. That's a completely different financial picture, and it's why damage should be documented before you decide anything.",
  },
];

const watchOuts = [
  "A roofer who quotes a full replacement without walking the roof or showing you photos",
  "A roofer who patches everything and never mentions the roof's overall condition — repairs earn them repeat visits",
  "Shingle matching on older roofs: discontinued colors and weathered surroundings mean repairs can be visibly obvious",
  "Layover offers (new shingles over old) — they hide decking problems and shorten the new roof's life; we tear off to the deck every time",
  "Pressure to sign anything the same day — a real assessment comes with photos and a written itemized quote you can sit with",
];

const faqs = [
  {
    q: "Should I repair or replace my 20-year-old roof?",
    a: "At 20 years, a Mississippi architectural shingle roof is near the end of its realistic 18–25 year lifespan. An isolated problem — one pipe boot, one flashing section — can still be worth repairing to buy time. But if the shingles are brittle or losing granules broadly, money spent on repairs is usually better put toward replacement.",
  },
  {
    q: "How much does a roof repair cost compared to replacement?",
    a: "Most common repairs — a pipe boot, a flashing section, a handful of shingles — run a few hundred dollars, far less than homeowners fear. A full replacement is a four-to-five-figure project depending on size, pitch, and shingle line. That gap is exactly why the roof's remaining life matters: a cheap repair on a dying roof is the most expensive kind of cheap.",
  },
  {
    q: "Is it worth patching a roof that leaks in multiple places?",
    a: "Rarely. Multiple simultaneous leaks usually mean the shingle surface itself is failing, and each patch just moves the water to the next weak point. That's the 'repair subscription' pattern — and it's the clearest sign the five-year math favors replacement.",
  },
  {
    q: "Will insurance pay for a roof replacement instead of a repair?",
    a: "If a storm caused widespread damage — hail bruising or wind damage across the roof — carriers often approve full replacement rather than piecemeal repair, minus your deductible. The key is documentation before the evidence weathers. We photograph everything with drones, meet the adjuster on the roof, and review the scope line by line.",
  },
  {
    q: "Can you repair a roof so it matches the existing shingles?",
    a: "Usually, yes. We work with the full GAF lineup and can match or closely blend most architectural shingle profiles and colors common in North Mississippi. On older or discontinued shingles a perfect match isn't always possible — we'll tell you up front if a repair will be visible.",
  },
  {
    q: "How do I get an honest answer instead of a sales pitch?",
    a: "Ask for photos and an itemized written quote, and be suspicious of anyone who answers before climbing the roof. Our inspections are free, and the answer is honest in both directions: if a $300 repair is the right call, that's the quote you get. Repairs are how we earn the replacement call years from now.",
  },
];

const RepairVsReplaceGuide = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Roof Repair vs. Replacement in Mississippi: How to Decide",
    description:
      "A practical framework for deciding between roof repair and full replacement — roof age, damage extent, the five-year math, and the insurance wildcard, from a North Mississippi GAF Master Elite® roofer.",
    author: { "@id": "https://shurdensroofing.com/#business" },
    publisher: { "@id": "https://shurdensroofing.com/#business" },
    datePublished: "2026-07-25",
    dateModified: "2026-07-25",
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
        title="Roof Repair vs. Replacement in Mississippi: How to Decide"
        description="Repair it or replace it? A straight framework from a North Mississippi roofer: when a repair genuinely fixes the problem, when it's just a subscription, and how insurance changes the math."
        path="/guides/roof-repair-vs-replacement-mississippi"
        ogType="article"
        jsonLd={[articleSchema, faqSchema]}
      />
      <Navigation />
      <main>
        <PageHero
          eyebrow="Homeowner Guide"
          title="Repair the Roof, or Replace It?"
          subtitle="The most expensive mistake isn't picking the wrong contractor — it's fixing the wrong problem. Here's the framework we use on every North Mississippi roof to tell a real repair from a repair subscription."
        />

        <section className="bg-background">
          <div className="container max-w-3xl py-14 md:py-20">
            <div className="space-y-12 font-body text-base leading-relaxed text-foreground">
              <div>
                <p className="text-sm text-muted-foreground">By Shurden's Roofing · Updated July 25, 2026 · 8 min read</p>
                <p className="mt-6 text-lg">
                  Every week we're on a North Mississippi roof where the homeowner is asking the same
                  question: <strong>is this a repair, or is this the end?</strong> The honest answer
                  depends on four things — the roof's age, whether the problem is isolated or
                  widespread, what the next five years cost on each path, and whether a storm (and
                  therefore insurance) is part of the story. This guide walks through all four, the
                  same way we do on an inspection.
                </p>
              </div>

              <div>
                <h2 className="mb-6 font-display text-3xl font-bold">The Four Factors That Decide It</h2>
                <div className="space-y-6">
                  {decisionFactors.map((t) => {
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

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-border bg-card p-6">
                  <h2 className="font-display text-2xl font-bold">Repair Is the Right Call When…</h2>
                  <ul className="ml-5 mt-4 list-disc space-y-2">
                    {repairCases.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    See what our{" "}
                    <Link to="/services/roof-repair" className="text-primary underline">
                      roof repair service
                    </Link>{" "}
                    covers — pipe boots, flashing, valleys, and leak tracing.
                  </p>
                </div>
                <div className="rounded-lg border border-primary/30 bg-primary/5 p-6">
                  <h2 className="font-display text-2xl font-bold">Replacement Wins When…</h2>
                  <ul className="ml-5 mt-4 list-disc space-y-2">
                    {replaceCases.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Our{" "}
                    <Link to="/services/roof-replacement" className="text-primary underline">
                      roof replacement process
                    </Link>{" "}
                    — full tear-off, deck inspection, complete GAF system — in 1–2 days for most homes.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="mb-4 font-display text-3xl font-bold">What It Actually Costs</h2>
                <p>
                  Typical repairs — a pipe boot, a section of step flashing, a handful of wind-lifted
                  shingles — cost far less than most homeowners brace for, and we quote them in
                  writing after a free inspection. Replacement pricing depends on square footage,
                  pitch, decking condition, and the shingle line you choose; our{" "}
                  <Link to="/guides/roof-replacement-cost-mississippi" className="text-primary underline">
                    Mississippi roof replacement cost guide
                  </Link>{" "}
                  breaks down every driver so you can compare quotes intelligently. And if hail or
                  wind is part of the story, read our{" "}
                  <Link to="/guides/hail-damage-roof-insurance-claim-mississippi" className="text-primary underline">
                    hail damage insurance claim guide
                  </Link>{" "}
                  before paying anything out of pocket — you may not have to.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-display text-3xl font-bold">Watch Out for These</h2>
                <p className="mb-4">
                  The repair-or-replace conversation is where homeowners get taken advantage of —
                  in both directions. A few things to watch for, whoever you call:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  {watchOuts.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
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
                <h2 className="font-display text-2xl font-bold">Get the Answer With Photos, Not Pressure</h2>
                <p className="mt-3">
                  A free inspection settles the repair-or-replace question honestly. We climb the
                  roof, photograph what we find, and quote the right fix in writing — whether that's
                  a $300 pipe boot or a full replacement. Serving Starkville, Columbus, West Point,
                  Tupelo, Eupora, and all of North Mississippi.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center rounded-md bg-primary px-5 py-3 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Request a Free Inspection
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
          eyebrow="Free Roof Inspection"
          title="Stop Guessing. Get a Straight Answer."
          body="Free inspection, photos of what we find, and an honest repair-or-replace recommendation with a written itemized quote."
          buttonLabel="Schedule My Inspection"
          to="/contact"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
};

export default RepairVsReplaceGuide;
