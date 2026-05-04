import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import gafBadge from "@/assets/gaf-master-elite.webp";

const points = [
  "Lifetime shingles",
  "50-year manufacturer warranty",
  "25-year workmanship coverage",
  "Unlimited wind-speed coverage for 15 years",
  "Algae warranty up to 25 years",
];

const WarrantyBand = () => {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 text-secondary-foreground md:py-24">
      <div
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
        aria-hidden
      />
      <div className="container grid gap-12 md:grid-cols-[auto_1fr] md:items-center md:gap-16">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <img
            src={gafBadge}
            alt="GAF Master Elite Certified Residential Roofing Contractor badge"
            className="h-32 w-auto md:h-40"
            loading="lazy"
          />
          <span className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
            President's Club Member
          </span>
        </div>

        <div>
          <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-accent">
            Warranty Options Most Roofers Cannot Offer
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
            The Warranty Difference Matters After the Crew Leaves.
          </h2>
          <p className="mt-6 max-w-2xl font-body text-base text-secondary-foreground/85 md:text-lg">
            Shurden's Roofing is a GAF Master Elite® contractor and GAF President's Club Member.
            That gives our customers access to premium GAF warranty options, including Gold Pledge
            and Silver Pledge coverage. Depending on the selected system, your new roof may include:
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 font-body text-base text-secondary-foreground/90">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-accent" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-md bg-primary px-7 py-4 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-cta"
          >
            Ask Which Warranty Fits My Roof
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WarrantyBand;
