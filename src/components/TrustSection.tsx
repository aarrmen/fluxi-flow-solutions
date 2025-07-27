import { CheckCircle } from "lucide-react";

const TrustSection = () => {
  const benefits = [
    "Ahorra tiempo",
    "Mejora tu atención al cliente", 
    "Haz crecer tu negocio"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-foreground mb-8">
            ¿Sigues gestionando tu negocio a mano?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            En Fluxi Solutions transformamos tus tareas repetitivas en procesos automáticos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center space-x-3 p-6 rounded-xl bg-accent/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-muted-foreground mb-2">
            Ya confían en Fluxi pequeñas clínicas, restaurantes y negocios independientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;