import gafBadge from "@/assets/gaf-master-elite.webp";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="border-t-2 border-primary bg-dark text-dark-foreground"
      aria-labelledby="cert-heading"
    >
      <div className="container py-14 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
          <div className="mx-auto md:mx-0">
            <img
              src={gafBadge}
              alt="GAF Master Elite Certified Residential Roofing Contractor badge"
              width={160}
              height={160}
              className="h-32 w-auto md:h-40"
              loading="lazy"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Factory Certified
            </p>
            <h2
              id="cert-heading"
              className="font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl"
            >
              GAF Master Elite<sup className="text-base">®</sup> Certified Contractor
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-body text-base text-dark-foreground/80 md:mx-0 md:text-lg">
              We're one of less than 2% of roofers in North America to earn GAF's highest factory certification —
              meaning longer warranties, factory-trained crews, and proven craftsmanship on every job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
