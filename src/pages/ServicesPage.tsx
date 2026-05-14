import { Link } from "react-router-dom";
import { Wind, CloudHail, Wrench, ArrowRight, Building2, FileText, AlertCircle, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";
import ServiceNav from "@/components/site/ServiceNav";
import RoofingProcess from "@/components/site/RoofingProcess";
import ServiceArea from "@/components/site/ServiceArea";
import ServicesFAQ from "@/components/site/ServicesFAQ";
import MaintenanceSection from "@/components/site/MaintenanceSection";
import residentialImg from "@/assets/residential-shingle-roof.jpg";
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

const buildingTypes = [
  "Churches", "Schools", "Retail storefronts", "Offices",
  "Warehouses", "Multi-tenant buildings", "Ag & farm buildings", "Restaurants",
];

const claimSteps = [
  { n: "01", t: "Free Inspection", b: "We climb the roof and document what we find with photos before you call your carrier." },
  { n: "02", t: "Damage Documentation", b: "Wind, hail, and impact damage marked, measured, and photographed for the claim file." },
  { n: "03", t: "You File The Claim", b: "You stay in control of the claim. We hand you everything you need to file a clean one." },
  { n: "04", t: "Adjuster Meeting", b: "We meet your adjuster on the roof and walk every hit with them so nothing gets missed." },
  { n: "05", t: "Scope Review", b: "We review the carrier's scope line by line and flag anything that's missing before approval." },
  { n: "06", t: "Install", b: "Our local crew installs the new GAF system. Same crew, start to finish." },
  { n: "07", t: "Final Invoicing", b: "We invoice the approved scope, register your warranty, and you close out the claim." },
];

const residentialBullets = [
  "Most homes torn off, dried-in, and re-roofed in 1–2 days",
  "Full deck inspection — rotted decking replaced and itemized on the invoice",
  "GAF Master Elite® install with Gold Pledge & Silver Pledge warranty options",
  "Color and shingle profile selection from full GAF lineup (HDZ, UHDZ, Camelot II, Slateline)",
  "Magnet-sweep cleanup and same local crew from first knock to final walkthrough",
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <SEO
        title="Roofing Services in North Mississippi | Shurden's Roofing"
        description="Residential roof replacements, commercial roofing systems, storm damage repair, and insurance claim support across North Mississippi. GAF Master Elite® crew."
        path="/services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How long does a typical roof replacement take?", acceptedAnswer: { "@type": "Answer", text: "Most single-family homes in North Mississippi are torn off, dried-in, and re-roofed in 1 to 2 days. Larger or more complex roofs take longer." } },
            { "@type": "Question", name: "What does a new roof actually cost?", acceptedAnswer: { "@type": "Answer", text: "Pricing depends on square footage, pitch, deck condition, shingle line, and accessories. We provide a written, itemized quote after a free inspection." } },
            { "@type": "Question", name: "Do you handle permits and HOA paperwork?", acceptedAnswer: { "@type": "Answer", text: "Yes. We pull permits when required and provide manufacturer samples and documentation for HOA color approval." } },
            { "@type": "Question", name: "Is the GAF warranty transferable if I sell my house?", acceptedAnswer: { "@type": "Answer", text: "Yes. GAF warranties are transferable. We register your warranty in your name and provide the documentation you'll need at sale." } },
            { "@type": "Question", name: "Do you do small repairs, or just full replacements?", acceptedAnswer: { "@type": "Answer", text: "Both. We replace pipe boots, repair flashing, fix leaks around chimneys and skylights, replace blown-off shingles, and tarp emergency damage." } },
            { "@type": "Question", name: "What about commercial buildings — do you only do shingles?", acceptedAnswer: { "@type": "Answer", text: "No. We install SBS self-adhering systems, GAF Liberty, Mule-Hide TPO, metal, and shingle roofing on commercial buildings." } },
          ],
        }}
      />
      <Navigation />
      <main>
        <PageHero
          eyebrow="Roofing Services"
          title={<>Every Service. One Local Crew. <span className="text-primary">North Mississippi</span>.</>}
          subtitle="Residential replacements, commercial systems, storm damage, insurance claims, and maintenance — handled in-house by Shurden's Roofing. No subcontractors, no handoffs."
        />

        <ServiceNav />

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
                Most of our work is on Mississippi homes that need a roof tough enough for heat, hail, wind, and hard rain. We tear off the old roof, inspect every square foot of decking, install the right GAF underlayment and accessories, and finish with the shingle system that fits your house and budget. You'll see the same crew on day one and the day we hand you the warranty paperwork.
              </p>
              <ul className="mt-8 space-y-4 font-body text-base text-foreground">
                {residentialBullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
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

            <div className="mt-12 rounded-lg border border-white/10 bg-secondary/40 p-6 md:p-8">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Buildings We Roof
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 font-body text-sm text-dark-foreground/85 sm:grid-cols-4">
                {buildingTypes.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 grid gap-6 rounded-lg border border-white/10 bg-secondary/40 p-6 md:grid-cols-[auto_1fr] md:items-center md:p-8">
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

            <div className="mt-10 grid gap-6 rounded-lg border-l-4 border-primary bg-card p-6 md:grid-cols-[auto_1fr] md:items-start md:gap-8 md:p-8">
              <span className="grid h-12 w-12 flex-none place-items-center rounded-md bg-primary/10 text-primary">
                <AlertCircle className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">
                  Active Leak Right Now? Do This Before You Call.
                </h3>
                <ol className="mt-4 grid gap-2 font-body text-base text-muted-foreground md:grid-cols-3">
                  <li><span className="font-bold text-foreground">1.</span> Move belongings out of the drip path and contain water with a bucket.</li>
                  <li><span className="font-bold text-foreground">2.</span> Photograph the ceiling and any visible roof damage from the ground.</li>
                  <li><span className="font-bold text-foreground">3.</span> Call us at <a href="tel:6625499165" className="text-primary underline">662.549.9165</a>. We tarp, document, and stop the leak.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance */}
        <section id="insurance" className="scroll-mt-24 bg-secondary py-20 text-secondary-foreground md:py-24">
          <div className="container">
            <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center md:gap-14">
              <span className="grid h-20 w-20 place-items-center rounded-md bg-primary text-primary-foreground">
                <FileText className="h-10 w-10" />
              </span>
              <div>
                <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Insurance Claim Support</p>
                <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
                  Insurance Help Without the Runaround.
                </h2>
                <p className="mt-5 max-w-3xl font-body text-base text-secondary-foreground/85 md:text-lg">
                  If a storm caused the damage, we walk every step of the claim with you. Here's exactly how it goes from the first phone call to a completed roof.
                </p>
              </div>
            </div>

            <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {claimSteps.map((s) => (
                <li
                  key={s.n}
                  className="rounded-lg border border-white/10 bg-secondary/40 p-6"
                >
                  <span className="font-display text-3xl font-extrabold text-primary">{s.n}</span>
                  <h3 className="mt-3 font-display text-lg font-bold leading-tight text-secondary-foreground">
                    {s.t}
                  </h3>
                  <p className="mt-2 font-body text-sm text-secondary-foreground/80">{s.b}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <MaintenanceSection />

        <RoofingProcess />

        <ServiceArea />

        <ServicesFAQ />

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
