type CrewVideoProps = {
  eyebrow?: string;
  heading?: string;
  body?: string;
};

const CrewVideo = ({
  eyebrow = "On The Roof With Our Crew",
  heading = "Real Shurden's Roofing Crews. Real Mississippi Roofs.",
  body = "No subcontractors, no rotating faces. This is our own crew on a North Mississippi roof, doing the work the right way.",
}: CrewVideoProps) => {
  return (
    <section className="bg-dark py-20 text-dark-foreground md:py-28">
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-2">
            <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">
              {eyebrow}
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
              {heading}
            </h2>
            <p className="mt-6 font-body text-base text-dark-foreground/80 md:text-lg">
              {body}
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="relative overflow-hidden rounded-lg border border-primary/30 shadow-[var(--shadow-card)]">
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-primary/20" aria-hidden />
              <video
                className="block aspect-video w-full object-cover"
                src="/video/crew-on-roof.mp4"
                poster="/video/crew-on-roof-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Shurden's Roofing crew working on a North Mississippi roof"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewVideo;
