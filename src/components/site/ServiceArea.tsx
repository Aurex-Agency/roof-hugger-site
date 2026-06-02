import { MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { cities as cityPages } from "@/data/cities";

const citySlugMap = new Map(cityPages.map((c) => [c.name, c.slug]));

const cities = [
  "Maben", "Starkville", "Tupelo", "Columbus", "West Point", "Louisville",
  "Eupora", "Ackerman", "Oxford", "Houston", "Aberdeen", "Winona", "Grenada",
  "Mathiston", "Sturgis", "French Camp", "Walthall",
];

const counties = [
  "Oktibbeha", "Webster", "Choctaw", "Clay", "Lowndes", "Lee", "Montgomery", "Winston",
];

const ServiceArea = () => {
  return (
    <section className="bg-secondary py-20 text-secondary-foreground md:py-24">
      <div className="container grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div>
          <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Where We Roof
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
            Based In Maben. Roofing Across North Mississippi.
          </h2>
          <p className="mt-6 font-body text-base text-secondary-foreground/85 md:text-lg">
            We work out of Maben and travel to roof for our neighbors across the region. If you don't see your town below, call us. There's a good chance we're already nearby.
          </p>
          <a
            href="tel:6629414866"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-cta"
          >
            <Phone className="h-4 w-4" /> (662) 941-4866
          </a>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Cities & Towns
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {cities.map((c) => {
              const slug = citySlugMap.get(c);
              const className = "flex items-center gap-2 rounded-md border border-white/10 bg-secondary/40 px-3 py-2 font-body text-sm text-secondary-foreground/90 transition-colors hover:border-primary/60 hover:text-primary";
              const inner = (
                <>
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {c}
                </>
              );
              return (
                <li key={c}>
                  {slug ? (
                    <Link to={`/roofing/${slug}`} className={className}>{inner}</Link>
                  ) : (
                    <span className={className}>{inner}</span>
                  )}
                </li>
              );
            })}
          </ul>

          <h3 className="mt-10 font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Counties Served
          </h3>
          <p className="mt-3 font-body text-base text-secondary-foreground/85">
            {counties.join(" • ")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
