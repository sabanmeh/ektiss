import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/a7ab6e40-60d5-4f23-88fa-ecdecd663d6a.png" 
            alt="EKTISS" 
            className="h-8"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-10">
          <button 
            onClick={() => scrollToSection('accueil')}
            className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-sm tracking-wide"
          >
            Accueil
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-sm tracking-wide"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('expertise')}
            className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-sm tracking-wide"
          >
            Expertise
          </button>
          <a 
            href="https://portail.ektiss.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-sm tracking-wide"
          >
            Portail client
          </a>
        </nav>

        <Button 
          onClick={() => scrollToSection('contact')}
          variant="default"
          className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 px-6 py-2.5 rounded-full font-medium"
        >
          Nous contacter
        </Button>
      </div>
    </header>
  );
};

export default Header;