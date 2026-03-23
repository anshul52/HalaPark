import {
  FAQHeroSection,
  FAQCategorySection,
  FAQBottomCTA,
} from "@/components/faqs";

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-[#F7FAFD]">
      <FAQHeroSection />
      <FAQCategorySection />
      <FAQBottomCTA />
    </main>
  );
}
