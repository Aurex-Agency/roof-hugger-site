import { Phone, Award, Users, Home as HomeIcon, ShieldCheck, Calendar, MapPin } from "lucide-react";
import SEO from "@/components/SEO";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";
import office from "@/assets/team/office-exterior.jpg";
import josh from "@/assets/team/josh-shurden.jpg";
import garrett from "@/assets/team/garrett-shurden.jpg";
import parker from "@/assets/team/parker-shurden.jpg";
import cameron from "@/assets/team/cameron-shurden.jpg";

const reasons = [
  { icon: Calendar, title: "Over 30 Years of Experience", body: "Three decades of hands-on roofing across North Mississippi homes and businesses." },
  { icon: Users, title: "100+ Years Combined Experience", body: "A seasoned crew that has seen every roofing situation Mississippi weather can throw at it." },
  { icon: HomeIcon, title: "Family Owned and Operated", body: "Built by Josh Shurden and his sons, Garrett, Parker, and Cameron, with Tosha and Kelly running the office." },
  { icon: Award, title: "GAF Master Elite® Certified", body: "Top 2% of roofers in North America, with a protected 50-mile region for the Master Elite warranty." },
  { icon: ShieldCheck, title: "25-Year Warranty", body: "Manufacturer warranty on materials and workmanship so your investment is covered for the long haul." },
  { icon: MapPin, title: "Serving a 600-Mile Radius", body: "Headquartered in Maben, traveling across North Mississippi and beyond to roof for our neighbors." },
];

const team = [
  { name: "Josh Shurden", role: "Owner", img: josh },
  { name: "Garrett Shurden", role: "Sales & Service", img: garrett },
  { name: "Parker Shurden", role: "Sales & Service", img: parker },
  { name: "Cameron Shurden", role: "Sales & Service", img: cameron },
];

const ReviewsPage = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <SEO
        title="About Shurden's Roofing | Family-Owned Roofer in Maben, MS"
        description="Family-owned in Maben since 2015. Meet the Shurden family, GAF Master Elite® certified, serving North Mississippi homes and businesses."
        path="/reviews"
      />
      <Navigation />
      <main>
        <PageHero
          eyebrow="About Shurden's Roofing"
          title={<>A Mississippi Family Business Built on <span className="text-primary">Honest Roofing Work</span>.</>}
          subtitle="Locally owned in Maben since 2015, GAF Master Elite® certified, and trusted by homeowners and businesses across North Mississippi."
        />

        {/* About the Business */}
        <section className="bg-background py-16 md:py-24">
          <div className="container grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">About the Business</p>
              <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
                Three Generations of Roofers, One Mississippi Family.
              </h2>
              <div className="mt-6 space-y-5 font-body text-base text-foreground/80 md:text-lg">
                <p>
                  Josh Shurden, owner of Shurden's Roofing LLC, has worked in the construction business for over 30 years. Around 2010 the business began transitioning to mostly roofing, and by 2012 it had become a full-service roofing company. The demand has continued to grow, and thanks to God's blessing and direction, so has our roofing business.
                </p>
                <p>
                  In recent years, three of Josh's sons officially joined the team in the sales and service department. Garrett, Parker, and Cameron Shurden grew up on a roof with their dad and have seen and experienced just about every situation in the roofing industry, so it was a natural and welcomed addition to our company. Josh's wife, Tosha, and Parker's wife, Kelly, handle office managing and accounting.
                </p>
                <p>
                  We continue to learn, evolve, and adapt to this ever-changing business. We are a GAF Master Elite® residential roofing contractor, a designation achieved by only 2% of roofing contractors in America. We specialize in residential shingle roofing and are also certified flat roof and membrane roof installers.
                </p>
              </div>
            </div>
            <div>
              <img
                src={office}
                alt="The exterior of Shurden's Roofing office in Maben, MS"
                width={1024}
                height={372}
                loading="lazy"
                className="w-full rounded-lg object-cover shadow-[var(--shadow-card)]"
              />
            </div>
          </div>
        </section>

        {/* Owner Statement */}
        <section className="bg-dark text-dark-foreground">
          <div className="container py-16 md:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">A Word From the Owner</p>
              <p className="mt-6 font-display text-2xl leading-snug md:text-4xl">
                "I personally stand behind our services 100%. I am confident that our team will serve you well."
              </p>
              <p className="mt-5 font-body text-sm uppercase tracking-wider text-dark-foreground/70">— Josh Shurden, Owner</p>
              <a
                href="tel:6624986629"
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-cta"
              >
                <Phone className="h-4 w-4" /> Call 662-498-6629
              </a>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="bg-background py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Why Work With Us</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
                A Roof You Can Rely On, From Start to Finish.
              </h2>
              <p className="mt-5 font-body text-base text-muted-foreground md:text-lg">
                Whether you need a minor repair or a complete replacement, our goal is to protect your property and give you peace of mind from the first inspection to the final cleanup.
              </p>
            </div>

            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((r) => (
                <li key={r.title} className="rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                  <span className="grid h-12 w-12 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg md:text-xl">{r.title}</h3>
                  <p className="mt-2 font-body text-sm text-muted-foreground md:text-base">{r.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="bg-secondary py-16 text-secondary-foreground md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Staff</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">Meet Our Team</h2>
              <p className="mt-5 font-body text-base text-secondary-foreground/80 md:text-lg">
                The same Mississippi family on every estimate, every install, and every final walkthrough.
              </p>
            </div>

            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((m) => (
                <li key={m.name} className="overflow-hidden rounded-lg border border-white/10 bg-dark text-dark-foreground shadow-[var(--shadow-card)]">
                  <img
                    src={m.img}
                    alt={`${m.name}, ${m.role} at Shurden's Roofing`}
                    width={600}
                    height={800}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover"
                  />
                  <div className="px-5 py-5 text-center">
                    <h3 className="font-display text-lg md:text-xl">{m.name}</h3>
                    <p className="mt-1 font-body text-xs uppercase tracking-wider text-primary">{m.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaBanner
          eyebrow="Ready When You Are"
          title="Want to Be Next in Line for a Brand New Roof?"
          body="Be the next satisfied homeowner to upgrade your home with Shurden's Roofing. Contact us today to schedule your inspection and get a free estimate."
          buttonLabel="Get a Free Estimate"
          to="/contact"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default ReviewsPage;
