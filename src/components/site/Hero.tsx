import { Link } from "react-router-dom";
import gafBadge from "@/assets/gaf-master-elite.webp";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-dark text-dark-foreground">
      <img
        src="/hero-roof.jpg"
        alt="Crew installing dark architectural shingle roof at golden hour in Starkville MS"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden />

      <div className="container relative grid min-h-[88vh] items-end pb-44 pt-20 md:min-h-[92vh] md:items-center md:pb-32 md:pt-24">
        <div className="max-w-[55%] animate-hero-rise md:max-w-[55%] [@media(max-width:768px)]:max-w-full">
          <p className="mb-5 inline-block rounded-sm border-l-4 border-primary bg-dark/70 px-3 py-1.5 font-body text-xs font-bold uppercase tracking-[0.25em] text-dark-foreground/80">
            Residential · Commercial · Storm Damage · GAF Master Elite®
          </p>
          <h1 className="font-display font-extrabold text-[44px] leading-[1.02] tracking-[0.02em] text-dark-foreground md:text-[64px] lg:text-[72px]">
            North Mississippi Roofs
            <span className="block text-primary">Built to Take a Beating.</span>
          </h1>
          <p className="mt-6 max-w-xl font-body font-medium text-base text-dark-foreground/90 md:text-xl">
            From hail-hit shingles in Starkville to flat commercial roofs in Columbus, Shurden's Roofing installs complete GAF roof systems, handles storm repairs, and backs the work with premium warranty options most roofers cannot offer.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-4 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-cta"
            >
              Get a Free Roof Inspection
            </Link>
            <a
              href="tel:6624986629"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-dark-foreground/90 bg-transparent px-7 py-4 font-display text-sm uppercase tracking-wide text-dark-foreground transition-all hover:scale-[1.03] hover:bg-dark-foreground hover:text-dark"
            >
              <Phone className="h-4 w-4" /> Call 662-498-6629
            </a>
          </div>
        </div>
      </div>

      {/* Floating trust badges */}
      <div className="pointer-events-none absolute bottom-6 left-4 z-10 flex flex-col items-start gap-2 md:bottom-8 md:left-8">
        <div className="rounded-full border-l-4 border-primary bg-dark/85 px-4 py-2 font-body text-xs font-bold uppercase tracking-wider text-dark-foreground backdrop-blur md:text-sm">
          Serving North Mississippi Since 2010
        </div>
        <div className="flex items-center gap-2 rounded-full border-l-4 border-primary bg-dark/85 py-1.5 pl-3 pr-4 font-body text-xs font-bold uppercase tracking-wider text-dark-foreground backdrop-blur md:text-sm">
          <img src={gafBadge} alt="" className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
          GAF Master Elite<sup>®</sup> Certified
        </div>
      </div>
    </section>
  );
};

export default Hero;
