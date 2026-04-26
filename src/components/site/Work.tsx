import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { ChevronsLeftRight } from "lucide-react";
import beforeImg from "@/assets/before-roof.jpg";
import afterImg from "@/assets/after-roof.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";

const gallery = [
  { src: g1, alt: "Aerial drone shot of completed charcoal shingle roof on brick ranch home in Starkville MS", city: "Starkville, MS", span: "md:col-span-2 md:row-span-2" },
  { src: g2, alt: "New architectural shingle roof on large two-story home with chimney in West Point MS", city: "West Point, MS", span: "md:col-span-2" },
  { src: g3, alt: "Mid-installation shot showing new shingles replacing old roof on home in Columbus MS", city: "Columbus, MS", span: "md:col-span-1" },
  { src: g4, alt: "Aerial view of completed light gray architectural shingle roof on fraternity house in Starkville MS", city: "Starkville, MS", span: "md:col-span-1" },
  { src: g5, alt: "Aerial drone shot of completed dark shingle roof on large commercial brick building in Starkville MS", city: "Starkville, MS", span: "md:col-span-2" },
];

const Work = () => {
  return (
    <section id="our-work" className="bg-background py-20 md:py-28">
      <div className="container">
        <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Real Jobs. Real Results Across North Mississippi.</p>
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-foreground md:text-[52px]">
          Recent Projects in Your Area.
        </h2>
        <p className="mt-5 max-w-2xl font-body text-base text-muted-foreground md:text-lg">
          We don't hide behind stock photos. Every roof you see below is a real roofing job we've completed for our North Mississippi neighbors, from Maben and Starkville to West Point, Columbus, and beyond. Drag the slider to see what a new roof from Shurden's Roofing looks like before and after.
        </p>

        <div className="mx-auto mt-12 max-w-[900px] overflow-hidden rounded-lg border border-border shadow-[var(--shadow-card)]">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={beforeImg} alt="Old worn streaky roof before Shurden's Roofing replacement in Starkville MS" />}
            itemTwo={<ReactCompareSliderImage src={afterImg} alt="New charcoal architectural shingle roof after Shurden's Roofing installation in Starkville MS" />}
            handle={
              <div className="flex h-full items-center justify-center">
                <div className="h-full w-[3px] bg-primary" />
                <div className="absolute grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground compare-handle-pulse">
                  <ChevronsLeftRight className="h-6 w-6" />
                </div>
              </div>
            }
            className="!h-[300px] md:!h-[500px]"
          />
        </div>

        {/* Masonry-style broken grid */}
        <div className="mt-14 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[220px]">
          {gallery.map((p) => (
            <figure
              key={p.alt}
              className={`group relative overflow-hidden rounded-md ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-dark/85 via-dark/30 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-display text-sm uppercase tracking-wider text-dark-foreground">{p.city}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
