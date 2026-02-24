import {
  ContactSection,
  FAQSection,
  AppPromotionSection,
} from "@/components/contact";
import HalaParkInAction from "@/modules/home/sections/HalaParkInAction";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactSection />
      <FAQSection />
      {/* <AppPromotionSection /> */}
      <HalaParkInAction />
    </div>
  );
}
