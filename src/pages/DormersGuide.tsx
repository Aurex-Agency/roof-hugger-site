import SEO from "@/components/SEO";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";
import { Link } from "react-router-dom";
import { Home, CloudRain, Wrench, ShieldCheck } from "lucide-react";

const dormerTypes = [
  {
    name: "Gabled Dormer",
    aka: "Doghouse dormer",
    icon: Home,
    desc: "The most common style across North Mississippi homes. A simple two-sided pitched roof that mirrors the main roofline. Great for shedding rain — the steep pitch sends water away quickly — but the side walls and front gable create extra flashing seams that need to be installed and maintained correctly.",
    watchFor: "Cracked caulk where the gable trim meets the siding, and rusted step flashing along the side walls.",
  },
  {
    name: "Shed Dormer",
    aka: "Single-slope dormer",
    icon: CloudRain,
    desc: "A flat, single-pitch roof that slopes down from the main ridge. Adds the most interior space, which is why it's popular for second-story bedroom additions on older Starkville and Columbus homes. The shallow pitch is the catch — water moves slower, debris collects more easily, and the back wall pan flashing has to be perfect.",
    watchFor: "Standing water or moss on the shed roof itself, and any sign of staining on the ceiling below the back wall.",
  },
  {
    name: "Hip Dormer",
    aka: "Hipped roof dormer",
    icon: ShieldCheck,
    desc: "Three sloped sides meeting at a point, giving the dormer a softer, lower profile. You'll see these on Craftsman-style and ranch homes around Maben and Ackerman. The sloped sides handle wind better than a gabled dormer, but the extra hip seams mean more places for leaks to start if flashing is rushed.",
    watchFor: "Loose or lifted ridge caps at the hip seams, especially after high-wind storms.",
  },
];

const maintenanceItems = [
  {
    title: "Inspect Step Flashing Every Spring",
    body: "Step flashing — the small L-shaped metal pieces tucked under each shingle course along the dormer's side walls — is the single biggest source of dormer leaks in Mississippi. Look for rust, lifted edges, or any spot where caulk has cracked through. If you see daylight, it's already leaking.",
  },
  {
    title: "Check the Headwall and Apron Flashing",
    body: "The front of the dormer (the headwall) gets hammered every time a storm rolls through. The apron flashing should be tucked up behind the siding and lapped over the shingles below — never the other way around. A flipped or short apron is a guaranteed leak within a few seasons.",
  },
  {
    title: "Keep the Valleys and Roof-to-Wall Seams Clear",
    body: "Pine needles, leaves, and pollen pile up fast where the dormer meets the main roof. That trapped debris holds moisture against your shingles and flashing, which rots the underlayment beneath. A quick blow-off twice a year prevents thousands in repair costs.",
  },
  {
    title: "Re-Caulk Trim and Window Seams as Needed",
    body: "Sun, heat, and humidity break down sealant fast in North Mississippi. Inspect the caulk lines around dormer windows and corner trim each year. If you can press a fingernail into it and it crumbles, it's time to scrape and reseal with a high-grade polyurethane caulk.",
  },
  {
    title: "Watch for Interior Warning Signs",
    body: "Most dormer leaks show up as a small ceiling stain in an upstairs bedroom or hallway long before they become an emergency. If you spot a brown ring, blistered paint, or musty smell — get it looked at right away. Catching a dormer leak early often means one $300 flashing repair instead of $5,000 in framing and drywall.",
  },
];

const stormPrep = [
  "Trim back any tree limbs hanging over dormers — falling branches are the #1 storm-damage cause we see in Oktibbeha and Webster counties.",
  "Make sure all gutters and downspouts feeding off the dormer area are clear before hurricane and severe-weather season.",
  "After any storm with winds over 50 mph or hail larger than a quarter, schedule a free inspection — dormer damage often isn't visible from the ground.",
  "Photograph each dormer once a year from the ground. Comparing year-over-year photos makes it easy to spot a lifted shingle or new flashing gap.",
];

const faqs = [
  {
    q: "Do dormers leak more than the rest of the roof?",
    a: "Yes — and not because dormers are flawed. They simply have more flashing seams, valleys, and roof-to-wall transitions than a plain roof plane. Done correctly, a dormer is just as watertight as the rest of your roof. Done poorly, it's usually the first place a homeowner sees water damage.",
  },
  {
    q: "How often should a dormer roof be replaced?",
    a: "The shingles on a dormer typically last as long as the main roof — 20 to 30 years for architectural shingles. But the flashing around a dormer often needs attention sooner, especially if the original install used cheap aluminum or was sealed primarily with caulk instead of proper step and counter flashing.",
  },
  {
    q: "Can I add a dormer to my existing Mississippi home?",
    a: "Yes, and it's a popular renovation for adding upstairs headroom or natural light. The two things to get right: a structural review by a qualified contractor, and proper flashing detail at every roof-to-wall transition. Shurden's Roofing handles the roofing portion in coordination with your builder.",
  },
  {
    q: "Will my homeowner's insurance cover dormer storm damage?",
    a: "Most policies in Mississippi cover sudden storm damage from wind, hail, or falling debris — including damage to dormers. We handle storm damage insurance claims regularly across North Mississippi and can document the damage properly so your claim isn't denied for 'pre-existing wear.'",
  },
];

