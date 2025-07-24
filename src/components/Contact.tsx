import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import dekraProfileWoman from "@/assets/dekra-profile-woman.jpg";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Contactez-nous
            </h2>
            <p className="text-xl text-muted-foreground">
              Parlons de votre projet ensemble
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Informations de contact */}
            <div className="space-y-6">
              <Card>
                <CardHeader className="text-center">
                  {/* Photo de profil */}
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20">
                      <img 
                        src={dekraProfileWoman}
                        alt="Dekra Sefsafi"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-primary">EKTISS</CardTitle>
                  <CardDescription>Dekra Sefsafi - Économiste de la construction</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>dekra@ektiss.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+33 X XX XX XX XX</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>France</span>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Notre engagement</h3>
                <p className="text-white/90">
                  Grâce à notre expertise, nous sécurisons les choix économiques, 
                  nous structurons les consultations, et nous assurons la cohérence budgétaire du projet.
                </p>
              </div>
            </div>

            {/* Formulaire de contact */}
            <Card>
              <CardHeader>
                <CardTitle>Demande de devis</CardTitle>
                <CardDescription>
                  Décrivez votre projet et nous vous recontacterons rapidement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Nom" />
                    <Input placeholder="Prénom" />
                  </div>
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Téléphone" />
                  <Input placeholder="Objet de votre demande" />
                  <Textarea 
                    placeholder="Décrivez votre projet..." 
                    className="min-h-[120px]" 
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Envoyer ma demande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;