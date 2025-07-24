import { Button } from "@/components/ui/button";
import dekraProfile from "@/assets/dekra-profile.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="min-h-screen relative bg-hero-gradient text-white flex items-center pt-16 overflow-hidden">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/52f541e9-16ad-465b-8a0b-86e1663d2f0e.png"
          alt="Architecture moderne"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Photo de profil et nom */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 mb-4">
              <img 
                src={dekraProfile}
                alt="Dekra Sefsafi"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl text-secondary font-medium">Dekra Sefsafi</h3>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Économiste de la construction</span>
            <span className="text-secondary">L'art de concilier vision architecturale et réalité budgétaire</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Au cœur de chaque projet de construction, l'économiste de la construction joue un rôle clé : 
            garantir la maîtrise des coûts et la qualité technique des prestations, du premier trait de crayon à la livraison finale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-secondary text-primary hover:bg-secondary/90 font-semibold px-8 py-3 transition-all duration-300"
            >
              Démarrer votre projet
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 transition-all duration-300"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir nos services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;