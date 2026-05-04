import { Star, Quote } from "lucide-react";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";
import PageHero from "@/components/site/PageHero";
import ReviewThemes from "@/components/site/ReviewThemes";

const reviews = [
  {
    quote:
      "Shurden did a seamless job from start to finish when I was informed there was hail damage to my roof while doing some remodeling. They worked quickly with my insurance company and contractor to get a quote, schedule their crew, and start and finish the job in a timely way. They are very efficient and also cleaned the site after finishing as if they were never there.",
    name: "Natalie Morgan",
    location: "Starkville, MS",
  },
  {
    quote:
      "Really pleased with their response to my call for re-roofing my three buildings. It was less than a week and a half after I called. Their crew was on site with the required quoted materials and their work crew was really efficient. They cleaned up very well too.",
    name: "Scotty Allen",
    location: "Columbus, MS",
  },
  {
    quote:
      "Incredible service! Good, hardworking folks that got the job done quickly and efficiently. The day they came to start on our roof, we had to go out of town for a family funeral. We left before they arrived and returned at the end of the day and they were done. The roof looks amazing and it's like no one was ever here. Exceptional and unmatched service. Highly recommend!",
    name: "Brittany McCool",
    location: "West Point, MS",
  },
  {
    quote:
      "I have a beautiful new roof, thanks to Josh Shurden. He did all the things he said, called to keep me posted, and was always there when he said he would be. He worked in a very professional manner and did a very good job. It was a pleasure to have him for this project.",
    name: 'Alice "Cotton" Swords',
    location: "West Point, MS",
  },
  {
    quote:
      "Shurden's Roofing does great work and is there when he says he will be. Josh is a Christian man and keeps his word.",
    name: "Shelia R.",
    location: "Maben, MS",
  },
  {
    quote:
      "From the first phone call to the final cleanup, Shurden's Roofing handled everything with professionalism. They worked directly with my insurance and we never had to chase a single thing down. Highly recommend.",
    name: "Verified Google Review",
    location: "Louisville, MS",
  },
];

const ReviewCard = ({ quote, name, location }: { quote: string; name: string; location: string }) => (
  <article className="relative break-inside-avoid rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-card)]">
    <Quote aria-hidden className="pointer-events-none absolute right-4 top-4 h-12 w-12 text-primary/15" strokeWidth={1.5} />
    <div className="mb-3 flex items-center gap-1 text-primary" aria-label="5 star rating">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="h-4 w-4 fill-primary" />
      ))}
    </div>
    <p className="font-body text-[15px] italic leading-relaxed text-foreground/90">"{quote}"</p>
    <div className="mt-5 border-t border-border pt-4">
      <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary">{name}</p>
      <p className="mt-1 font-body text-xs text-muted-foreground">{location}</p>
    </div>
  </article>
);

const ReviewsPage = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navigation />
      <main>
        <PageHero
          eyebrow="Real Reviews"
          title={<>North Mississippi Homeowners Say It Better Than <span className="text-primary">We Can</span>.</>}
          subtitle="The best proof is what happens after the roof is finished: clean yards, handled claims, returned calls, and customers who recommend us to their neighbors."
        />

        <section className="bg-background py-16 md:py-20">
          <div className="container">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 rounded-2xl border border-border bg-card px-8 py-7 text-center shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-2 text-primary" aria-label="5 star rating">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-6 w-6 fill-primary" />
                ))}
              </div>
              <p className="font-display text-3xl font-bold uppercase leading-none text-foreground md:text-4xl">
                5.0 on Google From Local Customers
              </p>
              <p className="font-body text-sm text-muted-foreground">
                These reviews come from homeowners and business owners across Maben, Starkville, Columbus, West Point, Louisville, Eupora, and the surrounding North Mississippi area.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background pb-20 md:pb-28">
          <div className="container">
            <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
              {reviews.map((r) => (
                <div key={r.name} className="mb-5">
                  <ReviewCard {...r} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <ReviewThemes />

        <section className="bg-secondary py-16 text-secondary-foreground md:py-20">
          <div className="container text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Share Your Experience</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Worked With Us? Tell Your Neighbors.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-body text-base text-secondary-foreground/80 md:text-lg">
              Honest reviews help North Mississippi families find a roofer they can trust when the roof starts leaking or the storm damage shows up.
            </p>
            <a
              href="https://www.google.com/search?q=shurdens+roofing#lrd=0x88813925dbdd0ebd:0xac6a4b451d99c379,1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-cta"
            >
              Leave Us a Review on Google →
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default ReviewsPage;
