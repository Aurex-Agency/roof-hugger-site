import { Link } from "react-router-dom";
import { Home, AlertTriangle, Building2, FileText } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="bg-background py-20 md:py-28">
      <div className="container">
        <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">
          Roofing We Handle Every Week
        </p>
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-foreground md:text-[52px]">
          Residential. Commercial. Storm Damage. One Local Crew.
        </h2>
        <p className="mt-5 max-w-2xl font-body text-base text-muted-foreground md:text-lg">
          From a single missing shingle to a full commercial system, Shurden's Roofing handles every kind of roofing job across North Mississippi. We work out of Maben and travel across the region to roof for our neighbors. One local crew. One point of contact. No subcontractors.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-[280px]">
          {/* Card 1: large, spans 2 cols + 2 rows */}
          <article
            id="services-residential"
            className="group relative overflow-hidden rounded-lg bg-dark text-dark-foreground p-8 md:col-span-2 md:row-span-2 md:p-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-90" aria-hidden />
            <div className="relative flex h-full flex-col">
              <span className="grid h-14 w-14 place-items-center rounded-md bg-primary text-primary-foreground">
                <Home className="h-7 w-7" />
              </span>
              <h3 className="mt-8 font-display text-3xl font-bold leading-tight md:text-[40px]">
                Residential Roofing
              </h3>
              <ul className="mt-6 space-y-3 font-body text-base text-dark-foreground/85 md:text-lg">
                <li>Complete tear-offs and full deck inspection</li>
                <li>GAF Timberline HDZ, UHDZ, Camelot II, Slateline shingles</li>
                <li>FeltBuster underlayment, Cobra ventilation, ridge & drip edge</li>
                <li>Gold Pledge & Silver Pledge warranty options</li>
              </ul>
              <p className="mt-auto pt-8 font-body text-sm text-dark-foreground/90">
                Complete GAF roof systems built for North Mississippi homes, installed by our own local crew.
              </p>
            </div>
          </article>

          {/* Card 2: Emergency Repair */}
          <article
            id="services-roofing-repair"
            className="group relative overflow-hidden rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-[var(--shadow-card)]"
          >
            <span className="grid h-12 w-12 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
              <AlertTriangle className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-foreground">
              Storm Damage & Roof Repair
            </h3>
            <p className="mt-3 font-body text-base text-muted-foreground">
              Tarping, leak stops, hail documentation, wind damage repair, insurance claim support, and honest guidance on whether you need a repair or a replacement.
            </p>
          </article>

          {/* Card 3: Commercial */}
          <article
            id="services-commercial"
            className="group relative overflow-hidden rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-[var(--shadow-card)]"
          >
            <span className="grid h-12 w-12 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
              <Building2 className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-foreground">
              Commercial Roofing
            </h3>
            <p className="mt-3 font-body text-base text-muted-foreground">
              SBS self-adhering systems, GAF Liberty Roofing System, Mule-Hide TPO, metal, and shingle work for storefronts, offices, churches, and multi-tenant buildings.
            </p>
          </article>

          {/* Card 4: Insurance Claims, spans 2 cols on md */}
          <article
            id="services-insurance"
            className="group relative overflow-hidden rounded-lg bg-secondary p-8 text-secondary-foreground md:col-span-2"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
              <span className="grid h-14 w-14 flex-none place-items-center rounded-md bg-primary text-primary-foreground">
                <FileText className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold leading-tight md:text-3xl">
                  Insurance Claim Assistance
                </h3>
                <p className="mt-3 font-body text-base text-secondary-foreground/95 md:text-lg">
                  We handle the paperwork so you don't have to. Documentation, adjuster meetings, scope review, and a finished roof. Start to finish, with one local roofer.
                </p>
                <Link
                  to="/services"
                  className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:text-primary-foreground"
                >
                  See All Roofing Services →
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
