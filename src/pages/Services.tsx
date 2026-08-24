import ServicesHero from "../components/ServicesPage/ServicesHero";
import FoundationSection from "../components/ServicesPage/FoundationSection";
import PresenceServices from "../components/ServicesPage/PresenceServices";
import InnovationServices from "../components/ServicesPage/InnovationServices";
import ApproachWorks from "../components/ServicesPage/ApproachWorks";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      <ServicesHero />
      <FoundationSection />
      <PresenceServices />
      <InnovationServices />
      <ApproachWorks />
      <Footer />
    </>
  );
}