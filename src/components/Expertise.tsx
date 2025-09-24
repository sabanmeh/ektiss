import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { School, Home, Building2, Settings, ChevronDown, Users } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Expertise = () => {
  const navigate = useNavigate();
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const projets = [
    {
      icon: School,
      title: "Bâtiments publics",
      description: "Écoles, équipements sportifs, bâtiments administratifs",
      image: "/lovable-uploads/1f069e1f-fb9c-4da1-a43c-cb1ac1911aca.png",
      clients: [
        { id: "mairie-lyon", name: "Mairie de Lyon", projects: 12 },
        { id: "college-st-martin", name: "Collège Saint-Martin", projects: 8 },
        { id: "centre-sportif-grand-parc", name: "Centre Sportif Grand Parc", projects: 5 }
      ]
    },
    {
      icon: Home,
      title: "Logements",
      description: "Collectifs ou individuels, sociaux ou privés",
      image: "/lovable-uploads/8ba30bb3-6932-4462-8412-e87b104c0c86.png",
      clients: [
        { id: "grand-lyon-habitat", name: "Grand Lyon Habitat", projects: 15 },
        { id: "bouygues-immobilier", name: "Bouygues Immobilier", projects: 10 },
        { id: "nexity", name: "Nexity", projects: 7 }
      ]
    },
    {
      icon: Building2,
      title: "Tertiaire & commercial",
      description: "Bureaux, commerces, bâtiments industriels",
      image: "/lovable-uploads/f5c1a072-ebac-4661-8522-00128f386355.png",
      clients: [
        { id: "vinci-immobilier", name: "Vinci Immobilier", projects: 9 },
        { id: "gecina", name: "Gecina", projects: 6 },
        { id: "unibail", name: "Unibail-Rodamco", projects: 4 }
      ]
    },
    {
      icon: Settings,
      title: "Équipements techniques",
      description: "Centres techniques, chaufferies, bâtiments spécifiques",
      image: "/lovable-uploads/2a20032b-b01a-4a63-95d2-65ab738dd028.png",
      clients: [
        { id: "veolia", name: "Veolia", projects: 11 },
        { id: "engie", name: "Engie Solutions", projects: 8 },
        { id: "edf", name: "EDF", projects: 6 }
      ]
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const navigateToClient = (clientId: string) => {
    navigate(`/client/${clientId}`);
  };

  const clients = [
    "Maîtres d'ouvrage publics : collectivités, établissements publics, bailleurs sociaux",
    "Maîtres d'ouvrage privés : promoteurs, investisseurs, copropriétés",
    "Architectes & bureaux d'études : en co-traitance ou en groupement",
    "Entreprises du bâtiment : appui pour les réponses aux appels d'offres"
  ];

  return (
    <section id="expertise" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Types de projets */}
          <div className="mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6 text-center tracking-tight">
              Types de projets traités
            </h2>
            <p className="text-base md:text-lg text-muted-foreground text-center mb-10 md:mb-16 max-w-3xl mx-auto leading-relaxed">
              Nous intervenons sur une grande variété de projets, en neuf comme en réhabilitation
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {projets.map((projet, index) => {
                const IconComponent = projet.icon;
                const isExpanded = expandedCards.includes(index);
                return (
                  <div key={index} className="relative">
                    <Card className="group overflow-hidden border-0 shadow-lg rounded-2xl bg-white/95 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={projet.image}
                          alt={projet.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/95 backdrop-blur-sm shadow-xl">
                          <IconComponent className="w-7 h-7 text-primary" />
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base md:text-lg font-bold tracking-tight">{projet.title}</CardTitle>
                        <CardDescription className="text-xs md:text-sm leading-relaxed">{projet.description}</CardDescription>
                      </CardHeader>
                      
                      {/* Expandable Sticker */}
                      <div className="relative">
                        <Collapsible open={isExpanded} onOpenChange={() => toggleCard(index)}>
                          <CollapsibleTrigger className="w-full">
                            <div className={`px-6 py-4 transition-all duration-300 cursor-pointer ${
                              isExpanded 
                                ? 'bg-gradient-to-r from-primary to-primary/80 text-white' 
                                : 'bg-gradient-to-r from-secondary to-secondary/80 text-primary hover:from-primary/10 hover:to-primary/5'
                            }`}>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Users className="w-4 h-4" />
                                  <span className="font-medium text-sm">
                                    {projet.clients.length} clients
                                  </span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                                  isExpanded ? 'rotate-180' : ''
                                }`} />
                              </div>
                            </div>
                          </CollapsibleTrigger>
                          
                          <CollapsibleContent className="bg-white border-t border-gray-100">
                            <div className="p-4 space-y-2">
                              {projet.clients.map((client, clientIndex) => (
                                <button
                                  key={clientIndex}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigateToClient(client.id);
                                  }}
                                  className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-primary/5 hover:border-primary/20 border border-transparent transition-all duration-200 group/client"
                                >
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <p className="font-medium text-sm text-gray-900 group-hover/client:text-primary">
                                        {client.name}
                                      </p>
                                      <p className="text-xs text-gray-500">
                                        {client.projects} projets réalisés
                                      </p>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover/client:opacity-100 transition-opacity duration-200"></div>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Secteurs d'intervention */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center tracking-tight">
              Secteurs d'intervention
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-primary text-white">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">Secteur Public</Badge>
                  <CardTitle className="text-lg md:text-xl">Marchés publics</CardTitle>
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
                  <CardTitle className="text-lg md:text-xl">Marchés privés</CardTitle>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center tracking-tight">
              Nos clients
            </h2>
            <div className="bg-section rounded-xl p-8">
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