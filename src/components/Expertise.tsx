import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { School, Home, Building2, Settings } from "lucide-react";

const Expertise = () => {
  const projets = [
    {
      icon: School,
      title: "Bâtiments publics",
      description: "Écoles, équipements sportifs, bâtiments administratifs",
      image: "/lovable-uploads/1f069e1f-fb9c-4da1-a43c-cb1ac1911aca.png"
    },
    {
      icon: Home,
      title: "Logements",
      description: "Collectifs ou individuels, sociaux ou privés",
      image: "/lovable-uploads/8ba30bb3-6932-4462-8412-e87b104c0c86.png"
    },
    {
      icon: Building2,
      title: "Tertiaire & commercial",
      description: "Bureaux, commerces, bâtiments industriels",
      image: "/lovable-uploads/f5c1a072-ebac-4661-8522-00128f386355.png"
    },
    {
      icon: Settings,
      title: "Équipements techniques",
      description: "Centres techniques, chaufferies, bâtiments spécifiques",
      image: "/lovable-uploads/2a20032b-b01a-4a63-95d2-65ab738dd028.png"
    }
  ];

  const clients = [
    "Maîtres d'ouvrage publics : collectivités, établissements publics, bailleurs sociaux",
    "Maîtres d'ouvrage privés : promoteurs, investisseurs, copropriétés",
    "Architectes & bureaux d'études : en co-traitance ou en groupement",
    "Entreprises du bâtiment : appui pour les réponses aux appels d'offres"
  ];

  return (
    <section id="expertise" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Types de projets */}
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 text-center tracking-tight">
              Types de projets traités
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground text-center mb-16 max-w-4xl mx-auto leading-relaxed">
              Nous intervenons sur une grande variété de projets, en neuf comme en réhabilitation
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {projets.map((projet, index) => {
                const IconComponent = projet.icon;
                return (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border-0 shadow-lg rounded-2xl bg-white/95 backdrop-blur-sm">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={projet.image}
                        alt={projet.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300"></div>
                      <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/95 backdrop-blur-sm shadow-xl">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <CardHeader className="pb-6">
                      <CardTitle className="text-xl font-bold tracking-tight">{projet.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{projet.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Secteurs d'intervention */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">
              Secteurs d'intervention
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-primary text-white">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">Secteur Public</Badge>
                  <CardTitle className="text-2xl">Marchés publics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">
                    Parfaite maîtrise du Code de la Commande Publique, rédaction des pièces réglementaires, 
                    accompagnement AMO.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary text-primary">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2 border-primary text-primary">Secteur Privé</Badge>
                  <CardTitle className="text-2xl">Marchés privés</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Flexibilité, proximité avec les entreprises, adaptation aux contraintes spécifiques.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Nos clients */}
          <div>
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">
              Nos clients
            </h2>
            <div className="bg-section rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {clients.map((client, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">{client}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;