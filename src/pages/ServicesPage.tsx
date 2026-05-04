import { Link } from "react-router-dom";
import { Wind, CloudHail, Wrench, ArrowRight, Building2, FileText, Layers } from "lucide-react";
import Navigation from "@/components/site/Navigation";
import TrustBar from "@/components/site/TrustBar";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";
import CrewVideo from "@/components/site/CrewVideo";
import GafSystem from "@/components/site/GafSystem";
import ShingleComparison from "@/components/site/ShingleComparison";
import WarrantyBand from "@/components/site/WarrantyBand";
import residentialImg from "@/assets/storm-damage.jpg";
import commercialImg from "@/assets/gallery-5.jpg";

const repairCards = [
  {
    icon: Wind,
    title: "Wind Damage",
    body: "Lifted shingles, missing tabs, and torn ridge cap after a Mississippi storm. We tarp it, document it, and get the roof watertight before the next system rolls through.",
  },
  {
    icon: CloudHail,
    title: "Hail Damage",
    body: "We document hail strikes with high-resolution drone photography, walk your insurance adjuster through every hit, and handle the scope from claim to finished roof.",
  },
  {
    icon: Wrench,
    title: "Leaks Around Flashing & Pipe Boots",
    body: "Most leaks start where the roof meets something else. We replace pipe boots with Master Flow Pivot Pipe Boot Flashing, repair chimney flashing, and seal valleys the right way.",
  },
];

const commercialSystems = [
  { name: "SBS Self-Adhering Roofing System", body: "A durable low-slope option with a cleaner installation process and strong waterproofing performance." },
  { name: "GAF Liberty Roofing System", body: "An SBS self-adhering roofing system built for low-slope roof areas where shingles are not the right answer." },
  { name: "Mule-Hide TPO", body: "A single-ply commercial roofing system for flat and low-slope buildings that need energy-conscious, watertight protection." },
  { name: "Metal & Shingle Systems", body: "For buildings that need slope-specific roof sections, transitions, and repairs handled by one crew." },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navigation />
      <main>
        <PageHero
          eyebrow="Roofing Services"
          title={<>Roof Repair, Replacement, and Commercial Systems for <span className="text-primary">North Mississippi</span>.</>}
          subtitle="Shurden's Roofing handles the whole roof: shingles, underlayment, ventilation, edge metal, low-slope systems, storm documentation, and clean installation from a local crew."
        />
        <TrustBar />

        {/* Residential */}
        <section id="residential" className="bg-background scroll-mt-24">
          <div className="grid md:grid-cols-2">
            <div className="order-1">
              <img
                src={residentialImg}
                alt="Architectural shingle residential roof installed by Shurden's Roofing in Starkville MS"
                className="h-72 w-full object-cover sm:h-96 md:h-full md:min-h-[560px]"
                loading="lazy"
              />
            </div>
            <div className="order-2 px-6 py-16 md:px-12 md:py-24 lg:px-20">
              <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Residential Roofing</p>
              <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
                Residential Roofs We'd Put on Our Own Homes.
              </h2>
              <p className="mt-6 font-body text-base text-muted-foreground md:text-lg">
                Most of our work is on Mississippi homes that need a roof tough enough for heat, hail, wind, and hard rain. We tear off the old roof, inspect the deck, install the right GAF underlayment and accessories, and finish with the shingle system that fits your house and budget.
              </p>
              <ul className="mt-8 space-y-4 font-body text-base text-foreground">
                {[
                  "Full tear-off, deck inspection, and proper underlayment on every roof",
                  "GAF Master Elite® install with Gold Pledge & Silver Pledge warranty options",
                  "Ask us about colors, profiles, hail ratings, and warranty options",
                  "Same local crew from first knock to final cleanup",
                ].map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-cta"
              >
                Get a Free Roof Inspection <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <ShingleComparison />

        <GafSystem variant="services" />

        <WarrantyBand />

        {/* Commercial */}
        <section id="commercial" className="bg-dark text-dark-foreground scroll-mt-24 py-20 md:py-28">
          <div className="container">
            <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Commercial Roofing</p>
            <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
              Commercial Roofs That Keep the Doors Open.
            </h2>
            <p className="mt-6 max-w-3xl font-body text-base text-dark-foreground/85 md:text-lg">
              A leaking business roof does not just damage the building. It interrupts work, customers, inventory, and Sunday services. Shurden's Roofing installs and repairs commercial systems for offices, churches, storefronts, shops, and multi-tenant buildings across North Mississippi.
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {commercialSystems.map((s) => (
                <article key={s.name} className="rounded-lg border border-white/10 bg-secondary/40 p-6 md:p-7">
                  <span className="grid h-10 w-10 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                    <Building2 className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold leading-tight text-dark-foreground md:text-2xl">
                    {s.name}
                  </h3>
                  <p className="mt-3 font-body text-sm text-dark-foreground/80 md:text-base">{s.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 grid gap-6 rounded-lg border border-white/10 bg-secondary/40 p-6 md:grid-cols-[auto_1fr] md:items-center md:p-8">
              <img
                src={commercialImg}
                alt="Aerial view of a commercial roof Shurden's Roofing installed in North Mississippi"
                className="h-40 w-full rounded-md object-cover md:h-32 md:w-48"
                loading="lazy"
              />
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
                <p className="font-body text-base text-dark-foreground/85">
                  Need a quote on a commercial roof? Send us the building address and we will inspect it.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-cta"
                >
                  Request a Commercial Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Repair */}
        <section id="repair" className="bg-background py-20 md:py-28 scroll-mt-24">
          <div className="container">
            <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Storm Damage & Roof Repair</p>
            <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-foreground md:text-[52px]">
              When the Storm Opens It Up, Call Us Fast.
            </h2>
            <p className="mt-5 max-w-2xl font-body text-base text-muted-foreground md:text-lg">
              Wind, hail, limbs, and flashing failures can turn a small issue into interior damage fast. We handle emergency tarping, leak detection, missing shingles, hail documentation, chimney leaks, pipe boot leaks, and insurance claim support.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
              {repairCards.map((card) => (
                <article
                  key={card.title}
                  className="group relative overflow-hidden rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-[var(--shadow-card)]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                    <card.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-3 font-body text-base text-muted-foreground">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Insurance Help */}
        <section className="bg-secondary py-20 text-secondary-foreground md:py-24">
          <div className="container grid gap-10 md:grid-cols-[auto_1fr] md:items-center md:gap-14">
            <span className="grid h-20 w-20 place-items-center rounded-md bg-primary text-primary-foreground">
              <FileText className="h-10 w-10" />
            </span>
            <div>
              <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Insurance Claim Support</p>
              <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
                Insurance Help Without the Runaround.
              </h2>
              <p className="mt-5 max-w-3xl font-body text-base text-secondary-foreground/85 md:text-lg">
                If a storm caused the damage, we document what we find, take photos, meet with the adjuster when needed, review the scope, and help you understand what your roof actually needs. You stay informed without having to become a roofing expert overnight.
              </p>
            </div>
          </div>
        </section>

        <CrewVideo
          eyebrow="See The Crew In Action"
          heading="The Same Local Crew On Every North Mississippi Roof."
          body="Watch our team at work. No subcontractors, no shortcuts. Just Shurden's Roofing crews installing the kind of roof we'd put on our own homes."
        />

        <CtaBanner
          eyebrow="Free, No-Obligation"
          title="Let's Look at the Roof Before You Guess."
          body="A free inspection gives you a straight answer: repair, replacement, commercial system quote, or no work needed right now."
          buttonLabel="Schedule My Inspection"
          to="/contact"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default ServicesPage;
