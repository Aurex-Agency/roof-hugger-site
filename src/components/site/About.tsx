import { Link } from "react-router-dom";
import aboutImg from "@/assets/about-shingle-roof.jpg";
import { Home, Users, Award } from "lucide-react";

const values = [
  { icon: Home, title: "Locally Owned and Operated in Maben, MS", body: "Born and raised in Mississippi. Your neighbors, not a national chain. We roof homes and businesses all across North Mississippi from our Maben headquarters." },
  { icon: Users, title: "Factory Trained with Real World Experience", body: "Real Shurden's Roofing local crews on every job. No subcontractors, no rotating faces, no surprises on your roof." },
  { icon: Award, title: "Voted Starkville's Best Roofer for 9+ Years with 4000+ Roofs Installed", body: "Four thousand Mississippi roofs and counting, with a 5-star track record across Maben, Starkville, West Point, Columbus, and beyond." },
];

const About = () => {
  return (
    <section id="about" className="bg-dark text-dark-foreground">
      <div className="grid md:grid-cols-2">
        {/* Image first on mobile */}
        <div className="order-1 md:order-2">
          <img
            src={aboutImg}
            alt="Shurden's Roofing crew working on a Mississippi residential roof"
            width={1440}
            height={1920}
            loading="lazy"
            className="h-72 w-full object-cover sm:h-96 md:h-full md:min-h-[640px]"
          />
        </div>

        <div className="order-2 px-6 py-16 md:order-1 md:px-12 md:py-24 lg:px-20">
          <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">A Mississippi Family Roofing Business</p>
          <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
            A Mississippi Family Business Built on Honest Roofing Work Since 2010.
          </h2>
          <p className="mt-6 font-body text-base text-dark-foreground/95 md:text-lg">
            Since 2010, Shurden's Roofing has protected homes and businesses across North Mississippi with roofing craftsmanship that lasts. Headquartered in Maben, we travel across North Mississippi to roof for our neighbors, and we are a locally owned, GAF Master Elite® certified roofing contractor, a designation held by less than 2% of roofers in North America.
          </p>
          <p className="mt-4 font-body text-base text-dark-foreground/95 md:text-lg">
            From the first roof inspection to the final shingle, every roofing job is handled by our own crew with the care we would give our own homes. Whether you need a small repair in Starkville, a full replacement in West Point, a commercial roof in Columbus, or storm work out in Louisville, Eupora, or Tupelo, you get the same local roofer, the same crew, and the same standard of work.
          </p>

          <ul className="mt-10 space-y-7">
            {values.map((v) => (
              <li key={v.title} className="flex gap-5">
                <span className="grid h-12 w-12 flex-none place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                  <v.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg md:text-xl">{v.title}</h3>
                  <p className="mt-1 font-body text-sm text-dark-foreground/90 md:text-base">{v.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="mt-12 inline-flex items-center justify-center rounded-md bg-primary px-7 py-4 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-cta"
          >
            Get in Touch With Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
