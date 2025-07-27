import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const FormSection = () => {
  const openExternalForm = () => {
    window.open('https://fluxiai.app.n8n.cloud/form/3064a028-1c8b-495b-bbf8-4663184a8bf6', '_blank');
  };

  return (
    <section id="form-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-foreground mb-6">
            ¿Listo para automatizar tu negocio?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Cuéntanos sobre tu negocio. En menos de un minuto sabremos cómo ayudarte a automatizarlo.
          </p>
          
          <Button 
            onClick={openExternalForm}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
          >
            <ExternalLink className="w-6 h-6" />
            Rellenar formulario de contacto
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Se abrirá en una nueva pestaña
          </p>
        </div>
      </div>
    </section>
  );
};

export default FormSection;