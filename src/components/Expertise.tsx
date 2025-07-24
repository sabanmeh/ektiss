import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { School, Home, Building2, Settings } from "lucide-react";

const Expertise = () => {
  const projets = [
    {
      icon: School,
      title: "Bâtiments publics",
      description: "Écoles, équipements sportifs, bâtiments administratifs"
    },
    {
      icon: Home,
      title: "Logements",
      description: "Collectifs ou individuels, sociaux ou privés"
    },
    {
      icon: Building2,
      title: "Tertiaire & commercial",
      description: "Bureaux, commerces, bâtiments industriels"
    },
    {
      icon: Settings,
      title: "Équipements techniques",
      description: "Centres techniques, chaufferies, bâtiments spécifiques"
    }
  ];

  const clients = [
    "Maîtres d'ouvrage publics : collectivités, établissements publics, bailleurs sociaux",
    "Maîtres d'ouvrage privés : promoteurs, investisseurs, copropriétés",
    "Architectes & bureaux d'études : en co-traitance ou en groupement",
    "Entreprises du bâtiment : appui pour les réponses aux appels d'offres"
  ];

  return (
    <section id="expertise" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Types de projets */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 text-center">
              Types de projets traités
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Nous intervenons sur une grande variété de projets, en neuf comme en réhabilitation
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projets.map((projet, index) => {
                const IconComponent = projet.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto p-3 rounded-full bg-secondary/20 w-fit mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{projet.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">{projet.description}</CardDescription>
                    </CardContent>
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