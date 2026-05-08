import { Layers } from "lucide-react";
import systemImg from "@/assets/gaf-shingle-roof.jpg";

const components = [
  { name: "Master Flow Pivot Pipe Boot Flashing", body: "Helps seal plumbing penetrations where leaks often start." },
  { name: "FeltBuster Synthetic Underlayment", body: "Strong synthetic underlayment installed over the roof deck." },
  { name: "WeatherWatch Ice & Water Shield", body: "Extra protection in leak-prone areas, valleys, eaves, and penetrations." },
  { name: "Cobra Ridge Vents", body: "Attic ventilation that helps the roof system breathe." },
  { name: "Seal-A-Ridge", body: "Ridge cap protection for the roof peak." },
  { name: "Hip and Ridge", body: "Finished protection on roof hips and ridges." },
  { name: "GAF Pro-Start Starter", body: "Starter strip that helps lock in the first course of shingles." },
  { name: "Drip Edge / Eave Drip Edge", body: "Metal edge protection that helps move water off the roof correctly." },
];

interface Props {
  variant?: "home" | "services";
}

const GafSystem = ({ variant = "home" }: Props) => {
  return (
    <section id="gaf-system" className="bg-background py-20 md:py-28">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-start">
          <div className="relative">
            <img
              src={systemImg}
              alt="Close-up of GAF underlayment, drip edge and starter shingles being installed on a North Mississippi roof"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-lg object-cover shadow-[var(--shadow-card)]"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-md border-l-4 border-primary bg-dark px-5 py-4 font-display text-sm uppercase tracking-wider text-dark-foreground shadow-[var(--shadow-card)] md:block">
              Every Layer Has A Job
            </div>
          </div>

          <div>
            <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">
              {variant === "services" ? "Every Layer Has a Job" : "The Whole Roof, Not Just The Top"}
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
              Not Just Shingles. A Full GAF Roof System.
            </h2>
            <p className="mt-6 font-body text-base text-muted-foreground md:text-lg">
              A roof only works when every layer is installed correctly. Shurden's Roofing uses GAF
              shingles, GAF underlayments, GAF ventilation, GAF starter, GAF ridge protection, and proper
              edge metal so your roof is built as one system instead of a pile of parts.
            </p>

            <ul className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {components.map((c) => (
                <li key={c.name} className="border-l-2 border-primary/60 pl-4">
                  <p className="font-display text-sm font-bold uppercase tracking-wide text-foreground">
                    {c.name}
                  </p>
                  <p className="mt-1 font-body text-sm text-muted-foreground">{c.body}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary/10 px-4 py-2 font-display text-xs uppercase tracking-wider text-primary">
              <Layers className="h-4 w-4" /> Complete GAF Roof System
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GafSystem;
