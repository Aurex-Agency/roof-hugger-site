import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    q: "How long does a typical roof replacement take?",
    a: "Most single-family homes in North Mississippi are torn off, dried-in, and re-roofed in 1 to 2 days. Larger homes, complex roof lines, or significant deck repair can extend that. We will give you a realistic timeline before we start, not after.",
  },
  {
    q: "What does a new roof actually cost?",
    a: "Pricing depends on square footage, pitch, deck condition, the shingle line you choose, and accessories like ridge vent or pipe boots. We give you a written, itemized quote after a free inspection so you can see exactly what you are paying for. No high-pressure sales meeting.",
  },
  {
    q: "Do you handle permits and HOA paperwork?",
    a: "Yes. If your municipality requires a permit, we pull it. If your HOA needs shingle color approval, we can provide manufacturer samples and documentation.",
  },
  {
    q: "Is the GAF warranty transferable if I sell my house?",
    a: "Yes. GAF warranties are transferable, which often helps at closing. We register your warranty in your name when the install is complete and give you the documentation you'll need at sale.",
  },
  {
    q: "Do you do small repairs, or just full replacements?",
    a: "Both. We replace pipe boots, repair flashing, fix leaks around chimneys and skylights, replace blown-off shingles, and tarp emergency damage. If a repair is the right call, we'll tell you. We won't push a replacement you don't need.",
  },
  {
    q: "What about commercial buildings — do you only do shingles?",
    a: "No. We install SBS self-adhering systems, the GAF Liberty Roofing System, Mule-Hide TPO, metal, and shingle roofing on commercial buildings, including churches, retail, offices, and multi-tenant properties.",
  },
];

const ServicesFAQ = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div>
          <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Service Questions
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Straight Answers Before You Sign Anything.
          </h2>
          <p className="mt-6 font-body text-base text-muted-foreground md:text-lg">
            The questions our customers ask most often, answered in plain English. If yours isn't here, call us. We'd rather talk it through than have you guess.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {items.map((it, i) => (
            <AccordionItem key={it.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground md:text-lg">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-base text-muted-foreground">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ServicesFAQ;
