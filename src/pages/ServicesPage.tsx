import { Link } from "react-router-dom";
import { Wind, CloudHail, Flame, ArrowRight, Home, Building2 } from "lucide-react";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";
import CrewVideo from "@/components/site/CrewVideo";
import residentialImg from "@/assets/storm-damage.jpg";
import commercialImg from "@/assets/gallery-5.jpg";

const repairCards = [
  {
    icon: Wind,
    title: "Wind Damage",
    body: "Fast response for missing shingles after spring storms across North Mississippi. We tarp, document, and repair before the next rain.",
  },
  {
    icon: CloudHail,
    title: "Hail Damage",
    body: "Expert restoration and full insurance claim assistance. We document hail strikes with drone photography and walk your adjuster through every hit.",
  },
  {
    icon: Flame,
    title: "Chimney Leaks",
    body: "Custom flashing, leak detection, and proper sealing on brick and stone chimneys. We find the source and fix it right the first time.",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navigation />
      <main>
        <PageHero
          eyebrow="Roofing Services"
          title={<>Expert Roofing Services in <span className="text-primary">North Mississippi</span>.</>}
          subtitle="From minor leaks to full commercial roof replacements, Shurden's Roofing delivers durable, affordable solutions backed by GAF Master Elite® certification."
        />

        {/* Residential - image left, text right */}
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
                Roofs Built for the Way Mississippi Families Live.
              </h2>
              <p className="mt-6 font-body text-base text-muted-foreground md:text-lg">
                The majority of our roofing projects are for individual homeowners. We install all grades of shingles from 3-Tab conventional 25-year shingles to 30-year architectural shingles to lifetime shingles. We strive to be prompt, professional, and leave your yard spotless.
              </p>
              <ul className="mt-8 space-y-4 font-body text-base text-foreground">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-primary" />
                  GAF Master Elite® certified install with extended warranty options
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-primary" />
                  Full tear-off, deck inspection, and proper underlayment on every roof
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-primary" />
                  Color matching to fit your home and neighborhood
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-primary" />
                  Same local crew from first knock to final cleanup
                </li>
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

        {/* Commercial - image right, text left */}
        <section id="commercial" className="bg-dark text-dark-foreground scroll-mt-24">
          <div className="grid md:grid-cols-2">
            <div className="order-2 md:order-1 px-6 py-16 md:px-12 md:py-24 lg:px-20">
              <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Commercial Roofing</p>
              <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
                Protecting Local Businesses Across North Mississippi.
              </h2>
              <p className="mt-6 font-body text-base text-dark-foreground/85 md:text-lg">
                Protecting local businesses across North Mississippi. We specialize in TPO, metal, and shingle systems sized for storefronts, offices, churches, and multi-tenant buildings.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-5">
                {[
                  { icon: Building2, label: "TPO Single-Ply Systems" },
                  { icon: Home, label: "Standing Seam Metal" },
                  { icon: Building2, label: "Architectural Shingle" },
                  { icon: Home, label: "Repair & Maintenance" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 border-l-2 border-primary pl-4">
                    <span className="font-display text-sm uppercase tracking-wider">{item.label}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-cta"
              >
                Request a Commercial Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={commercialImg}
                alt="Aerial view of completed commercial shingle roof installed by Shurden's Roofing in Starkville MS"
                className="h-72 w-full object-cover sm:h-96 md:h-full md:min-h-[560px]"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Repair Cards */}
        <section id="repair" className="bg-background py-20 md:py-28 scroll-mt-24">
          <div className="container">
            <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Emergency Roof Repair</p>
            <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-foreground md:text-[52px]">
              Storm Hit Hard? We Move Fast.
            </h2>
            <p className="mt-5 max-w-2xl font-body text-base text-muted-foreground md:text-lg">
              When wind, hail, or a fallen limb opens up your roof, every hour matters. Shurden's Roofing keeps a tarping crew on call across North Mississippi so we can stop the leak today and schedule the full repair tomorrow.
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

        <CtaBanner
          eyebrow="Free, No-Obligation"
          title="Need a Roof Evaluation?"
          body="Free drone-photography roof inspection across North Mississippi. We'll give you a straight answer about what your roof actually needs."
          buttonLabel="Schedule Your Inspection"
          to="/contact"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default ServicesPage;