const DormersGuide = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What is a Dormer? A Mississippi Homeowner's Guide to Roof Dormers",
    description:
      "Learn the different types of roof dormers (gabled, shed, hip) and the flashing and maintenance needed to keep them watertight during Mississippi storms.",
    author: {
      "@id": "https://shurdensroofing.com/#business",
    },
    publisher: {
      "@id": "https://shurdensroofing.com/#business",
    },

    datePublished: "2026-06-02",
    dateModified: "2026-06-02",
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
        title="Mississippi Homeowner's Guide to Roof Dormers"
        description="Gabled, shed, and hip dormers explained — plus the flashing and maintenance every Mississippi homeowner needs to keep them watertight through storm season."
        path="/guides/roof-dormers"
        ogType="article"
        jsonLd={[articleSchema, faqSchema]}
      />
      <Navigation />
      <main>
        <PageHero
          eyebrow="Homeowner Guide"
          title="What Is a Dormer?"
          subtitle="A Mississippi homeowner's guide to roof dormers — the styles, the flashing details, and the maintenance that keeps them watertight through every storm season."
        />

        <section className="bg-background">
          <div className="container max-w-3xl py-14 md:py-20">
            <div className="space-y-12 font-body text-base leading-relaxed text-foreground">
              <div>
                <p className="text-sm text-muted-foreground">By Shurden's Roofing · Updated June 2, 2026 · 8 min read</p>
                <p className="mt-6 text-lg">
                  Dormers are those small roofed structures that pop out of a sloped roof, usually framing a
                  window. They add light, headroom, and a ton of curb appeal — but they're also one of the
                  most common places we find leaks during a roof inspection in North Mississippi. This guide
                  breaks down the three dormer styles you'll see most often on Starkville, Columbus, and Tupelo
                  homes, then walks through the exact maintenance that keeps them weather-tight.
                </p>
              </div>

              <div>
                <h2 className="mb-6 font-display text-3xl font-bold">The Three Dormer Styles You'll See in Mississippi</h2>
                <div className="space-y-6">
                  {dormerTypes.map((t) => {
                    const Icon = t.icon;
                    return (
                      <div key={t.name} className="rounded-lg border border-border bg-card p-6">
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <h3 className="font-display text-xl font-bold">{t.name}</h3>
                            <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                              Also called: {t.aka}
                            </p>
                          </div>
                        </div>
                        <p className="mt-4">{t.desc}</p>
                        <p className="mt-3 rounded-md bg-muted/60 p-3 text-sm">
                          <strong>What to watch for:</strong> {t.watchFor}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="mb-3 font-display text-3xl font-bold">Why Flashing Is the #1 Issue on Dormers</h2>
                <p>
                  Every dormer creates new seams where the dormer roof meets the main roof, where the dormer
                  walls meet the shingles, and where the dormer windows meet the siding. Each of those seams
                  has to be sealed with the right type of <em>metal flashing</em> — not just caulk. The good
                  news: when flashing is installed correctly the first time, a dormer can go decades without
                  giving you a single problem. The bad news: in our experience inspecting roofs across
                  Oktibbeha, Webster, and Lowndes counties, most dormer leaks trace back to one of three
                  shortcuts — missing step flashing, undersized apron flashing, or relying on caulk where a
                  metal flashing piece belonged.
                </p>
              </div>

              <div>
                <h2 className="mb-6 font-display text-3xl font-bold">Dormer Maintenance Checklist</h2>
                <ol className="space-y-5">
                  {maintenanceItems.map((m, i) => (
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
                <h2 className="mb-4 font-display text-3xl font-bold flex items-center gap-3">
                  <Wrench className="h-7 w-7 text-primary" />
                  Storm-Prep for Dormers
                </h2>
                <p className="mb-4">
                  Mississippi gets it all — straight-line winds, tornado outflows, golf-ball hail, and the
                  occasional hurricane remnant pushing inland. Dormers stick up above the main roof plane,
                  which means they take the brunt of every storm. A few simple steps before severe-weather
                  season save thousands later:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  {stormPrep.map((s) => (
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
                <h2 className="font-display text-2xl font-bold">Worried About a Dormer on Your Roof?</h2>
                <p className="mt-3">
                  We offer free, no-pressure dormer inspections across Starkville, Columbus, West Point,
                  Tupelo, Maben, and the rest of North Mississippi. If we spot a flashing issue, we'll show
                  you photos and walk you through the fix — no obligation.
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
          eyebrow="Free Dormer Inspection"
          title="Spotted a Stain or a Lifted Shingle?"
          body="We'll take a look, send you photos, and give you a straight answer — no pressure, no obligation."
          buttonLabel="Schedule My Inspection"
          to="/contact"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
};

export default DormersGuide;
