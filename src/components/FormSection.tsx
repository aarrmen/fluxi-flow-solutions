const FormSection = () => {
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
        
        <div className="bg-card rounded-2xl shadow-xl p-8 animate-slide-up">
          <div className="w-full">
            <iframe
              src="https://fluxiai.app.n8n.cloud/form-test/3064a028-1c8b-495b-bbf8-4663184a8bf6"
              className="w-full min-h-[600px] border-0 rounded-lg"
              title="Formulario de contacto Fluxi Solutions"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;