import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Calendar, Users, Building, FileText, Download } from "lucide-react";

const ClientDetail = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [clientId]);

  // Sample client data
  const clientsData = {
    "mairie-lyon": {
      name: "Mairie de Lyon",
      type: "Collectivité publique",
      location: "Lyon, France",
      projects: [
        {
          id: "ecole-primaire-montchat",
          title: "École Primaire Montchat",
          image: "/lovable-uploads/1f069e1f-fb9c-4da1-a43c-cb1ac1911aca.png",
          missions: ["DET (Direction d'Exécution des Travaux)", "OPC (Organisation Planification de Chantier)", "AOR (Assistance Opérations et Réceptions)"],
          projectType: "ÉCOLES PRIMAIRES",
          marketType: "Marchés publics",
          description: "Rénovation complète d'une école primaire de 8 classes avec création d'un restaurant scolaire moderne et d'espaces verts pédagogiques.",
          characteristics: {
            surface: "1,200 m²",
            cost: "2.8M€ HT",
            studies: "18 mois",
            realization: "École complète, restaurant scolaire, cours de récréation & 150 places de stationnement",
            capacity: "240 élèves"
          },
          partners: {
            architect: "ATELIER PLURIEL",
            contractor: "EIFFAGE CONSTRUCTION"
          },
          projectNumber: "LY-24156",
          family: "Bâtiments publics"
        }
      ]
    },
    "grand-lyon-habitat": {
      name: "Grand Lyon Habitat",
      type: "Bailleur social",
      location: "Métropole de Lyon",
      projects: [
        {
          id: "residence-confluence",
          title: "Résidence Confluence",
          image: "/lovable-uploads/8ba30bb3-6932-4462-8412-e87b104c0c86.png",
          missions: ["DET (Direction d'Exécution des Travaux)", "OPC (Organisation Planification de Chantier)", "AOR (Assistance Opérations et Réceptions)"],
          projectType: "LOGEMENTS SOCIAUX",
          marketType: "Marchés publics",
          description: "Construction de 85 logements sociaux dans le quartier Confluence avec espaces verts partagés et équipements collectifs modernes.",
          characteristics: {
            surface: "6,800 m²",
            cost: "12.5M€ HT",
            studies: "24 mois",
            realization: "85 logements, 2 commerces & 95 places de stationnement",
            capacity: "85 familles"
          },
          partners: {
            architect: "BRENAC & GONZALEZ",
            contractor: "VINCI CONSTRUCTION"
          },
          projectNumber: "GLH-24089",
          family: "Logements sociaux"
        }
      ]
    },
    "vinci-immobilier": {
      name: "Vinci Immobilier",
      type: "Promoteur immobilier",
      location: "France",
      projects: [
        {
          id: "immeuble-bureaux-part-dieu",
          title: "Immeuble de Bureaux Part-Dieu",
          image: "/lovable-uploads/f5c1a072-ebac-4661-8522-00128f386355.png",
          missions: ["DET (Direction d'Exécution des Travaux)", "OPC (Organisation Planification de Chantier)", "AOR (Assistance Opérations et Réceptions)"],
          projectType: "BUREAUX TERTIAIRES",
          marketType: "Marchés privés",
          description: "Construction d'un immeuble de bureaux de 12 étages avec certification HQE et espaces de coworking innovants au cœur du quartier d'affaires.",
          characteristics: {
            surface: "15,000 m²",
            cost: "35M€ HT",
            studies: "30 mois",
            realization: "12 étages, espaces de coworking, restaurant d'entreprise & 200 places de parking",
            capacity: "1,200 employés"
          },
          partners: {
            architect: "JEAN NOUVEL DESIGN",
            contractor: "BOUYGUES BÂTIMENT"
          },
          projectNumber: "VI-24201",
          family: "Tertiaire"
        }
      ]
    },
    "veolia": {
      name: "Veolia",
      type: "Entreprise de services",
      location: "France",
      projects: [
        {
          id: "centre-traitement-eau",
          title: "Centre de Traitement des Eaux",
          image: "/lovable-uploads/2a20032b-b01a-4a63-95d2-65ab738dd028.png",
          missions: ["DET (Direction d'Exécution des Travaux)", "OPC (Organisation Planification de Chantier)", "AOR (Assistance Opérations et Réceptions)"],
          projectType: "ÉQUIPEMENTS TECHNIQUES",
          marketType: "Marchés privés",
          description: "Modernisation complète d'un centre de traitement des eaux avec technologies de pointe et respect des normes environnementales les plus strictes.",
          characteristics: {
            surface: "3,500 m²",
            cost: "8.2M€ HT",
            studies: "20 mois",
            realization: "Station de traitement, laboratoire, bâtiments techniques & zone de stockage",
            capacity: "50,000 m³/jour"
          },
          partners: {
            architect: "AIA INGÉNIERIE",
            contractor: "SPIE INDUSTRY"
          },
          projectNumber: "VE-24178",
          family: "Équipements techniques"
        }
      ]
    }
  };

  const client = clientsData[clientId as keyof typeof clientsData];
  
  if (!client) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Client non trouvé</h1>
          <Button onClick={() => navigate('/')} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
        </div>
      </div>
    );
  }

  const project = client.projects[0]; // For simplicity, showing first project

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => navigate('/')} 
              variant="ghost" 
              size="sm"
              className="hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
            <div>
              <h1 className="text-xl font-bold text-primary">{client.name}</h1>
              <p className="text-sm text-muted-foreground">{client.type}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Project Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <Badge className="mb-2 bg-white/20 text-white border-white/30">
            {project.family}
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {client.location}
            </div>
            <div className="flex items-center gap-1">
              <FileText className="w-4 h-4" />
              {project.projectNumber}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Mission Info */}
          <div className="lg:col-span-1">
            <Card className="bg-primary text-white mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Missions réalisées par EKTISS :</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.missions.map((mission, index) => (
                    <li key={index} className="text-sm">• {mission}</li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Building className="w-6 h-6" />
                    </div>
                    <p className="font-medium">{project.projectType}</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/20">
                  <p className="text-center font-medium">{project.marketType}</p>
                </div>
              </CardContent>
            </Card>

            {/* Partners */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Partenaires
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-sm text-primary">Maître d'ouvrage</p>
                  <p className="text-sm">{client.name}</p>
                </div>
                <div>
                  <p className="font-medium text-sm text-primary">Architecte</p>
                  <p className="text-sm">{project.partners.architect}</p>
                </div>
                <div>
                  <p className="font-medium text-sm text-primary">Entreprise</p>
                  <p className="text-sm">{project.partners.contractor}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Project Details */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Projet :</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-primary mb-3">Caractéristiques :</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm"><span className="font-medium">Surfaces :</span> {project.characteristics.surface}</p>
                      <p className="text-sm"><span className="font-medium">Coût HT des travaux :</span> {project.characteristics.cost}</p>
                      <p className="text-sm"><span className="font-medium">Études :</span> {project.characteristics.studies}</p>
                    </div>
                    <div>
                      <p className="text-sm"><span className="font-medium">Réalisation :</span> {project.characteristics.realization}</p>
                      <p className="text-sm"><span className="font-medium">Capacité :</span> {project.characteristics.capacity}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="w-4 h-4 text-primary" />
                    <span><span className="font-medium">N° de l'affaire :</span> {project.projectNumber}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Building className="w-4 h-4 text-primary" />
                    <span><span className="font-medium">Famille du projet :</span> {project.family}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download Section */}
            <Card>
              <CardContent className="pt-6">
                <Button className="w-full md:w-auto" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger en PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetail;