import { useParams } from "react-router-dom";
import { Phone } from "lucide-react";
import SEO from "@/components/SEO";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";
import NotFound from "./NotFound";
import { findTeamIntro } from "@/data/team-intros";

// Linked from the booking confirmation text when this person is assigned to
// the inspection. Not a search landing page, so it is noindex.
const MeetPage = () => {
  const { slug } = useParams();
  const intro = findTeamIntro(slug);
  if (!intro) return <NotFound />;

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <SEO
        title={`Meet ${intro.name} | Shurden's Roofing`}
        description={`A quick hello from ${intro.name} of Shurden's Roofing before your roof inspection.`}
        path={`/meet/${intro.slug}`}
        noindex
      />
      <Navigation />
      <main className="bg-dark text-dark-foreground">
        {/* Phone order: heading, video, call box. Desktop: video left, text right. */}
        <div className="container grid gap-8 pb-20 pt-24 md:grid-cols-2 md:gap-x-16 md:gap-y-8 md:pb-28 md:pt-32">
          <div className="md:col-start-2 md:row-start-1 md:self-end">
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Your Shurden's Roofing inspector
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] md:text-6xl">
              Meet {intro.name}
            </h1>
            <p className="mt-4 max-w-xl font-body text-base text-dark-foreground/95 md:mt-6 md:text-lg">
              Here's a quick hello from {intro.firstName} before your inspection, so you know who's knocking on your door.
            </p>
          </div>
          <div className="md:col-start-1 md:row-span-2 md:row-start-1 md:self-center">
            <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-lg border border-primary/30 bg-black shadow-[var(--shadow-card)] md:max-w-sm">
              <video
                className="block aspect-[9/16] w-full object-cover"
                src={intro.video}
                poster={intro.poster}
                controls
                playsInline
                preload="metadata"
                aria-label={`Intro video from ${intro.name}`}
              />
            </div>
          </div>
          <div className="md:col-start-2 md:row-start-2 md:self-start">
            <div className="rounded-lg border border-white/10 bg-secondary/30 p-6">
              <p className="font-body text-base font-semibold">Questions before your inspection, or need a new time?</p>
              <p className="mt-1 font-body text-sm text-dark-foreground/90">Call the office and we'll take care of it.</p>
              <a
                href="tel:6624986629"
                className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-md bg-primary px-6 py-3 font-display text-sm uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
              >
                <Phone className="h-4 w-4" aria-hidden /> Call 662-498-6629
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default MeetPage;
