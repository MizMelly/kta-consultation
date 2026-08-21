import AboutHero from "../components/AboutPage/AboutHero";
import OurStory from "../components/AboutPage/OurStory";
import VisionMission from "../components/AboutPage/VisionMission";
import CoreValues from "../components/AboutPage/CoreValues";
import ImpactSection from "../components/AboutPage/ImpactSection";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
        <VisionMission />
        <CoreValues />
        <ImpactSection />
        <Footer />
    </>
  );
}