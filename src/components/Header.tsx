import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 border-border/50' 
        : 'bg-white/10 border-white/20'
    }`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/a7ab6e40-60d5-4f23-88fa-ecdecd663d6a.png" 
            alt="EKTISS" 
            className={`h-8 transition-all duration-300 ${isScrolled ? '' : 'brightness-0 invert'}`}
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-10">
          <button 
            onClick={() => scrollToSection('accueil')}
            className={`transition-all duration-300 font-medium text-sm tracking-wide ${
              isScrolled 
                ? 'text-muted-foreground hover:text-primary' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            Accueil
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className={`transition-all duration-300 font-medium text-sm tracking-wide ${
              isScrolled 
                ? 'text-muted-foreground hover:text-primary' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('expertise')}
            className={`transition-all duration-300 font-medium text-sm tracking-wide ${
              isScrolled 
                ? 'text-muted-foreground hover:text-primary' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            Expertise
          </button>
          <a 
            href="https://portail.ektiss.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`transition-all duration-300 font-medium text-sm tracking-wide ${
              isScrolled 
                ? 'text-muted-foreground hover:text-primary' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            Appels d'offres
          </a>
        </nav>

        {/* Desktop Contact Button */}
        <Button 
          onClick={() => scrollToSection('contact')}
          variant="default"
          className={`hidden md:flex shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 px-6 py-2.5 rounded-xl font-medium ${
            isScrolled 
              ? 'bg-primary hover:bg-primary/90 text-white' 
              : 'bg-secondary text-primary hover:bg-secondary/90'
          }`}
        >
          Nous contacter
        </Button>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden ${
                isScrolled 
                  ? 'text-primary hover:bg-primary/10' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col space-y-6 mt-8">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('expertise')}
                className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                Expertise
              </button>
              <a 
                href="https://portail.ektiss.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                Appels d'offres
              </a>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="default"
                className="mt-8 w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 px-6 py-3 rounded-xl font-medium"
              >
                Nous contacter
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;