import SEO from "@/components/SEO";
import Navigation from "@/components/site/Navigation";
import TrustBar from "@/components/site/TrustBar";
import Hero from "@/components/site/Hero";
import Stats from "@/components/site/Stats";
import Certifications from "@/components/site/Certifications";
import About from "@/components/site/About";
import GafSystem from "@/components/site/GafSystem";
import ShingleComparison from "@/components/site/ShingleComparison";
import WarrantyBand from "@/components/site/WarrantyBand";
import Services from "@/components/site/Services";
import CrewVideo from "@/components/site/CrewVideo";
import Work from "@/components/site/Work";
import Reviews from "@/components/site/Reviews";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <SEO
        title="North Mississippi Roofing Company | Shurden's Roofing"
        description="GAF Master Elite® roofing company serving North Mississippi since 2015. Roof replacement, roof repair, commercial roofing, and storm damage insurance claims. Call 662-498-6629."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Does Shurden's Roofing handle insurance claims for storm damage?", acceptedAnswer: { "@type": "Answer", text: "Yes. We document wind and hail damage, take photos, review the scope, and help coordinate with your insurance adjuster so you understand the process from inspection to finished roof." } },
            { "@type": "Question", name: "What areas do you serve?", acceptedAnswer: { "@type": "Answer", text: "We are headquartered in Maben and serve North Mississippi, including Starkville, West Point, Columbus, Louisville, Eupora, Tupelo, and nearby communities." } },
            { "@type": "Question", name: "How much does a roof inspection cost?", acceptedAnswer: { "@type": "Answer", text: "Roof inspections are free and no-obligation. We use high-resolution drone photography to document every part of your roof." } },
            { "@type": "Question", name: "What shingles do you install?", acceptedAnswer: { "@type": "Answer", text: "We install GAF systems including Timberline HDZ, UHDZ, Natural Shadow, Camelot II, and Slateline, with GAF underlayments, Cobra ventilation, and Master Flow Pivot Pipe Boot Flashing." } },
            { "@type": "Question", name: "What commercial systems do you install?", acceptedAnswer: { "@type": "Answer", text: "We install commercial SBS self-adhering systems, the GAF Liberty Roofing System, Mule-Hide TPO, metal, and shingle systems for businesses, churches, and offices." } },
            { "@type": "Question", name: "What makes GAF Master Elite® important?", acceptedAnswer: { "@type": "Answer", text: "GAF Master Elite® is held by less than 2% of roofers in North America. It allows us to offer Gold Pledge and Silver Pledge warranty options most local roofers cannot." } },
            { "@type": "Question", name: "How fast can you respond to leaks or storm damage?", acceptedAnswer: { "@type": "Answer", text: "Emergency roofing service is available. We typically respond the same day or next day for tarping, leak stops, and storm damage inspections." } },
            { "@type": "Question", name: "Are you a licensed and insured roofer in Mississippi?", acceptedAnswer: { "@type": "Answer", text: "Yes. Shurden's Roofing LLC is fully licensed and insured to perform residential and commercial roofing work in Mississippi." } },
          ],
        }}
      />
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <Certifications />
        <About />
        <GafSystem />
        <ShingleComparison />
        <WarrantyBand />
        <Services />
        <CrewVideo />
        <Work />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default Index;
