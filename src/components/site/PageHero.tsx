import { ReactNode } from "react";
import heroImg from "@/assets/hero-roof.jpg";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}

const PageHero = ({ eyebrow, title, subtitle, image = heroImg, imageAlt = "Shurden's Roofing crew at work in North Mississippi" }: PageHeroProps) => {
  return (
    <section className="relative isolate overflow-hidden bg-dark text-dark-foreground">
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden />
      <div className="container relative grid min-h-[52vh] items-end pb-16 pt-24 md:min-h-[60vh] md:items-center md:pb-20 md:pt-28">
        <div className="max-w-3xl animate-hero-rise">
          <p className="mb-5 inline-block rounded-sm border-l-4 border-primary bg-dark/70 px-3 py-1.5 font-body text-xs font-bold uppercase tracking-[0.25em] text-dark-foreground/95">
            {eyebrow}
          </p>
          <h1 className="font-display font-extrabold text-[36px] leading-[1.05] tracking-[0.02em] text-dark-foreground md:text-[56px] lg:text-[64px]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl font-body font-medium text-base text-dark-foreground/90 md:text-xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
