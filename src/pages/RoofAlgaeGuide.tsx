import SEO from "@/components/SEO";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";
import { Link } from "react-router-dom";
import { Droplets, Leaf, AlertTriangle, ShieldCheck } from "lucide-react";

const growthTypes = [
  {
    name: "Black Streaks: Blue-Green Algae",
    icon: Droplets,
    desc: "Those dark streaks running down shingles are Gloeocapsa magma, a blue-green algae that feeds on the limestone filler inside asphalt shingles. It thrives in humid Southern air, spreads by airborne spores from roof to roof, and shows up worst on north-facing slopes and shaded areas that stay damp longest. Early on it's mostly a cosmetic problem — but it doesn't stay that way forever.",
  },
  {
    name: "Moss: The One That Does Real Damage",
    icon: Leaf,
    desc: "Moss grows where shade and moisture persist — under overhanging trees, on slopes that never get sun. Unlike algae, moss holds water against the shingle surface like a wet sponge and works its way under shingle edges, lifting them and breaking their wind seal. A mossy roof section is actively deteriorating, not just discolored.",
  },
  {
    name: "Lichen: Stubborn and Destructive",
    icon: AlertTriangle,
    desc: "Lichen — crusty, coin-like growths — bonds into the granule surface itself. Scraping or aggressive cleaning takes granules with it, permanently damaging the shingle. Lichen on an older roof is usually a sign the surface has been holding moisture for years.",
  },
  {
    name: "Why Mississippi Roofs Get It Worse",
    icon: ShieldCheck,
    desc: "Algae needs moisture, warmth, and a limestone food source — North Mississippi supplies all three generously. High humidity, heavy dew, long warm seasons, and tree cover mean roofs here streak years earlier than the same shingles would in a drier climate. If your neighbors have black streaks, spores are already in the neighborhood air.",
  },
];

const cleaningDos = [
  "Have it soft-washed: a low-pressure application of a roof-safe cleaning solution (the shingle industry standard is a 50/50 mix of laundry-strength bleach and water), rinsed after it has time to work",
  "Protect landscaping — plants and grass below the roofline get soaked with fresh water before and after cleaning",
  "Work from a ladder or hire it out — wet shingles are dangerously slick, and algae makes them slicker",
  "Expect streaks to fade over weeks as rain rinses the dead algae away, not vanish the same afternoon",
  "Pair cleaning with prevention, or the streaks return within a couple of seasons",
];

const cleaningDonts = [
  "Never pressure wash asphalt shingles — it strips the protective granules and takes years off the roof in one afternoon",
  "Don't scrape or wire-brush moss and lichen off dry shingles; you'll remove granules with them",
  "Don't use harsh chemicals or degreasers not made for roofing — they can damage shingles and void warranties",
  "Don't walk a wet, algae-covered roof to save a service call — the fall risk isn't worth it",
];

const prevention = [
  {
    title: "Choose Algae-Resistant Shingles at Replacement",
    body: "Modern GAF Timberline shingles come with StainGuard® algae protection — copper-infused granules that suppress algae growth for years, backed by an algae-discoloration limited warranty. If your roof is due for replacement anyway, this is the permanent fix: the next roof simply doesn't streak the way the old one did.",
  },
  {
    title: "Install Zinc or Copper Strips",
    body: "A strip of zinc or copper near the ridge releases trace metal ions every time it rains, washing down the slope and suppressing algae growth below it. It's a proven retrofit for roofs with years of life left that you'd rather not clean repeatedly.",
  },
  {
    title: "Trim Back Overhanging Trees",
    body: "Shade is half the equation. Opening slopes up to sunlight lets them dry after rain and dew, which starves algae and moss of the persistent moisture they need. It also cuts down the debris that feeds moss growth in valleys and behind chimneys.",
  },
  {
    title: "Keep Gutters and Valleys Clear",
    body: "Leaves and debris hold moisture against shingles and give moss a foothold. Clean gutters and clear valleys keep water moving off the roof instead of soaking into organic buildup on top of it.",
  },
  {
    title: "Fix Ventilation and Moisture Problems",
    body: "A poorly ventilated attic keeps the roof deck warmer and damper — friendlier to growth on the surface above it. Balanced soffit-and-ridge ventilation helps the whole system dry out, which is why it's part of every complete GAF system we install.",
  },
];

const faqs = [
  {
    q: "What are the black streaks on my roof shingles?",
    a: "Blue-green algae (Gloeocapsa magma) feeding on the limestone filler in your shingles. It spreads by airborne spores, thrives in Mississippi humidity, and shows up worst on north-facing and shaded slopes. It's not mold, and it's not dirt that rain will rinse off.",
  },
  {
    q: "Do black streaks damage the roof or just look bad?",
    a: "Mostly cosmetic at first — but long-term colonies hold moisture against the shingle, accelerate granule loss, and in shaded damp areas open the door to moss, which does real damage by lifting shingle edges. Streaks also drag down curb appeal and can raise questions during a home sale.",
  },
  {
    q: "Can I pressure wash my shingle roof?",
    a: "No. Pressure washing strips the protective granules that shield shingles from UV, aging the roof years in a single cleaning and often voiding manufacturer warranties. The safe method is soft washing — low pressure with a roof-safe cleaning solution given time to work.",
  },
  {
    q: "How much does roof algae cleaning cost compared to ignoring it?",
    a: "A professional soft wash is a modest maintenance expense. Ignoring growth costs more slowly: moss lifting shingle edges leads to leak repairs, and heavy long-term staining can mean replacing shingles that still had structural life left. If the roof is near end-of-life anyway, put the money toward algae-resistant replacement instead of cleaning.",
  },
  {
    q: "Do algae-resistant shingles actually work?",
    a: "Yes. Shingles with copper-infused granules — like GAF's StainGuard® lines — release trace copper ions that suppress algae growth for years, and they're backed by algae-discoloration limited warranties. They're the reason newer roofs in a neighborhood stay clean while older ones streak.",
  },
  {
    q: "My roof has streaks and it's 20 years old. Clean it or replace it?",
    a: "At 20 years, a Mississippi architectural roof is near the end of its realistic lifespan, and cleaning won't add structural life. Get it inspected first — if the shingles are brittle or losing granules, the money is better spent on a replacement with algae-resistant shingles than on washing a roof that's nearly done.",
  },
];

