import { ClipboardCheck, FileSearch, CalendarClock, Hammer, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Free Roof Inspection",
    body: "We climb the roof, photograph the deck, flashing, valleys, ventilation, and shingle wear, and walk you through what we find.",
  },
  {
    icon: ClipboardCheck,
    title: "Written Quote & Material Selection",
    body: "You get a clear scope, shingle line and color options, warranty tier, and a price you can hand to your insurance carrier if a claim is involved.",
  },
  {
    icon: CalendarClock,
    title: "Schedule Around the Weather",
    body: "We book your install around weather windows and call you the day before with a confirmed start time.",
  },
  {
    icon: Hammer,
    title: "Tear-Off & Install",
    body: "Most homes are torn off, dried-in, and re-roofed in 1–2 days. The same Shurden's crew is on the roof the entire time. No subcontractors.",
  },
  {
    icon: CheckCircle2,
    title: "Final Walkthrough & Cleanup",
    body: "We magnet-sweep the yard, haul off every scrap of debris, walk the property with you, and register your GAF warranty in your name.",
  },
];

const RoofingProcess = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container">
        <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">
          How A Shurden's Roof Gets Built
        </p>
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-foreground md:text-[52px]">
          Five Steps. No Surprises. No Subcontractors.
        </h2>

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold leading-tight text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 font-body text-sm text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default RoofingProcess;
