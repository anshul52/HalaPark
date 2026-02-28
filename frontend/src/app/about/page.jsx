import AboutHero from "@/components/About/Hero";
import AboutFeatures from "@/components/About/Features";
import AboutMissionVision from "@/components/About/MissionVision";
import AboutPartners from "@/components/About/Partners";
import HalaParkInAction from "@/modules/home/sections/HalaParkInAction";
import FAQSection from "@/components/contact/FAQSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <AboutFeatures />
      <AboutMissionVision />
      <AboutPartners />
      <FAQSection />
      <HalaParkInAction />
    </div>
  );
}
