import { Star, Quote } from "lucide-react";

const smallReviews = [
  {
    quote: "Shurden's Roofing does great work and is there when he says he will be. Josh is a Christian man and keeps his word.",
    name: "Shelia R.",
    city: "Maben, MS",
  },
  {
    quote: "Quick response after the storm, professional crew, and they handled the whole insurance claim. Roof looks incredible.",
    name: "Daniel P.",
    city: "Starkville, MS",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="relative overflow-hidden bg-secondary py-20 text-secondary-foreground md:py-28">
      <div className="container grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="relative md:col-span-8">
          <Quote
            aria-hidden
            className="pointer-events-none absolute -left-2 -top-6 h-32 w-32 text-primary/20 md:-left-6 md:-top-10 md:h-48 md:w-48"
            strokeWidth={1.5}
          />
          <div className="relative">
            <div className="mb-6 flex items-center gap-1 text-accent" aria-label="5 star rating">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-accent" />
              ))}
            </div>
            <blockquote className="font-body text-2xl italic leading-snug text-secondary-foreground md:text-[28px]">
              "He did all the things he said, called to keep me posted, and was always there when he said he would be. He worked in a very professional manner and did a very good job. It was a pleasure to have him for this project."
            </blockquote>
            <p className="mt-6 font-display text-base uppercase tracking-wider text-secondary-foreground/90">
              — Alice "Cotton" Swords, West Point, MS
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-dark/60 px-4 py-2 font-body text-sm font-bold leading-none">
              <span className="text-accent">5.0</span>
              <span className="text-accent inline-flex items-center" aria-hidden>★★★★★</span>
              <span className="text-secondary-foreground/80">— Rated on Google</span>
            </div>
          </div>
        </div>

        <div className="space-y-5 md:col-span-4">
          {smallReviews.map((r) => (
            <article
              key={r.name}
              className="rounded-md border-l-4 border-primary bg-dark/70 p-6 shadow-[var(--shadow-card)]"
            >
              <div className="mb-3 flex items-center gap-1 text-accent" aria-label="5 star rating">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-accent" />
                ))}
              </div>
              <p className="font-body text-[15px] italic text-secondary-foreground/90">"{r.quote}"</p>
              <p className="mt-4 font-display text-xs uppercase tracking-wider text-secondary-foreground/70">
                — {r.name}, {r.city}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
