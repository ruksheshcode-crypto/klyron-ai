import Navbar from "@/components/Navbar";
import CursorCodeEffect from "@/components/CursorCodeEffect";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";
import MarketplaceSection from "@/components/MarketplaceSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorCodeEffect />
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <DemoSection />
      <MarketplaceSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
