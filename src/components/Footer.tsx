const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div>
            <img 
              src="/lovable-uploads/b75c32d4-96ef-4d93-8ef1-92b7993f7b01.png" 
              alt="EKTISS" 
              className="h-8 mb-4 brightness-0 invert"
            />
            <p className="text-white/80 text-sm">
              Économiste de la construction - Maîtrise des coûts et qualité technique 
              pour tous vos projets de construction.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Économie de la construction</li>
              <li>Assistance à Maîtrise d'Ouvrage</li>
              <li>Expertises & missions techniques</li>
              <li>Accompagnement des entreprises</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-white/80 text-sm">
              <p>Dekra Sefsafi</p>
              <p>contact@ektiss.fr</p>
              <p>France</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 EKTISS. Tous droits réservés.
          </p>
          <p className="text-white/60 text-sm mt-2 md:mt-0">
            Propulsé par <span className="text-secondary font-semibold">Beazy</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;