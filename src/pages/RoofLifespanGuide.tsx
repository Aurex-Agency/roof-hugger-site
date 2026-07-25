import SEO from "@/components/SEO";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";
import { Link } from "react-router-dom";
import { Sun, Droplets, CloudLightning, Wind } from "lucide-react";

const climateFactors = [
  {
    name: "Heat and UV Exposure",
    icon: Sun,
    desc: "North Mississippi summers keep shingles at rooftop temperatures well above the air temperature for months at a time. That constant baking dries out the asphalt, makes shingles brittle, and accelerates granule loss — the protective layer that shields the mat from UV. A shingle that would age gracefully in Ohio ages in dog years here.",
  },
  {
    name: "Humidity and Algae",
    icon: Droplets,
    desc: "Our humid air feeds the blue-green algae that causes black streaks on shingles, and it keeps roofs damp longer after every rain and morning dew. Persistent moisture accelerates granule loss, feeds moss in shaded areas, and shortens shingle life on north-facing slopes that never fully dry out.",
  },
  {
    name: "Spring Hail and Straight-Line Winds",
    icon: CloudLightning,
    desc: "Most North Mississippi roofs don't die of old age — they're finished off by a storm. Hail bruising and wind-lifted shingles compromise a roof years before it fails outright. A 15-year-old roof that's taken two hail events is not a 15-year-old roof anymore.",
  },
  {
    name: "Attic Ventilation",
    icon: Wind,
    desc: "A poorly ventilated attic in a Mississippi summer can run 30 to 50 degrees hotter than the outside air, cooking shingles from underneath while sun cooks them from above. Bad ventilation is one of the most common reasons we see 25-year shingles fail at year 15 — and it can void portions of a manufacturer warranty.",
  },
];

const lifespans = [
  {
    material: "3-tab asphalt shingles",
    national: "15–20 years",
    mississippi: "12–18 years",
    note: "The budget option. Thinner mat, lower wind ratings, and the first to go in a hail event. Rare on new installs today.",
  },
  {
    material: "Architectural shingles (e.g. GAF Timberline HDZ)",
    national: "25–30 years",
    mississippi: "18–25 years",
    note: "The standard on North Mississippi homes. Most of the roofs we replace are architectural shingles in this age range.",
  },
  {
    material: "Premium / designer shingles (e.g. GAF Camelot II, Slateline)",
    national: "30+ years",
    mississippi: "25–30 years",
    note: "Heavier mats, better impact resistance, and longer warranties — they hold up noticeably better to our heat and storms.",
  },
];

const agingSigns = [
  "Granules collecting in gutters and at downspout splash blocks",
  "Shingles that look bald, shiny, or patchy from the street",
  "Curling, cupping, or clawing shingle edges",
  "Cracked or brittle shingles that break instead of flexing",
  "Black algae streaks spreading across multiple slopes",
  "More than a few repairs in the last two or three years",
];

const extendLife = [
  {
    title: "Fix Ventilation Before It Costs You",
    body: "Balanced intake and exhaust ventilation — soffit vents feeding ridge vents — keeps attic temperatures down and moisture moving. It's the single highest-leverage thing a Mississippi homeowner can do for shingle life, and it's why every full system we install includes GAF Cobra ridge ventilation.",
  },
  {
    title: "Keep Trees Off the Roof",
    body: "Overhanging limbs drop debris that traps moisture, shade slopes that then grow moss and algae, and turn into impact damage in every wind event. Keep branches trimmed back from the roofline.",
  },
  {
    title: "Get Storm Damage Documented Early",
    body: "Hail bruising and lifted shingles shorten roof life even when nothing leaks yet — and insurance claim windows don't stay open forever. A free inspection after any significant storm protects both the roof and the claim.",
  },
  {
    title: "Handle Small Repairs Promptly",
    body: "A cracked pipe boot or a lifted flashing section lets a little water in every rain. Wet decking rots quietly for months before a ceiling stain shows up. Small repairs made early are the cheapest years of roof life you can buy.",
  },
  {
    title: "Get an Inspection Every Few Years",
    body: "A professional inspection every two to three years — and after every major storm — catches failing sealant, popped fasteners, and early granule loss while they're still maintenance items instead of replacement triggers.",
  },
];

const faqs = [
  {
    q: "How long does an architectural shingle roof last in Mississippi?",
    a: "Realistically 18 to 25 years. Manufacturers rate architectural shingles for 25 to 30 years, but Mississippi heat, humidity, and storm frequency shave years off that. Most of the roofs we replace across North Mississippi are architectural shingles in the 18 to 25 year range.",
  },
  {
    q: "Why do roofs wear out faster in Mississippi than up north?",
    a: "Three reasons stack on top of each other: longer, hotter summers that bake the asphalt; humidity that keeps shingles damp and feeds algae; and one of the country's more active severe weather corridors, with spring hail and straight-line winds doing damage that shortens roof life even when nothing leaks right away.",
  },
  {
    q: "Can a roof last 30 years in Mississippi?",
    a: "It can — with the right shingle, proper attic ventilation, prompt small repairs, and some luck with hail. Premium designer shingles installed over a well-ventilated attic have the best odds. But plan around the realistic range for your shingle type rather than the number on the wrapper.",
  },
  {
    q: "How do I find out how old my roof is?",
    a: "Check your closing documents or previous owner's records for a roofing invoice, ask neighbors with identical houses when theirs was done, or have a roofer inspect it — shingle condition, granule loss, and fastener patterns let an experienced roofer estimate age within a few years. We do this during every free inspection.",
  },
  {
    q: "Does insurance replace a roof that's just old?",
    a: "No — homeowner's policies cover sudden damage from storms, not wear and tear. That's exactly why post-storm inspections matter: if a storm damaged an aging roof, the claim needs to be documented while the evidence is fresh, not after two more years of weathering blur the line between damage and age.",
  },
  {
    q: "Is it worth replacing a roof before it fails?",
    a: "Usually, yes. Replacing on your schedule means choosing your shingle, your contractor, and your season — instead of tarping a leak in December and taking whoever can show up. An aging roof also drags on home sale negotiations, while a new transferable GAF warranty helps at closing.",
  },
];

