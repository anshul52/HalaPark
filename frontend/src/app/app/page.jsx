import AppHero from "@/components/app/Hero";
import AllYouNeedSection from "@/components/app/AllYouNeedSection";
import AboutFeatures from "@/components/About/Features";
import HalaParkInAction from "@/modules/home/sections/HalaParkInAction";
import Whychoosesection from "@/components/app/Whychoosesection";
import AppFeaturesSection from "@/components/app/AppFeaturesSection";
import WorldMapSection from "@/components/app/WorldMapSection";
import WorldMapAnimationSection from "@/components/app/WorldMapAnimationSection";

export default function AppPage() {
  return (
    <div className="min-h-screen bg-white">
      <AppHero />
      <AllYouNeedSection />
      {/* <WorldMapSection /> */}
      <WorldMapAnimationSection />
      <Whychoosesection />
      <AppFeaturesSection />
      <AboutFeatures pagetype={"service"} />
      <HalaParkInAction />
    </div>
  );
}
