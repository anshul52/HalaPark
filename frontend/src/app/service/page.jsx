import ServiceHero from "@/components/service/Hero";
import AllYouNeedSection from "@/components/service/AllYouNeedSection";
import AboutFeatures from "@/components/About/Features";
import HalaParkInAction from "@/modules/home/sections/HalaParkInAction";
import Whychoosesection from "@/components/service/Whychoosesection";

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero />
      <AllYouNeedSection />
      <Whychoosesection />
      <AboutFeatures pagetype={"service"} />
      <HalaParkInAction />
    </div>
  );
}
