import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { ChevronsLeftRight } from "lucide-react";
import beforeImg from "@/assets/before-roof.jpg";
import afterImg from "@/assets/after-roof.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const gallery = [
  { src: g1, alt: "Aerial drone shot of completed charcoal shingle roof on two-story brick home in Starkville MS", city: "Starkville, MS", span: "md:col-span-2 md:row-span-2" },
  { src: g2, alt: "New gray architectural shingle roof on Southern ranch home in West Point MS", city: "West Point, MS", span: "md:col-span-1" },
  { src: g3, alt: "Mid-installation drone shot showing new shingles replacing old roof in Columbus MS", city: "Columbus, MS", span: "md:col-span-1" },
  { src: g4, alt: "Detailed ridge cap shingle close-up against blue sky in Starkville MS", city: "Starkville, MS", span: "md:col-span-1" },
  { src: g5, alt: "Aerial commercial flat roof TPO installation in Starkville MS", city: "Starkville, MS", span: "md:col-span-2" },
  { src: g6, alt: "Close-up of new charcoal architectural shingles in warm light in Maben MS", city: "Maben, MS", span: "md:col-span-1" },
];

const Work = () => {
  return (
    <section id="our-work" className="bg-background py-20 md:py-28">
      <div className="container">
        <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Real Jobs. Real Results.</p>
        <h2 className="max-w-3xl font-display text-3xl leading-tight text-foreground md:text-[52px]">
          Don't Take Our Word For It — Look at the Drone Footage.
        </h2>
        <p className="mt-5 max-w-2xl font-body text-base text-muted-foreground md:text-lg">
          We don't hide behind stock photos. Every image below is a real roof we've installed for your neighbors in Starkville, West Point, and Columbus.
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
