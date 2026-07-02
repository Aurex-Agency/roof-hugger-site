import SEO from "@/components/SEO";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";
import { Link } from "react-router-dom";
import { Home, Layers, Ruler, ShieldCheck, FileText } from "lucide-react";

const costFactors = [
  {
    name: "Roof Size & Complexity",
    icon: Ruler,
    desc: "Roofers price in \"squares\" — one square is 100 square feet of roof surface. A single-story ranch with a simple gable roof needs less material and labor per square than a two-story home with dormers, valleys, and multiple rooflines. Steep pitches slow the crew down and require more safety equipment, which adds labor cost even when the square count is the same.",
  },
  {
    name: "Tear-Off & Deck Condition",
    icon: Layers,
    desc: "A proper replacement tears off every existing layer down to the wood decking. What's under the old shingles matters: soft or rotted decking has to be replaced before the new roof goes on. Good contractors inspect every sheet after tear-off and itemize any decking replacement on the invoice — if a quote doesn't mention deck inspection at all, ask why.",
  },
  {
    name: "Shingle Line & System Components",
    icon: Home,
    desc: "An entry-level architectural shingle and a designer shingle like GAF Camelot II or Slateline can differ meaningfully in price per square. The full system matters too: underlayment, starter strips, ridge cap, ventilation, and ice-and-water protection at valleys and penetrations. A cheap quote often means components were quietly left out.",
  },
  {
    name: "Warranty & Contractor Certification",
    icon: ShieldCheck,
    desc: "Manufacturer warranties depend on who installs the roof. GAF's strongest warranties — Gold Pledge and Silver Pledge — can only be registered by Master Elite® certified contractors, a certification fewer than 2% of roofing contractors hold. Two identical-looking quotes can carry very different warranty protection.",
  },
  {
    name: "Accessories & Extras",
    icon: FileText,
    desc: "Flashing replacement, new pipe boots, chimney work, skylights, gutters, and fascia repair all add line items. None of them should be mystery charges — every one belongs on a written, itemized quote so you can see exactly what you're paying for and compare bids fairly.",
  },
];

const redFlags = [
  "A price quoted over the phone without anyone getting on the roof",
  "One lump-sum number with no itemized breakdown of materials, labor, and accessories",
  "No mention of tear-off or deck inspection — a sign they may shingle over problems",
  "A contractor who can't name the warranty they'll register, or who isn't certified to register it",
  "Pressure to sign today for a \"storm discount\" — reputable local roofers don't need pressure tactics",
  "No local address or references — after hail storms, out-of-town crews follow the damage and leave with the deposits",
];

const faqs = [
  {
    q: "What does a roof replacement cost in Mississippi?",
    a: "Most full asphalt shingle replacements on single-family homes in North Mississippi land somewhere in the $8,000 to $20,000+ range, depending on the size of the roof, its pitch and complexity, deck condition, and the shingle line you choose. Large, steep, or designer-shingle roofs can run higher. The only number that matters is a written, itemized quote after someone has actually inspected your roof.",
  },
  {
    q: "How is roofing priced — what is a \"square\"?",
    a: "A square is 100 square feet of roof surface, and roof size is measured in squares, not house square footage. A 2,000 square foot house might have a 25 to 30 square roof once pitch and overhangs are counted. Material and labor are both priced per square.",
  },
  {
    q: "Will insurance cover my roof replacement?",
    a: "If the roof was damaged by a storm — wind, hail, or falling limbs — your homeowner's policy likely covers replacement, minus your deductible. Age and normal wear are not covered. If a storm is involved, get the damage documented before filing so your claim starts with evidence.",
  },
  {
    q: "Is it cheaper to roof over my existing shingles?",
    a: "An overlay is cheaper on day one and more expensive every day after. It hides deck damage, adds weight, shortens the life of the new shingles, and usually voids or weakens warranty coverage. We tear off every roof we replace — it's the only way to know what's underneath.",
  },
  {
    q: "How long does a replacement take?",
    a: "Most single-family homes in North Mississippi are torn off, dried in, and re-roofed in one to two days. Larger or more complex roofs take longer — and a realistic timeline should be in your quote, not a surprise afterward.",
  },
  {
    q: "How should I compare quotes from different roofers?",
    a: "Compare systems, not just totals. Line up each quote's shingle line, underlayment, ventilation, ice-and-water coverage, deck inspection policy, cleanup, and — most importantly — the exact warranty being registered and who is certified to register it. A quote that's $2,000 cheaper but skips components and carries a weaker warranty is not cheaper.",
  },
];

