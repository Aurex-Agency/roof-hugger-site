import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, Phone, MapPin, ShieldCheck, Award, Home as HomeIcon, Building2, CloudHail, Wrench, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";
import SEO from "@/components/SEO";
import { getCityBySlug } from "@/data/cities";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g6 from "@/assets/gallery-6.jpg";

const galleryRotation = [g1, g2, g4, g6];

const services = [
  { icon: HomeIcon, title: "Residential Roof Replacement", body: "Full GAF Master Elite® shingle systems with deck inspection and registered warranty.", href: "/services#residential" },
  { icon: Building2, title: "Commercial Roofing", body: "SBS self-adhering, GAF Liberty, Mule-Hide TPO, metal, and shingle systems.", href: "/services#commercial" },
  { icon: CloudHail, title: "Storm & Hail Damage", body: "Drone-documented inspections and full insurance claim support from first call to final invoice.", href: "/services#repair" },
  { icon: Wrench, title: "Repairs & Leak Stops", body: "Pipe boots, flashing, valley repairs, blown-off shingles, and emergency tarping.", href: "/services#repair" },
];

const trust = [
  { icon: Award, label: "GAF Master Elite® Certified" },
  { icon: ShieldCheck, label: "Licensed & Insured in MS" },
  { icon: HomeIcon, label: "Family Owned Since 2015" },
];

const CityPage = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const city = getCityBySlug(slug);

  if (!city) return <Navigate to="/service-areas" replace />;

  const path = `/roofing/${city.slug}`;
  const fullName = `${city.name}, ${city.state}`;
  const title = `Roofing in ${fullName} | Shurden's Roofing`;
  const description = `GAF Master Elite® roofer serving ${fullName}. Residential, commercial, storm damage, and insurance claim support. Call 662-549-9165.`;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "Shurden's Roofing LLC",
    telephone: "+1-662-549-9165",
    priceRange: "$$",
    address: { "@type": "PostalAddress", addressLocality: "Maben", addressRegion: "MS", postalCode: "39750", addressCountry: "US" },
    areaServed: { "@type": "City", name: fullName, containedInPlace: { "@type": "AdministrativeArea", name: `${city.county} County, MS` } },
    url: `https://shurdensroofing.com${path}`,
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://shurdensroofing.com/" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://shurdensroofing.com/service-areas" },
      { "@type": "ListItem", position: 3, name: fullName, item: `https://shurdensroofing.com${path}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <SEO title={title} description={description} path={path} jsonLd={[localBusiness, breadcrumbs, faqSchema]} />
      <Navigation />
      <main>
        <PageHero
          eyebrow={`Roofing · ${fullName}`}
          title={<>Trusted Roofer in <span className="text-primary">{city.name}, {city.state}</span></>}
          subtitle={`${city.distanceFromHq}. GAF Master Elite® residential and commercial roofing, storm damage, and insurance claim support across ${city.county} County.`}
        />

        {/* Trust strip */}
        <section className="border-b border-border bg-background">
          <div className="container flex flex-col items-start gap-4 py-6 md:flex-row md:items-center md:justify-between md:py-5">
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {trust.map((t) => (
                <li key={t.label} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                  <t.icon className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-foreground">{t.label}</span>
                </li>
              ))}
            </ul>
            <a
              href="tel:6625499165"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-cta"
            >
              <Phone className="h-4 w-4" /> 662-549-9165
            </a>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-background py-16 md:py-24">
          <div className="container max-w-4xl">
            <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Why {city.name} Calls Us
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
              {city.name} Roofs Need a Crew That Knows the Area.
            </h2>
            {city.intro.map((p, i) => (
              <p key={i} className="mt-6 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Services in this city */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container">
            <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Services in {city.name}</p>
            <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-foreground md:text-[44px]">
              Every Roofing Service, One Local Crew.
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <Link
                  to={s.href}
                  key={s.title}
                  className="group rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-card)]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold leading-tight text-foreground">{s.title}</h3>
                  <p className="mt-3 font-body text-sm text-muted-foreground">{s.body}</p>
                  <span className="mt-5 inline-flex items-center gap-1 font-display text-xs uppercase tracking-wider text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recent work */}
        <section className="bg-background py-16 md:py-24">
          <div className="container">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Recent Work</p>
                <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-[44px]">
                  Roofs We've Finished Near {city.name}.
                </h2>
              </div>
              <Link to="/gallery" className="inline-flex items-center gap-1 font-display text-sm uppercase tracking-wider text-primary hover:gap-2 transition-all">
                See full gallery <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {galleryRotation.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Completed Shurden's Roofing project near ${fullName}`}
                  className="aspect-[4/3] w-full rounded-md object-cover"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Nearby towns */}
        <section className="bg-secondary py-14 text-secondary-foreground md:py-20">
          <div className="container grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <div>
              <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Around {city.name}</p>
              <h2 className="font-display text-2xl font-bold leading-tight md:text-4xl">
                We Roof the Whole {city.county} County Area.
              </h2>
              <p className="mt-5 font-body text-base text-secondary-foreground/85">
                If you're outside {city.name} but nearby, we still come to you.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {city.nearbyTowns.map((t) => (
                <li key={t} className="flex items-center gap-2 rounded-md border border-white/10 bg-secondary/40 px-3 py-2 font-body text-sm text-secondary-foreground/90">
                  <MapPin className="h-3.5 w-3.5 text-primary" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background py-16 md:py-24">
          <div className="container max-w-4xl">
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">{city.name} Questions</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-[44px]">
              What {city.name} Homeowners Ask First.
            </h2>
            <div className="mt-8 divide-y divide-border border-y border-border">
              {city.faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-body font-semibold text-base text-foreground md:text-lg">
                    {f.q}
                    <span className="grid h-8 w-8 flex-none place-items-center rounded-full border border-border text-primary transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 font-body text-base leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mr-2 inline h-4 w-4 text-primary" />
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner
          eyebrow={`Free ${city.name} Inspection`}
          title={`Need a Roofer in ${city.name}? Call Shurden's.`}
          body={`Free, no-pressure roof inspection anywhere in ${city.county} County. We'll tell you what the roof needs — repair, replacement, or nothing at all.`}
          buttonLabel="Schedule My Inspection"
          to="/contact"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default CityPage;
