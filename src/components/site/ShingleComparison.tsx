const shingles = [
  {
    name: "GAF Natural Shadow",
    fit: "Straightforward, dependable shingle work",
    coverage: "No extra workmanship coverage from the manufacturer",
    rating: "—",
  },
  {
    name: "GAF Timberline HDZ",
    fit: "The go-to architectural shingle for Mississippi homes",
    coverage: "25-year workmanship coverage",
    rating: "Class 3 hail rating",
    featured: true,
  },
  {
    name: "GAF Timberline UHDZ",
    fit: "Ultra premium look with stronger storm protection",
    coverage: "30-year workmanship coverage",
    rating: "Class 4 hail rating",
  },
  {
    name: "GAF Camelot II",
    fit: "Designer shingle with a dimensional, upscale profile",
    coverage: "30-year workmanship coverage",
    rating: "Class 4 hail rating",
  },
  {
    name: "GAF Slateline",
    fit: "Designer slate-look without the slate weight",
    coverage: "30-year workmanship coverage",
    rating: "Class 4 hail rating",
  },
];

const ShingleComparison = () => {
  return (
    <section className="bg-dark py-20 text-dark-foreground md:py-28">
      <div className="container">
        <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">
          Residential Shingle Systems
        </p>
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
          Pick the Roof That Fits the House, the Weather, and the Budget.
        </h2>
        <p className="mt-5 max-w-2xl font-body text-base text-dark-foreground/80 md:text-lg">
          We install the full GAF residential shingle lineup. Here is the short version of how the
          options compare on warranty and hail rating.
        </p>

        <div className="mt-10 overflow-hidden rounded-lg border border-white/10">
          {/* Header row */}
          <div className="hidden grid-cols-[1.4fr_1.6fr_1.4fr_1fr] gap-4 border-b border-white/10 bg-secondary px-6 py-4 font-display text-xs font-bold uppercase tracking-wider text-dark-foreground/70 md:grid">
            <span>Shingle</span>
            <span>Best Fit</span>
            <span>Workmanship</span>
            <span>Hail</span>
          </div>
          {shingles.map((s) => (
            <div
              key={s.name}
              className={`grid grid-cols-1 gap-2 border-b border-white/10 px-6 py-5 last:border-b-0 md:grid-cols-[1.4fr_1.6fr_1.4fr_1fr] md:gap-4 ${
                s.featured ? "bg-primary/10" : "bg-dark"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-base font-bold uppercase tracking-wide text-dark-foreground md:text-lg">
                  {s.name}
                </span>
                {s.featured && (
                  <span className="rounded-full bg-accent px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                    Most Popular
                  </span>
                )}
              </div>
              <span className="font-body text-sm text-dark-foreground/80 md:text-base">
                <span className="md:hidden font-bold uppercase text-dark-foreground/75 mr-2 text-xs">Best Fit:</span>
                {s.fit}
              </span>
              <span className="font-body text-sm text-dark-foreground/80 md:text-base">
                <span className="md:hidden font-bold uppercase text-dark-foreground/75 mr-2 text-xs">Warranty:</span>
                {s.coverage}
              </span>
              <span className="font-display text-sm uppercase tracking-wide text-primary">
                <span className="md:hidden font-bold text-dark-foreground/75 mr-2 text-xs">Hail:</span>
                {s.rating}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-3xl font-body text-sm text-dark-foreground/70 md:text-base">
          We will walk you through the difference in appearance, warranty, hail rating, and cost
          before you pick a roof. No guessing. No pressure.
        </p>
      </div>
    </section>
  );
};

export default ShingleComparison;
