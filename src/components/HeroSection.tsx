import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-automation.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-foreground leading-tight mb-6">
            Impulsa tu negocio con{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              automatización inteligente
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
            En Fluxi Solutions creamos herramientas digitales para que negocios como el tuyo 
            ahorren tiempo y aumenten sus ingresos.
          </p>
          
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Empieza ahora
          </Button>
        </div>
        
        {/* Hero Image */}
        <div className="relative animate-slide-up">
          <div className="relative z-10">
            <img 
              src={heroImage} 
              alt="Automatización digital" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-60 blur-xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-lavender rounded-full opacity-40 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;