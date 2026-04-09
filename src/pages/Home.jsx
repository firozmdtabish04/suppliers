import { useEffect } from "react";
import HeroSection from "../pages/HeroSection";
import ServicesSection from "../pages/ServicesSection";
import CTASection from "../pages/CTASection";
import PricList from "../pages/PricList";
import Contact from "../pages/Contact";
function Home() {
  const whatsappLink = "https://wa.me/919934261468";

  useEffect(() => {
    document.title = "Firoz Enterprises";
  }, []);

  return (
    <>
      <HeroSection whatsappLink={whatsappLink} />
      <ServicesSection />
      <CTASection />
      <PricList />
      <Contact />
    </>
  );
}

export default Home;
