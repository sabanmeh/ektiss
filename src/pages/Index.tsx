import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="min-h-screen">
        <Services />
        <Expertise />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
