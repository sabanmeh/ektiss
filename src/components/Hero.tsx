import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: `linear-gradient(rgba(22, 17, 67, 0.7), rgba(22, 17, 67, 0.7)), url('/lovable-uploads/52f541e9-16ad-465b-8a0b-86e1663d2f0e.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <section id="accueil" className="relative h-full flex items-center justify-center text-white pt-16">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
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
                className="border-white/80 text-white hover:bg-white hover:text-primary hover:border-white px-8 py-3 transition-all duration-300 bg-transparent"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Découvrir nos services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;