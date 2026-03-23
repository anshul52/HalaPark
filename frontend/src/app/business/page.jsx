import BusinessHero from "@/components/business/Hero";
import BusinessValueProps from "@/components/business/ValueProps";
import BusinessWhoItsFor from "@/components/business/WhoItsFor";
import BusinessHowToGetStarted from "@/components/business/HowToGetStarted";
import BusinessFeatures from "@/components/business/Features";
import BusinessWhatWeDo from "@/components/business/WhatWeDo";
import BusinessCTA from "@/components/business/CTA";
import HalaParkInAction from "@/modules/home/sections/HalaParkInAction";
export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-white">
      <BusinessHero />
      <BusinessValueProps />
      <BusinessWhoItsFor />
      {/* <BusinessFeatures /> */}
      {/* <BusinessWhatWeDo /> */}
      <BusinessHowToGetStarted />
      {/* <BusinessCTA /> */}
      <HalaParkInAction />
    </div>
  );
}
