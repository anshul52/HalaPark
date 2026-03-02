import AppHero from "@/components/app/Hero";
import AllYouNeedSection from "@/components/app/AllYouNeedSection";
import AboutFeatures from "@/components/About/Features";
import HalaParkInAction from "@/modules/home/sections/HalaParkInAction";
import Whychoosesection from "@/components/app/Whychoosesection";

export default function AppPage() {
  return (
    <div className="min-h-screen bg-white">
      <AppHero />
      <AllYouNeedSection />
      <Whychoosesection />
      <AboutFeatures pagetype={"service"} />
      <HalaParkInAction />
    </div>
  );
}
