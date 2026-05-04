const faqs = [
  {
    q: "Does Shurden's Roofing handle insurance claims for storm damage?",
    a: "Yes. We document wind and hail damage, take photos, review the scope, and help coordinate with your insurance adjuster so you understand the process from inspection to finished roof. You stay focused on your family while our roofer handles the paperwork.",
  },
  {
    q: "What areas do you serve?",
    a: "We are headquartered in Maben and serve North Mississippi, including Starkville, West Point, Columbus, Louisville, Eupora, Tupelo, and nearby communities. If you are not sure whether we cover your roof, just call and ask.",
  },
  {
    q: "How much does a roof inspection cost?",
    a: "Roof inspections are free and no-obligation. We use high-resolution drone photography to document every part of your roof, and we will tell you whether the roof needs repair, replacement, a commercial quote, or no immediate work.",
  },
  {
    q: "What shingles do you install?",
    a: "We install GAF systems including Timberline HDZ, Timberline UHDZ, Natural Shadow, Camelot II, and Slateline, along with GAF underlayments (FeltBuster and WeatherWatch), Cobra ventilation, GAF Pro-Start starter, Seal-A-Ridge, hip and ridge, Master Flow Pivot Pipe Boot Flashing, and drip edge.",
  },
  {
    q: "What commercial systems do you install?",
    a: "We install commercial SBS self-adhering roofing systems, the GAF Liberty Roofing System, Mule-Hide TPO, metal, and shingle systems for businesses, churches, offices, and low-slope roofs across North Mississippi.",
  },
  {
    q: "What makes GAF Master Elite® important?",
    a: "GAF Master Elite® is a top factory certification held by less than 2% of roofers in North America. As a Master Elite® contractor and GAF President's Club Member, Shurden's Roofing can offer Gold Pledge and Silver Pledge warranty options that most local roofers cannot.",
  },
  {
    q: "How fast can you respond to leaks or storm damage?",
    a: "Call as soon as you see the issue. Emergency roofing service is available, and we prioritize tarping, leak stops, and storm damage inspections when weather hits North Mississippi. We typically respond the same day or next day.",
  },
  {
    q: "Are you a licensed and insured roofer in Mississippi?",
    a: "Yes. Shurden's Roofing LLC is fully licensed and insured to perform residential and commercial roofing work in the state of Mississippi. We carry general liability and workers' compensation on every roofing crew on every job.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="container max-w-4xl">
        <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Quick Answers</p>
        <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
          Straight Answers Before We Climb the Ladder.
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
