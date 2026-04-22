import stormImg from "@/assets/storm-damage.jpg";
import { Plane, Droplets, FileCheck2 } from "lucide-react";

const features = [
  { icon: Plane, title: "Drone Roof Inspection", body: "We fly it, document it, and show you exactly what needs to be fixed." },
  { icon: Droplets, title: "Emergency Tarp & Waterproofing", body: "We stop the damage before your next rain." },
  { icon: FileCheck2, title: "Insurance Claim Facilitation", body: "We work directly with your adjuster. You don't have to fight alone." },
];

const StormDamage = () => {
  return (
    <section id="storm-damage" className="bg-dark text-dark-foreground">
      <div className="grid md:grid-cols-2">
        {/* Image first on mobile */}
        <div className="order-1 md:order-2">
          <img
            src={stormImg}
            alt="Gloved hand lifting cracked hail-damaged shingle revealing damaged substrate"
            width={1024}
            height={1024}
            loading="lazy"
            className="h-72 w-full object-cover sm:h-96 md:h-full md:min-h-[640px]"
          />
        </div>

        <div className="order-2 px-6 py-16 md:order-1 md:px-12 md:py-24 lg:px-20">
          <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">The Reality Check</p>
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            Hail and Wind Damage Doesn't Always Show From the Ground.
          </h2>
          <p className="mt-6 font-body text-base text-dark-foreground/75 md:text-lg">
            Most Mississippi homeowners wait too long to call a roofer after a storm. By the time you see the water stain on your ceiling, the structural damage is already done. We use high-resolution drone inspections to find what the insurance adjusters miss — and we document everything so your claim goes through.
          </p>

          <ul className="mt-10 space-y-7">
            {features.map((f) => (
              <li key={f.title} className="flex gap-5">
                <span className="grid h-12 w-12 flex-none place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg md:text-xl">{f.title}</h3>
                  <p className="mt-1 font-body text-sm text-dark-foreground/70 md:text-base">{f.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-12 inline-flex items-center justify-center rounded-md bg-primary px-7 py-4 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-cta"
          >
            Book Your Free Drone Inspection
          </a>
        </div>
      </div>
    </section>
  );
};

export default StormDamage;
