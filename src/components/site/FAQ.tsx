const faqs = [
  {
    q: "Does Shurden's Roofing handle insurance claims for storm damage?",
    a: "Yes. Shurden's Roofing handles the entire insurance claim process for storm, wind, and hail damage on roofs across North Mississippi. We document the roof damage with drone photography, meet with your adjuster, review the scope, and make sure no part of your roofing system gets missed. You stay focused on your family while our roofer handles the paperwork.",
  },
  {
    q: "What areas does Shurden's Roofing serve?",
    a: "Shurden's Roofing serves North Mississippi from our Maben, MS office. That includes Maben, Starkville, West Point, Columbus, Louisville, Ackerman, Eupora, Houston, Tupelo, and the surrounding counties. If you are not sure whether we cover your roof, just call and ask.",
  },
  {
    q: "How much does a roof inspection in North Mississippi cost?",
    a: "Roof inspections from Shurden's Roofing are 100% free. We use high-resolution drone photography to document every part of your roof at no cost. You get a clear, honest report on what your roof actually needs, with no pressure to buy anything.",
  },
  {
    q: "How long has Shurden's Roofing been in business?",
    a: "We have been roofing North Mississippi out of Maben since 2015, with over 500 roofs installed and repaired across Maben, Starkville, West Point, Columbus, and beyond.",
  },
  {
    q: "Are you a licensed and insured roofer in Mississippi?",
    a: "Yes. Shurden's Roofing LLC is fully licensed and insured to perform residential and commercial roofing work in the state of Mississippi. We carry general liability and workers' compensation on every roofing crew on every job.",
  },
  {
    q: "What kind of shingles do you install on North Mississippi roofs?",
    a: "We install GAF architectural and lifetime shingle systems on most North Mississippi roofing projects, including Timberline HDZ and other 30-year and lifetime products. As a GAF Master Elite roofer, we can offer extended warranties most local roofers cannot.",
  },
  {
    q: "How fast can you respond to a roof leak or storm damage?",
    a: "For active leaks and storm damage anywhere in our North Mississippi service area, we typically respond the same day or next day. We can tarp the roof, stop the leak, and get the full roofing repair scheduled quickly.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="container max-w-4xl">
        <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Quick Answers</p>
        <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
          Straight Answers to Real Roofing Questions.
        </h2>
        <p className="mt-5 max-w-2xl font-body text-base text-muted-foreground md:text-lg">
          Common questions from North Mississippi homeowners about hiring a roofer, filing insurance claims, and what to expect from your new roof.
        </p>

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