const RoofCostGuide = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Much Does a Roof Replacement Cost in Mississippi? (2026 Homeowner's Guide)",
    description:
      "What drives roof replacement cost in Mississippi — squares, pitch, deck condition, shingle lines, and warranties — plus red flags to watch for when comparing quotes.",
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
        title="Roof Replacement Cost in Mississippi: 2026 Guide"
        description="What a new roof really costs in Mississippi — the factors that drive the price, how roofers measure and quote, and the red flags that signal a bad bid."
        path="/guides/roof-replacement-cost-mississippi"
        ogType="article"
        jsonLd={[articleSchema, faqSchema]}
      />
      <Navigation />
      <main>
        <PageHero
          eyebrow="Homeowner Guide"
          title="What Does a New Roof Cost in Mississippi?"
          subtitle="A straight-talk guide to what actually drives roof replacement pricing — and how to compare quotes without getting burned."
        />

        <section className="bg-background">
          <div className="container max-w-3xl py-14 md:py-20">
            <div className="space-y-12 font-body text-base leading-relaxed text-foreground">
              <div>
                <p className="text-sm text-muted-foreground">By Shurden's Roofing · Updated July 2, 2026 · 9 min read</p>
                <p className="mt-6 text-lg">
                  "How much is this going to cost me?" is the first question every homeowner asks — and
                  the one most roofing websites dodge. Here's the honest answer: most full asphalt shingle
                  replacements on single-family homes in North Mississippi fall somewhere between
                  <strong> $8,000 and $20,000+</strong>, and where your roof lands in that range comes down
                  to a handful of factors you can actually understand. This guide walks through each one,
                  explains how roofers measure and quote, and shows you the red flags that separate a real
                  bid from a bad one.
                </p>
              </div>

              <div>
                <h2 className="mb-6 font-display text-3xl font-bold">The 5 Factors That Set Your Price</h2>
                <div className="space-y-6">
                  {costFactors.map((t) => {
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
                <h2 className="mb-3 font-display text-3xl font-bold">Why Phone Quotes Are Worthless</h2>
                <p>
                  No honest roofer can price your roof without seeing it. The square count, the pitch, the
                  number of penetrations and valleys, and the condition of the decking under the shingles
                  all change the number — sometimes by thousands of dollars. A real quote starts with a
                  free inspection: someone climbs the roof, measures it, photographs its condition, and
                  puts every line item in writing. That written, itemized quote is also your protection —
                  it's what makes two bids comparable and keeps "extras" from appearing halfway through
                  the job.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-3xl font-bold">When Insurance Pays Instead of You</h2>
                <p>
                  Here's the part many Mississippi homeowners miss: if your roof was damaged by wind, hail,
                  or falling limbs, your homeowner's insurance likely covers the replacement — you pay the
                  deductible, and the policy pays the rest of the approved scope. Age and normal wear aren't
                  covered, but North Mississippi's spring hail and straight-line wind events put a lot of
                  roofs into legitimate claim territory every year. If a storm has hit your area since your
                  roof was last inspected, it's worth a{" "}
                  <Link to="/services/storm-damage-insurance-claims" className="text-primary underline">
                    free storm damage inspection
                  </Link>{" "}
                  before you assume you're paying out of pocket.
                </p>
              </div>

              <div>
                <h2 className="mb-6 font-display text-3xl font-bold">Red Flags When Comparing Quotes</h2>
                <ul className="ml-6 list-disc space-y-2">
                  {redFlags.map((s) => (
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
                <h2 className="font-display text-2xl font-bold">Want a Real Number for Your Roof?</h2>
                <p className="mt-3">
                  We inspect roofs across Starkville, Columbus, West Point, Tupelo, and the rest of North
                  Mississippi for free. You get photos, a straight answer on repair vs. replacement, and a
                  written itemized quote — no pressure, no obligation. Learn more about our{" "}
                  <Link to="/services/roof-replacement" className="text-primary underline">
                    roof replacement process
                  </Link>
                  , or get on the schedule below.
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
          eyebrow="Free Written Quote"
          title="Stop Guessing What the Roof Costs."
          body="A free inspection gets you an itemized, written quote and a straight answer — repair, replacement, or nothing at all."
          buttonLabel="Schedule My Inspection"
          to="/contact"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
};

export default RoofCostGuide;
