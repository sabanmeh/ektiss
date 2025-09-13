import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/a7ab6e40-60d5-4f23-88fa-ecdecd663d6a.png" 
            alt="EKTISS" 
            className="h-8 brightness-0 invert"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-10">
          <button 
            onClick={() => scrollToSection('accueil')}
            className="text-white/80 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide"
          >
            Accueil
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-white/80 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('expertise')}
            className="text-white/80 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide"
          >
            Expertise
          </button>
          <a 
            href="https://portail.ektiss.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide"
          >
            Portail client
          </a>
        </nav>

        <Button 
          onClick={() => scrollToSection('contact')}
          variant="default"
          className="bg-secondary text-primary hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 px-6 py-2.5 rounded-xl font-medium"
        >
          Nous contacter
        </Button>
      </div>
    </header>
  );
};

export default Header;