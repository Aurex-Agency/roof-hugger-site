import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";
import SEO from "@/components/SEO";
import { cities } from "@/data/cities";

const ServiceAreasPage = () => {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://shurdensroofing.com/" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://shurdensroofing.com/service-areas" },
    ],
  };

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <SEO
        title="Service Areas | Shurden's Roofing North Mississippi"
        description="Roofing across North Mississippi. Starkville, Columbus, West Point, Tupelo, Louisville, Eupora, Maben, Ackerman, and nearby towns."
        path="/service-areas"
        jsonLd={breadcrumbs}
      />
      <Navigation />
      <main>
        <PageHero
          eyebrow="Service Areas"
          title={<>Roofing Across <span className="text-primary">North Mississippi</span>.</>}
          subtitle="Pick your city for local roofing details, recent work nearby, and answers to questions specific to your area."
        />

        <section className="bg-background py-16 md:py-24">
          <div className="container">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {cities.map((c) => (
                <Link
                  key={c.slug}
                  to={`/roofing/${c.slug}`}
                  className="group rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-card)]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-bold leading-tight text-foreground">
                    Roofing in {c.name}, {c.state}
                  </h2>
                  <p className="mt-2 font-body text-sm text-muted-foreground">{c.county} County · {c.distanceFromHq}</p>
                  <span className="mt-5 inline-flex items-center gap-1 font-display text-xs uppercase tracking-wider text-primary group-hover:gap-2 transition-all">
                    See {c.name} details <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner
          eyebrow="Don't See Your Town?"
          title="Call Us — There's a Good Chance We're Already Nearby."
          body="We travel a wide radius from our Maben office. If your town isn't listed, the answer is almost always yes."
          buttonLabel="Get a Free Inspection"
          to="/contact"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default ServiceAreasPage;