const RoofLifespanGuide = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Long Does a Roof Last in Mississippi? Real Lifespans by Shingle Type",
    description:
      "How long asphalt shingle roofs actually last in Mississippi heat, humidity, and storm weather — realistic lifespans by shingle type, signs of an aging roof, and how to add years to yours.",
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
        title="How Long Does a Roof Last in Mississippi? (2026 Guide)"
        description="Asphalt shingle roofs last 18–25 years in Mississippi — less than the 25–30 the wrapper promises. See real lifespans by shingle type, why our climate is harder on roofs, and how to add years to yours."
        path="/guides/how-long-does-a-roof-last-in-mississippi"
        ogType="article"
        jsonLd={[articleSchema, faqSchema]}
      />
      <Navigation />
      <main>
        <PageHero
          eyebrow="Homeowner Guide"
          title="How Long Does a Roof Last in Mississippi?"
          subtitle="The number on the shingle wrapper assumes a kinder climate than ours. Here's how long roofs actually last in North Mississippi — and what decides whether yours beats the average or falls short of it."
        />

        <section className="bg-background">
          <div className="container max-w-3xl py-14 md:py-20">
            <div className="space-y-12 font-body text-base leading-relaxed text-foreground">
              <div>
                <p className="text-sm text-muted-foreground">By Shurden's Roofing · Updated July 25, 2026 · 9 min read</p>
                <p className="mt-6 text-lg">
                  The short answer: an architectural asphalt shingle roof in Mississippi typically
                  lasts <strong>18 to 25 years</strong> — noticeably less than the 25 to 30 years the
                  same shingle might deliver in a milder climate. Between our summer heat, year-round
                  humidity, and one of the most active severe-weather corridors in the country, North
                  Mississippi is simply a hard place to be a roof. This guide covers the realistic
                  lifespan for each shingle type, the climate factors that shorten it, and the
                  maintenance habits that stretch it.
                </p>
              </div>

              <div>
                <h2 className="mb-6 font-display text-3xl font-bold">Why Mississippi Is Hard on Roofs</h2>
                <div className="space-y-6">
                  {climateFactors.map((t) => {
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
                <h2 className="mb-6 font-display text-3xl font-bold">Realistic Lifespan by Shingle Type</h2>
                <div className="space-y-5">
                  {lifespans.map((l) => (
                    <div key={l.material} className="rounded-lg border border-border bg-card p-6">
                      <h3 className="font-display text-lg font-bold">{l.material}</h3>
                      <p className="mt-2 text-sm">
                        <span className="font-bold">Manufacturer rating:</span> {l.national} ·{" "}
                        <span className="font-bold text-primary">Realistic in Mississippi:</span> {l.mississippi}
                      </p>
                      <p className="mt-2">{l.note}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5">
                  These ranges assume a proper installation over a ventilated attic. A bad install —
                  overdriven nails, skipped starter strips, no ridge ventilation — can take a decade
                  off any shingle, which is why the contractor matters as much as the product. It's
                  also why we install complete{" "}
                  <Link to="/services/roof-replacement" className="text-primary underline">
                    GAF roofing systems
                  </Link>{" "}
                  rather than mixing components, and register the manufacturer warranty in your name.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-display text-3xl font-bold">Signs Your Roof Is Reaching the End</h2>
                <p className="mb-4">
                  Age alone doesn't condemn a roof — condition does. These are the signs we look for
                  on every inspection:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  {agingSigns.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p className="mt-4">
                  Seeing a few of these? That's the point where it's worth understanding what a
                  replacement actually costs — our{" "}
                  <Link to="/guides/roof-replacement-cost-mississippi" className="text-primary underline">
                    Mississippi roof replacement cost guide
                  </Link>{" "}
                  breaks down what drives pricing. And if you're not sure whether you're looking at
                  end-of-life or just an isolated problem, our{" "}
                  <Link to="/guides/roof-repair-vs-replacement-mississippi" className="text-primary underline">
                    repair vs. replacement guide
                  </Link>{" "}
                  walks through how to decide.
                </p>
              </div>

              <div>
                <h2 className="mb-6 font-display text-3xl font-bold">How to Add Years to Your Roof</h2>
                <ol className="space-y-5">
                  {extendLife.map((m, i) => (
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
                <h2 className="font-display text-2xl font-bold">Not Sure How Much Life Your Roof Has Left?</h2>
                <p className="mt-3">
                  A free inspection answers it with photos, not guesses. We climb the roof, document
                  its condition, and tell you honestly whether it needs a repair, a replacement, or
                  nothing at all — across Starkville, Columbus, West Point, Tupelo, and the rest of
                  North Mississippi.
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
          title="Find Out Where Your Roof Really Stands."
          body="Free inspection, photo documentation, and a straight answer about remaining life — repair, replace, or leave it alone."
          buttonLabel="Schedule My Inspection"
          to="/contact"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
};

export default RoofLifespanGuide;
