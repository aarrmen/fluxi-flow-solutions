import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <ServicesSection />
        <TrustSection />
        <FormSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
