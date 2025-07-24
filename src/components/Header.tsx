import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/a7ab6e40-60d5-4f23-88fa-ecdecd663d6a.png" 
            alt="EKTISS" 
            className="h-8"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('accueil')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Accueil
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('expertise')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Expertise
          </button>
          <a 
            href="https://portail.ektiss.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            Portail client
          </a>
        </nav>

        <Button 
          onClick={() => scrollToSection('contact')}
          variant="default"
          className="bg-primary hover:bg-primary/90"
        >
          Nous contacter
        </Button>
      </div>
    </header>
  );
};

export default Header;