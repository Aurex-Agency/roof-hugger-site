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
              className="font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
            >
              GAF Master Elite<sup className="text-base">®</sup> Certified Roofing Contractor
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-body text-base text-dark-foreground/85 md:mx-0 md:text-lg">
              GAF lists Shurden's Roofing as a Master Elite® contractor and President's Club award recipient. Enhanced limited warranties are available for qualifying roof systems. Ask which products, installation requirements, registration and exclusions apply to your project.
            </p>
            <a className="inline-block mt-4 underline py-2" href="https://www.gaf.com/en-us/roofing-contractors/residential/usa/ms/maben/shurden%E2%80%99s-roofing-llc-1148160">View Shurden’s GAF contractor profile</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
