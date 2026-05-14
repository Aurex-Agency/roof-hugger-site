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