const RoofAlgaeGuide = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Black Streaks on Your Roof? Algae, Moss, and Mississippi Humidity Explained",
    description:
      "What the black streaks on Mississippi roofs actually are, when algae and moss start doing real damage, how to clean shingles safely without pressure washing, and how to keep the streaks from coming back.",
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
        title="Black Streaks on Roof Shingles? Causes & Fixes for MS Homes"
        description="Those black streaks are algae feeding on your shingles — and Mississippi humidity is why. What's cosmetic vs. what's damaging, how to clean it safely (never pressure wash), and how to stop it for good."
        path="/guides/black-streaks-on-roof-shingles"
        ogType="article"
        jsonLd={[articleSchema, faqSchema]}
      />
      <Navigation />
      <main>
        <PageHero
          eyebrow="Homeowner Guide"
          title="Black Streaks on Your Roof?"
          subtitle="It's algae — and in Mississippi humidity, nearly every asphalt roof gets it eventually. Here's what's cosmetic, what's causing real damage, and how to deal with both without wrecking your shingles."
        />

        <section className="bg-background">
          <div className="container max-w-3xl py-14 md:py-20">
            <div className="space-y-12 font-body text-base leading-relaxed text-foreground">
              <div>
                <p className="text-sm text-muted-foreground">By Shurden's Roofing · Updated July 25, 2026 · 8 min read</p>
                <p className="mt-6 text-lg">
                  Drive through any North Mississippi neighborhood more than a decade old and you'll
                  see them: dark streaks running down shingle roofs like water stains that never dry.
                  That's <strong>algae, not dirt</strong> — a living colony feeding on your shingles,
                  fueled by the same humidity that makes our summers feel the way they do. Most of it
                  starts cosmetic. Some of it turns destructive. This guide covers how to tell the
                  difference, how to clean it without destroying the roof, and how to keep it from
                  coming back.
                </p>
              </div>

              <div>
                <h2 className="mb-6 font-display text-3xl font-bold">What's Actually Growing Up There</h2>
                <div className="space-y-6">
                  {growthTypes.map((t) => {
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
                  <h2 className="font-display text-2xl font-bold">Cleaning It: The Right Way</h2>
                  <ul className="ml-5 mt-4 list-disc space-y-2">
                    {cleaningDos.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
                  <h2 className="font-display text-2xl font-bold">What Not to Do</h2>
                  <ul className="ml-5 mt-4 list-disc space-y-2">
                    {cleaningDonts.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="mb-4 font-display text-3xl font-bold">When Streaks Mean Something Bigger</h2>
                <p>
                  Algae itself rarely causes leaks — but the conditions that grow it do. Slopes that
                  stay damp enough to streak heavily are the same slopes where moss lifts shingle
                  edges, where granule loss accelerates, and where decking stays wet after every
                  rain. If a streaked roof is also showing curling shingles, granules in the gutters,
                  or interior ceiling stains, the streaks are the least of it. That's when it's worth
                  reading our{" "}
                  <Link to="/guides/roof-repair-vs-replacement-mississippi" className="text-primary underline">
                    repair vs. replacement guide
                  </Link>{" "}
                  and our breakdown of{" "}
                  <Link to="/guides/how-long-does-a-roof-last-in-mississippi" className="text-primary underline">
                    how long roofs actually last in Mississippi
                  </Link>{" "}
                  — and when a free inspection tells you exactly where the roof stands. If growth has
                  already caused lifted shingles or leaks, our{" "}
                  <Link to="/services/roof-repair" className="text-primary underline">
                    repair crew
                  </Link>{" "}
                  handles it every week.
                </p>
              </div>

              <div>
                <h2 className="mb-6 font-display text-3xl font-bold">Keeping It From Coming Back</h2>
                <ol className="space-y-5">
                  {prevention.map((m, i) => (
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
                <h2 className="font-display text-2xl font-bold">Streaked Roof? Find Out What's Underneath.</h2>
                <p className="mt-3">
                  A free inspection tells you whether you're looking at a cosmetic cleaning, a moss
                  problem eating shingle edges, or a roof near the end of its life. Photos, straight
                  answers, and a written quote — across Starkville, Columbus, West Point, Tupelo,
                  Oxford, and the rest of North Mississippi.
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
          title="Don't Let a Damp Slope Become a Leak."
          body="Free inspection with photo documentation — we'll tell you if those streaks are cosmetic or the first sign of something that needs fixing."
          buttonLabel="Schedule My Inspection"
          to="/contact"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
};

export default RoofAlgaeGuide;
