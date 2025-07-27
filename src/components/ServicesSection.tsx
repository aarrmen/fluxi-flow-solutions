import { FileText, Phone, FileInput, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Generador de Facturas Automatizado",
      description: "Crea facturas en segundos desde Telegram o tu web, sin complicaciones."
    },
    {
      icon: Phone,
      title: "Asistente de Reservas por Llamada",
      description: "Recibe y gestiona citas mediante un agente de voz disponible 24/7 para tus clientes."
    },
    {
      icon: FileInput,
      title: "Formularios Inteligentes",
      description: "Capta información de clientes de forma organizada y directa con formularios conectados a tus flujos de trabajo."
    },
    {
      icon: Calendar,
      title: "Automatización de Calendario",
      description: "Gestionamos tus citas y recordatorios automáticamente para reducir ausencias y mejorar la organización."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Herramientas diseñadas para simplificar y automatizar tu negocio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-inter font-semibold text-card-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;