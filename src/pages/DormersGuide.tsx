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
    "title": "Ask about flashing condition",
    "body": "Ask a roofer to assess the connections where the dormer meets the roof and walls. Describe visible interior stains and prior repairs. Do not climb onto the roof to inspect flashing."
  },
  {
    "title": "Document what you can see safely",
    "body": "Take photographs from the ground or a safe indoor location. Record when a stain appears and whether rain or wind seems related. A photograph is useful context, not a diagnosis."
  },
  {
    "title": "Discuss debris and drainage with a professional",
    "body": "Ask whether debris, drainage or nearby vegetation needs professional attention. Do not access a roof, use a blower on roofing or work near overhead wires to prepare for an inspection."
  },
  {
    "title": "Confirm repair materials and scope",
    "body": "Ask what will be repaired or replaced and how the materials connect to the existing roof. Sealant selection and flashing work should follow the applicable product instructions and professional assessment."
  },
  {
    "title": "Respond to interior warning signs",
    "body": "Report new stains, peeling finishes or active water promptly. Keep people away from sagging ceilings or wet electrical equipment and seek emergency help for immediate danger. Repair cost depends on the actual scope, not the size of a visible stain."
  }
];

const stormPrep = [
  "Ask a qualified professional about tree limbs, drainage and maintenance concerns before severe weather.",
  "Keep earlier repair records and safe ground-level photographs in one place.",
  "After a storm, document visible changes from a safe location and contact a roofer if you have concerns. Do not enter an unsafe attic or access the roof.",
  "Contact your insurer about reporting requirements when damage may involve a claim."
];

const faqs = [
  {
    "q": "Do dormers leak more than the rest of the roof?",
    "a": "Dormers add roof-to-wall transitions and flashing details that deserve attention during an inspection. A leak requires an assessment of the actual condition; the presence of a dormer alone does not establish a problem."
  },
  {
    "q": "How often should a dormer roof be replaced?",
    "a": "Condition, materials, installation and maintenance all matter. Ask whether a defined repair is appropriate or replacement is supported by the findings. There is no universal replacement date for every dormer."
  },
  {
    "q": "Can I add a dormer to my existing Mississippi home?",
    "a": "A qualified designer or builder must assess the structure, permits and project requirements. Discuss the roofing scope with Shurden’s Roofing before assuming it is included in a renovation proposal."
  },
  {
    "q": "Will my homeowner's insurance cover dormer storm damage?",
    "a": "Your insurer determines coverage under your policy. A roofer can document observed conditions and proposed work, but cannot guarantee claim approval or payment. Contact your insurer about its process and deadlines."
  }
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
    dateModified: "2026-10-27",
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
