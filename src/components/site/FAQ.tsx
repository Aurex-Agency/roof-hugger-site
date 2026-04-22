const faqs = [
  {
    q: "Does Shurden's Roofing handle insurance claims for storm damage?",
    a: "Yes, Shurden's Roofing handles the entire insurance claim process for storm, wind, and hail damage in Starkville and the Golden Triangle area. We document the damage, work directly with your adjuster, and make sure nothing gets missed.",
  },
  {
    q: "What areas does Shurden's Roofing serve?",
    a: "We serve Starkville, West Point, Columbus, Maben, and the surrounding Oktibbeha County region in Mississippi.",
  },
  {
    q: "How much does a roof inspection cost?",
    a: "Our roof inspections are 100% free. We use high-resolution drone photography to document your roof's condition at no cost to you.",
  },
  {
    q: "How long has Shurden's Roofing been in business?",
    a: "We have been serving the Golden Triangle area of Mississippi since 2015, with over 500 roofs installed and repaired.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Shurden's Roofing LLC is fully licensed and insured to perform residential and commercial roofing work in the state of Mississippi.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="container max-w-4xl">
        <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Quick Answers</p>
        <h2 className="font-display text-3xl leading-tight text-foreground md:text-5xl">
          Straight Answers to Real Roofing Questions.
        </h2>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base text-foreground md:text-lg">
                {f.q}
                <span className="grid h-8 w-8 flex-none place-items-center rounded-full border border-border text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl font-body text-base text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
