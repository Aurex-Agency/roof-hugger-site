import { roofingFaqs as faqs } from "@/data/roofing-faqs";


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
