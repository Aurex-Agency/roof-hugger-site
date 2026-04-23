import aboutImg from "@/assets/storm-damage.jpg";
import { Home, Users, Award } from "lucide-react";

const values = [
  { icon: Home, title: "Locally Owned & Operated", body: "Born and raised in Mississippi — your neighbors, not a national chain." },
  { icon: Users, title: "Crews You Can Trust", body: "Factory-trained, background-checked, and on every job from start to finish." },
  { icon: Award, title: "Built on Reputation", body: "Voted Starkville's Best Roofer with 500+ roofs and a 5-star track record." },
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
            width={1024}
            height={1024}
            loading="lazy"
            className="h-72 w-full object-cover sm:h-96 md:h-full md:min-h-[640px]"
          />
        </div>

        <div className="order-2 px-6 py-16 md:order-1 md:px-12 md:py-24 lg:px-20">
          <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">About Shurden's Roofing</p>
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            A Mississippi Family Business Built on Honest Work.
          </h2>
          <p className="mt-6 font-body text-base text-dark-foreground/75 md:text-lg">
            Since 2015, Shurden's Roofing has protected homes and businesses across the Golden Triangle with craftsmanship that lasts. We're a locally owned, GAF Master Elite® certified contractor — a designation held by less than 2% of roofers in North America. From the first inspection to the final shingle, every job is handled by our own crew with the care we'd give our own homes.
          </p>

          <ul className="mt-10 space-y-7">
            {values.map((v) => (
              <li key={v.title} className="flex gap-5">
                <span className="grid h-12 w-12 flex-none place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                  <v.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg md:text-xl">{v.title}</h3>
                  <p className="mt-1 font-body text-sm text-dark-foreground/70 md:text-base">{v.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-12 inline-flex items-center justify-center rounded-md bg-primary px-7 py-4 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-cta"
          >
            Get in Touch With Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
