import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  MapPin,
  ShieldCheck,
  Award,
  Home as HomeIcon,
  Building2,
  CloudHail,
  Wrench,
  CheckCircle2,
  FileText,
  Wind,
  Layers,
  Search,
  Clock,
  type LucideIcon,
} from "lucide-react";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";
import SEO from "@/components/SEO";
import { getServiceBySlug, serviceDetails } from "@/data/services";
import { cities } from "@/data/cities";

const iconMap: Record<string, LucideIcon> = {
  home: HomeIcon,
  building: Building2,
  hail: CloudHail,
  wrench: Wrench,
  shield: ShieldCheck,
  file: FileText,
  wind: Wind,
  layers: Layers,
  search: Search,
  clock: Clock,
};

const trust = [
  { icon: Award, label: "GAF Master Elite® Certified" },
  { icon: ShieldCheck, label: "Licensed & Insured in MS" },
  { icon: HomeIcon, label: "Family Owned Since 2015" },
];

const ServiceDetailPage = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const path = `/services/${service.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.serviceType,
    name: `${service.name} in North Mississippi`,
    description: service.metaDescription,
    provider: { "@id": "https://shurdensroofing.com/#business" },
    areaServed: { "@type": "AdministrativeArea", name: "North Mississippi" },
    url: `https://shurdensroofing.com${path}`,
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://shurdensroofing.com/" },
      { "@type": "ListItem", position: 2, name: "Roofing Services", item: "https://shurdensroofing.com/services" },
      { "@type": "ListItem", position: 3, name: service.name, item: `https://shurdensroofing.com${path}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const otherServices = serviceDetails.filter((s) => s.slug !== service.slug);

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        path={path}
        jsonLd={[serviceSchema, breadcrumbs, faqSchema]}
      />
      <Navigation />
      <main>
        <PageHero
          eyebrow={service.heroEyebrow}
          title={<>{service.heroTitle} <span className="text-primary">{service.heroHighlight}</span>.</>}
          subtitle={service.heroSubtitle}
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
              href="tel:6624986629"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-cta"
            >
              <Phone className="h-4 w-4" /> 662-498-6629
            </a>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-background py-16 md:py-24">
          <div className="container max-w-4xl">
            <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">
              {service.name} in North Mississippi
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
              {service.introHeading}
            </h2>
            {service.intro.map((p, i) => (
              <p key={i} className="mt-6 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* What's included */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container max-w-4xl">
            <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">What You Get</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-[44px]">
              {service.bulletsHeading}
            </h2>
            <ul className="mt-8 space-y-4 font-body text-base text-foreground">
              {service.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-cta"
            >
              Get a Free Roof Inspection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Feature cards */}
        <section className="bg-background py-16 md:py-24">
          <div className="container">
            <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-foreground md:text-[44px]">
              {service.cardsHeading}
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {service.cards.map((c) => {
                const Icon = iconMap[c.icon];
                return (
                  <article
                    key={c.title}
                    className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-card)]"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold leading-tight text-foreground">{c.title}</h3>
                    <p className="mt-3 font-body text-sm text-muted-foreground">{c.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cities served */}
        <section className="bg-secondary py-14 text-secondary-foreground md:py-20">
          <div className="container grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <div>
              <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Where We Work</p>
              <h2 className="font-display text-2xl font-bold leading-tight md:text-4xl">
                {service.name} Across North Mississippi.
              </h2>
              <p className="mt-5 font-body text-base text-secondary-foreground/85">
                Based in Maben and on roofs across the region every week. Pick your town for local details.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/roofing/${c.slug}`}
                    className="flex items-center gap-2 rounded-md border border-white/10 bg-secondary/40 px-3 py-2 font-body text-sm text-secondary-foreground/95 transition-colors hover:border-primary hover:text-primary"
                  >
                    <MapPin className="h-3.5 w-3.5 text-primary" /> {c.name}, {c.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background py-16 md:py-24">
          <div className="container max-w-4xl">
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">
              {service.name} Questions
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-[44px]">
              What Homeowners Ask First.
            </h2>
            <div className="mt-8 divide-y divide-border border-y border-border">
              {service.faqs.map((f) => (
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

        {/* Other services */}
        <section className="bg-muted py-12 md:py-16">
          <div className="container">
            <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">More From Shurden's</p>
            <div className="flex flex-wrap gap-3">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-4 py-2.5 font-display text-xs uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {s.name} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
              <Link
                to="/services"
                className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-4 py-2.5 font-display text-xs uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                All Services <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        <CtaBanner
          eyebrow={service.ctaEyebrow}
          title={service.ctaTitle}
          body={service.ctaBody}
          buttonLabel="Schedule My Inspection"
          to="/contact"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default ServiceDetailPage;
