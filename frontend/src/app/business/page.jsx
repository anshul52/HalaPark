import BusinessHero from "@/components/business/Hero";
import BusinessFeatures from "@/components/business/Features";
import BusinessWhatWeDo from "@/components/business/WhatWeDo";
import BusinessCTA from "@/components/business/CTA";
import HalaParkInAction from "@/modules/home/sections/HalaParkInAction";
export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-white">
      <BusinessHero />
      <BusinessFeatures />
      <BusinessWhatWeDo />
      <BusinessCTA />
      <HalaParkInAction />
    </div>
  );
}
