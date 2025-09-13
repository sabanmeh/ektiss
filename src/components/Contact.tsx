import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import dekraProfileWoman from "@/assets/dekra-profile-woman.jpg";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-section">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">
              Contactez-nous
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Parlons de votre projet ensemble
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="space-y-6">
              <Card className="border-0 shadow-xl rounded-2xl bg-white/95 backdrop-blur-sm">
                <CardHeader className="text-left">
                  {/* Photo de profil */}
                  <div className="flex justify-start mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20">
                      <img 
                        src="/lovable-uploads/0175ec22-384f-4345-8bff-3179185bb8bb.png"
                        alt="Dekra Sefsafi"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-lg md:text-xl text-primary">EKTISS</CardTitle>
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

              <div className="bg-primary text-white p-6 rounded-xl">
                <h3 className="text-base md:text-lg font-semibold mb-4">Notre engagement</h3>
                <p className="text-white/90">
                  Grâce à notre expertise, nous sécurisons les choix économiques, 
                  nous structurons les consultations, et nous assurons la cohérence budgétaire du projet.
                </p>
              </div>
            </div>

            {/* Formulaire de contact */}
            <Card className="border-0 shadow-xl rounded-2xl bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">Demande de devis</CardTitle>
                  <CardDescription className="text-sm md:text-base">
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
                  <Button className="w-full bg-primary hover:bg-primary/90 rounded-xl">
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