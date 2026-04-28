import { useState } from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { ChevronsLeftRight } from "lucide-react";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";
import { cn } from "@/lib/utils";

import beforeImg from "@/assets/before-roof.jpg";
import afterImg from "@/assets/after-roof.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

type Category = "Residential" | "Commercial" | "Repair";

const projects: { src: string; alt: string; city: string; category: Category }[] = [
  { src: g1, alt: "Aerial drone shot of completed charcoal shingle roof on brick ranch home in Starkville MS", city: "Starkville, MS", category: "Residential" },
  { src: g2, alt: "New architectural shingle roof on large two-story home with chimney in West Point MS", city: "West Point, MS", category: "Residential" },
  { src: g3, alt: "Mid-installation shot showing new shingles replacing old roof on home in Columbus MS", city: "Columbus, MS", category: "Repair" },
  { src: g4, alt: "Aerial view of completed light gray architectural shingle roof on fraternity house in Starkville MS", city: "Starkville, MS", category: "Commercial" },
  { src: g5, alt: "Aerial drone shot of completed dark shingle roof on large commercial brick building in Starkville MS", city: "Starkville, MS", category: "Commercial" },
  { src: g6, alt: "Architectural shingle roof installation completed by Shurden's Roofing in North Mississippi", city: "Maben, MS", category: "Residential" },
  { src: g1, alt: "Repaired ridge cap and replaced shingles after wind damage in Louisville MS", city: "Louisville, MS", category: "Repair" },
  { src: g2, alt: "Roof replacement on church building in Eupora MS", city: "Eupora, MS", category: "Commercial" },
];

const filters: ("All" | Category)[] = ["All", "Residential", "Commercial", "Repair"];

const GalleryPage = () => {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navigation />
      <main>
        <PageHero
          eyebrow="Project Gallery"
          title={<>Real Jobs. <span className="text-primary">Real Results.</span></>}
          subtitle="See the craftsmanship that makes us Starkville's best roofing business. Every roof below is a real Shurden's Roofing project across North Mississippi."
        />

        {/* Before / After */}
        <section className="bg-background py-16 md:py-24">
          <div className="container">
            <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Before & After</p>
            <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-foreground md:text-[44px]">
              Drag the Slider. See the Difference.
            </h2>
            <div className="mx-auto mt-10 max-w-[1000px] overflow-hidden rounded-lg border border-border shadow-[var(--shadow-card)]">
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
                className="!h-[300px] md:!h-[520px]"
              />
            </div>
          </div>
        </section>

        {/* Filters + grid */}
        <section className="bg-background pb-20 md:pb-28">
          <div className="container">
            <div className="flex flex-wrap items-center gap-2 border-y border-border py-5">
              <span className="mr-3 font-body text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                Filter:
              </span>
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  className={cn(
                    "rounded-full border px-5 py-2 font-display text-xs font-bold uppercase tracking-wider transition-colors",
                    active === f
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-foreground hover:border-primary hover:text-primary"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {visible.map((p, i) => (
                <figure
                  key={`${p.alt}-${i}`}
                  className={cn(
                    "group relative overflow-hidden rounded-md",
                    i % 5 === 0 && "sm:col-span-2",
                    "h-[260px] md:h-[300px]"
                  )}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-0 flex items-end justify-between gap-2 bg-gradient-to-t from-dark/85 via-dark/30 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-display text-sm uppercase tracking-wider text-dark-foreground">{p.city}</span>
                    <span className="rounded-full bg-primary px-3 py-1 font-display text-[10px] uppercase tracking-wider text-primary-foreground">
                      {p.category}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner
          title="Want Your Roof on This Page Next?"
          body="Free inspection, honest scope, real photos. Let's get started."
          buttonLabel="Start My Project"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default GalleryPage;
