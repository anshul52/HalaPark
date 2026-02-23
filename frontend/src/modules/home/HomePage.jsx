import HeroSection from "./sections/HeroSection";
import EnterpriseSolutions from "./sections/EnterpriseSolutions";
import TechnologySection from "./sections/TechnologySection";
import TrustedUsers from "./sections/TrustedUsers";
import SmartIntegrations from "./sections/SmartIntegrations";
import SmartFeatures from "./sections/SmartFeatures";
import SayGoodbye from "./sections/SayGoodbye";
import Testimonials from "./sections/Testimonials";
import BlogSection from "./sections/BlogSection";
import HalaParkInAction from "./sections/HalaParkInAction";

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans">
      <HeroSection />
      <EnterpriseSolutions />
      <TechnologySection />
      <TrustedUsers />
      <SmartIntegrations />
      <SmartFeatures />
      <SayGoodbye />
      <Testimonials />
      <BlogSection />
      <HalaParkInAction />
    </div>
  );
}
