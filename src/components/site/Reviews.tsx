import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/reviews";

const ReviewCard = ({ quote, name }: { quote: string; name: string }) => (
  <article className="relative flex w-[320px] shrink-0 flex-col rounded-lg bg-dark/90 p-6 shadow-[var(--shadow-card)] sm:w-[380px] md:w-[420px]">
    <Quote
      aria-hidden
      className="pointer-events-none absolute right-4 top-4 h-10 w-10 text-primary/30"
      strokeWidth={1.5}
    />
    <div className="mb-3 flex items-center gap-1 text-accent" aria-label="5 star rating">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="h-4 w-4 fill-accent" />
      ))}
    </div>
    <p className="font-body text-[15px] italic leading-relaxed text-dark-foreground/90">
      "{quote}"
    </p>
    <p className="mt-5 font-display text-xs font-semibold uppercase tracking-wider text-accent">
      {name}
    </p>
  </article>
);

const Reviews = () => {
  // Duplicate the list so the marquee loops seamlessly
  const loop = [...reviews, ...reviews];

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-16 text-primary-foreground md:py-24"
    >
      <div className="container mb-10 text-center md:mb-14">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/85 md:text-sm">
          Real Reviews · Real Roofs
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight md:text-5xl">
          Your Neighbors Already Put Us on Their Roof.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-body text-base text-primary-foreground md:text-lg">
          Read what homeowners and business owners across Starkville, Maben, West Point, Columbus, Louisville, Eupora, and Tupelo say about Shurden's Roofing.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-dark/30 px-4 py-2 font-body text-sm font-bold leading-none">
          <span className="text-accent">5.0</span>
          <span className="text-accent inline-flex items-center" aria-hidden>★★★★★</span>
          <span className="text-primary-foreground/95">Rated on Google</span>
        </div>
      </div>

      {/* Marquee */}
      <div
        className="group relative w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
          {loop.map((r, idx) => (
            <ReviewCard key={`${r.name}-${idx}`} quote={r.quote} name={r.name} />
          ))}
        </div>
      </div>

      <div className="container mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-14">
        <a
          href="/reviews"
          className="inline-flex items-center gap-2 rounded-full bg-dark px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-dark-foreground transition-transform hover:scale-[1.03] hover:bg-dark/90"
        >
          See All Reviews →
        </a>
        <a
          href="https://www.google.com/search?q=shurdens+roofing#lrd=0x88813925dbdd0ebd:0xac6a4b451d99c379,1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border-2 border-dark-foreground/40 px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-dark-foreground transition-colors hover:border-dark-foreground hover:bg-dark-foreground/10"
        >
          Read More on Google →
        </a>
      </div>
    </section>
  );
};

export default Reviews;
