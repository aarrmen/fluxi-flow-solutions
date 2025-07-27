import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-white mb-6">
            La digitalización ya no es opcional
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Déjanos ayudarte a dar el siguiente paso.
          </p>
          
          <Button 
            size="lg"
            onClick={scrollToForm}
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Solicita tu solución personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;