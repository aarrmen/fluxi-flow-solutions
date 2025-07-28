import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/9ff4ea5e-9504-4649-95f4-1b1690adeb0e.png" 
              alt="Fluxi" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero-section')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('services-section')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('trust-section')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Confianza
            </button>
            <Button
              onClick={() => scrollToSection('form-section')}
              variant="default"
              size="sm"
            >
              Contacto
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              onClick={() => scrollToSection('form-section')}
              variant="default"
              size="sm"
            >
              Contacto
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;