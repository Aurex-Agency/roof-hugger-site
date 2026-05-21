import { Link } from "react-router-dom";
import { CalendarCheck, Droplets, Wrench, Sparkles } from "lucide-react";

const items = [
  {
    icon: CalendarCheck,
    title: "Annual Roof Inspections",
    body: "A documented, photo-backed inspection of shingles, flashing, ventilation, and penetrations. Catch small problems before they become interior damage.",
  },
  {
    icon: Droplets,
    title: "Gutter & Drainage Checkups",
    body: "Backed-up gutters cause more roof and fascia damage than most homeowners realize. We clear them and check the drainage path.",
  },
  {
    icon: Wrench,
    title: "Sealant & Flashing Tune-Ups",
    body: "Pipe boots, chimney flashing, and exposed sealant are the first things to fail. A quick tune-up adds years to your roof.",
  },
  {
    icon: Sparkles,
    title: "Post-Storm Inspections",
    body: "After a wind or hail event, we'll walk your roof and tell you if there's claim-worthy damage — before you call your insurance carrier.",
  },
];

const MaintenanceSection = () => {
  return (
    <section id="maintenance" className="scroll-mt-32 bg-background py-20 md:py-28">
      <div className="container">
        <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">
          Maintenance & Inspections
        </p>
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-foreground md:text-[52px]">
          Make The Roof You Have Last Longer.
        </h2>
        <p className="mt-5 max-w-2xl font-body text-base text-muted-foreground md:text-lg">
          Not every roof needs replacing. We help homeowners and property managers get the full lifespan out of the roof they have with simple, scheduled maintenance.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <article
              key={it.title}
              className="rounded-lg border border-border bg-card p-7 transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                <it.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold leading-tight text-foreground">
                {it.title}
              </h3>
              <p className="mt-3 font-body text-sm text-muted-foreground">{it.body}</p>
            </article>
          ))}
        </div>

        <Link
          to="/contact"
          className="mt-10 inline-flex items-center justify-center rounded-md border border-primary bg-transparent px-7 py-4 font-display text-sm uppercase tracking-wide text-primary transition-all hover:bg-primary hover:text-primary-foreground"
        >
          Schedule An Inspection
        </Link>
      </div>
    </section>
  );
};

export default MaintenanceSection;
