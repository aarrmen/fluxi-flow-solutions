import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ExternalLink, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se integraría con tu backend o servicio de email
    toast({
      title: "Mensaje enviado",
      description: "Te contactaremos pronto para ayudarte con la automatización de tu negocio.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      business: '',
      message: ''
    });
  };

  const openExternalForm = () => {
    window.open('https://fluxiai.app.n8n.cloud/form-test/3064a028-1c8b-495b-bbf8-4663184a8bf6', '_blank');
  };
  return (
    <section id="form-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-foreground mb-6">
            ¿Listo para automatizar tu negocio?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuéntanos sobre tu negocio. En menos de un minuto sabremos cómo ayudarte a automatizarlo.
          </p>
        </div>
        
        {/* Opción 1: Botón para abrir formulario externo */}
        <div className="text-center mb-8">
          <Button 
            onClick={openExternalForm}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            Abrir formulario completo
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            Se abrirá en una nueva pestaña
          </p>
        </div>

        {/* Opción 2: Formulario local alternativo */}
        <Card className="bg-card rounded-2xl shadow-xl animate-slide-up">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                O completa este formulario rápido
              </h3>
              <p className="text-muted-foreground">
                Te contactaremos para entender mejor tus necesidades
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-card-foreground">Nombre *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-card-foreground">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-card-foreground">Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="+34 600 000 000"
                  />
                </div>
                
                <div>
                  <Label htmlFor="business" className="text-card-foreground">Tipo de negocio *</Label>
                  <Input
                    id="business"
                    name="business"
                    type="text"
                    required
                    value={formData.business}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="Ej: Clínica, Restaurante, Tienda..."
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="message" className="text-card-foreground">¿Qué procesos quieres automatizar?</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-2 min-h-[120px]"
                  placeholder="Describe brevemente qué tareas repetitivas consumen más tiempo en tu negocio..."
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar consulta
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FormSection;