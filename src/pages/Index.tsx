import Navigation from "@/components/site/Navigation";
import Hero from "@/components/site/Hero";
import Stats from "@/components/site/Stats";
import StormDamage from "@/components/site/StormDamage";
import Work from "@/components/site/Work";
import Reviews from "@/components/site/Reviews";
import Contact from "@/components/site/Contact";
import FAQ from "@/components/site/FAQ";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <StormDamage />
        <Work />
        <Reviews />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default Index;
