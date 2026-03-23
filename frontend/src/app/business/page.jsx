import BusinessHero from "@/components/business/Hero";
import BusinessValueProps from "@/components/business/ValueProps";
import BusinessWhoItsFor from "@/components/business/WhoItsFor";
import BusinessHowToGetStarted from "@/components/business/HowToGetStarted";
import BusinessConnectWithUsCTA from "@/components/business/ConnectWithUsCTA";
import HalaParkInAction from "@/modules/home/sections/HalaParkInAction";

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-white">
      <BusinessHero />
      <BusinessValueProps />
      <BusinessWhoItsFor />
      <BusinessHowToGetStarted />
      <BusinessConnectWithUsCTA />
      <HalaParkInAction />
    </div>
  );
}
