import Navigation from "@/components/site/Navigation";
import Hero from "@/components/site/Hero";
import Stats from "@/components/site/Stats";
import Certifications from "@/components/site/Certifications";
import About from "@/components/site/About";
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
        <Stats />
        <Certifications />
        <About />
        <Services />
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
