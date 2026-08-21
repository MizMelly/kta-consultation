import Hero from "../components/HomePage/Hero";
import AboutIntro from "../components/HomePage/AboutIntro";
import GrowthStages from "../components/HomePage/GrowthStages";
import WhyPartner from "../components/HomePage/WhyPartner";
import SuccessStories from "../components/HomePage/SuccessStories";
import FinalCTA from "../components/HomePage/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
        <AboutIntro />
        <GrowthStages />
        <WhyPartner />
        <SuccessStories />
        <FinalCTA />
        <Footer />
    </main>
  );
}