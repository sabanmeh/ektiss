import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, FileText, Users, Building } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "En phase de conception",
      description: "Estimation des coûts dès les premières intentions architecturales",
      items: [
        "Estimation des coûts dès les premières intentions architecturales (ESQ, APS, APD)",
        "Analyse des variantes et aide au choix des matériaux et procédés techniques",
        "Élaboration des pièces écrites (CCTP, DPGF, BPU…) pour les DCE",
        "Conseil technique et économique à la maîtrise d'ouvrage et à la maîtrise d'œuvre"
      ]
    },
    {
      icon: FileText,
      title: "En phase de consultation",
      description: "Préparation et suivi des appels d'offres publics et privés",
      items: [
        "Préparation, lancement et suivi des appels d'offres (publics et privés)",
        "Analyse des offres, vérification de la conformité technique et financière",
        "Négociation avec les entreprises et assistance à l'attribution des marchés"
      ]
    },
    {
      icon: Building,
      title: "En phase travaux",
      description: "Accompagnement jusqu'à la livraison du projet",
      items: [
        "Rédaction des pièces marchés",
        "Suivi des signatures marchés",
        "Contrôle de l'exécution et des prestations"
      ]
    },
    {
      icon: Users,
      title: "Assistance à Maîtrise d'Ouvrage",
      description: "Accompagnement global des projets de construction",
      items: [
        "Conseil stratégique et budgétaire",
        "Suivi des études techniques et architecturales",
        "Coordination des intervenants et appui à la prise de décision",
        "Aide au respect des délais, des coûts et de la qualité"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-section relative">
      {/* Image décorative en arrière-plan */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-2/3 opacity-5 hidden lg:block">
        <img 
          src="/lovable-uploads/f5c1a072-ebac-4661-8522-00128f386355.png"
          alt="Architecture moderne"
          className="w-full h-full object-cover rounded-l-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Nos missions
          </h2>
          <p className="text-xl text-muted-foreground">
            Notre mission ? Être l'interface technique et financière entre la maîtrise d'ouvrage, 
            la maîtrise d'œuvre et les entreprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;