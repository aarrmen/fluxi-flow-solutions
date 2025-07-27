const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-inter font-bold mb-2">Fluxi Solutions</h3>
          <p className="text-background/80">
            Automatización inteligente para tu negocio
          </p>
        </div>
        
        <div className="pt-8 border-t border-background/20">
          <p className="text-background/60">
            © 2024 Fluxi Solutions. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;