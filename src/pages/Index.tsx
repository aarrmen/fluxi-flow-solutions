import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import FormSection from "@/components/FormSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <FormSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
