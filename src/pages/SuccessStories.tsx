import SuccessStoriesHero from "../components/SucessStoriesPage/SuccessStoriesHero";
import CaseStudyStats from "../components/SucessStoriesPage/CaseStudyStats";
import CaseStudyDetails from "../components/SucessStoriesPage/CaseStudyDetails";
import VeriPropertyCaseStudy from "../components/SucessStoriesPage/VeriPropertyCaseStudy";
import SuccessStoryCTA from "../components/SucessStoriesPage/SuccessStoryCTA";
import Footer from "../components/Footer";

export default function SuccessStories() {
  return (
    <>
      <SuccessStoriesHero />
      <CaseStudyStats />
      <CaseStudyDetails />
      <VeriPropertyCaseStudy />
      <SuccessStoryCTA />
      <Footer />
    </>
  );
}