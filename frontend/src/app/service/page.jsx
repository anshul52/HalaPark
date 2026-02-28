import ServiceHero from "@/components/service/Hero";
import AllYouNeedSection from "@/components/service/AllYouNeedSection";
import AboutFeatures from "@/components/About/Features";
import HalaParkInAction from "@/modules/home/sections/HalaParkInAction";

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero />
      <AllYouNeedSection />
      <AboutFeatures pagetype={"service"} />
      <HalaParkInAction />
    </div>
  );
}
