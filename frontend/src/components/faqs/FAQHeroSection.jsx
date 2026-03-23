export default function FAQHeroSection() {
  return (
    <section className="px-4 pb-5 pt-16 sm:px-6 sm:pb-6 sm:pt-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[28px] border border-[#D7E2F0] bg-[#EEF5FF] px-6 py-7 shadow-[0_18px_50px_rgba(41,88,145,0.08)] sm:px-8">
          <div className="inline-flex items-center rounded-full border border-[#C8DCF8] bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2457A6]">
            FAQ
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#14325C] sm:text-4xl lg:text-[2.8rem]">
            Frequently Asked Questions
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#35527A] sm:text-base">
            Everything you need to know about using HalaPark for drivers,
            property owners, and businesses.
          </p>
        </div>
      </div>
    </section>
  );
}

