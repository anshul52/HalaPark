"use client";

import { useEffect, useRef, useState } from "react";
import { VariableProximityText } from "@/components/ui";

const AUTO_SLIDE_DELAY = 4500;

const slides = [
  {
    id: 1,
    cardImg:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    tag: "Smart Parking",
    title: "Parking operations built for modern city movement",
    description:
      "Dummy visual for now. This slide can showcase HalaPark's access, occupancy, and payment flow for residential and commercial sites.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    cardImg:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    tag: "Driver Experience",
    title: "Faster entry, easier booking, cleaner arrivals",
    description:
      "Use this panel to highlight seamless driver journeys, from reservation to gate access and digital payment confirmation.",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    cardImg:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    tag: "Enterprise Control",
    title: "One system for sites, teams, and reporting",
    description:
      "This placeholder slide can later feature enterprise dashboards, audit visibility, and real-time operational reporting.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    cardImg:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    tag: "Revenue Growth",
    title: "Turn idle parking inventory into active value",
    description:
      "Temporary imagery for monetization storytelling across towers, mixed-use assets, and high-demand visitor parking zones.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 5,
    cardImg:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
    tag: "AI Automation",
    title: "Automation that reduces friction at every touchpoint",
    description:
      "Replace this with product-specific visuals later for AI access control, validation logic, and automated parking workflows.",
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 6,
    cardImg:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    tag: "UAE Ready",
    title: "A scalable platform designed for regional deployment",
    description:
      "Dummy slide for now. Ideal for communicating rollout readiness across residential portfolios, enterprises, and public venues.",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80",
  },
];

const ArrowLeftIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, AUTO_SLIDE_DELAY);

    return () => window.clearInterval(intervalId);
  }, []);

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const currentSlide = slides[activeSlide];

  return (
    <section id="hero-section" className="bg-white p-5">
      <div className="relative overflow-hidden rounded-4xl bg-[#06111f] text-white">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                activeSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="relative flex min-h-[720px] w-full flex-col justify-center gap-10 px-4 py-12 sm:px-6 md:min-h-[760px] md:py-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div ref={contentRef} className="relative z-10 w-full max-w-xl">
            <h1 className="mt-6 text-4xl font-semibold leading-[0.95] text-white sm:text-5xl md:text-6xl">
              <VariableProximityText
                key={`title-${currentSlide.id}`}
                label={currentSlide.title}
                containerRef={contentRef}
                radius={140}
                falloff="linear"
                fromFontVariationSettings="'wght' 620, 'opsz' 36"
                toFontVariationSettings="'wght' 1000, 'opsz' 96"
              />
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white sm:text-base">
              <VariableProximityText
                key={`description-${currentSlide.id}`}
                label={currentSlide.description}
                containerRef={contentRef}
                radius={110}
                falloff="linear"
                fromFontVariationSettings="'wght' 420, 'opsz' 12"
                toFontVariationSettings="'wght' 760, 'opsz' 22"
              />
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${slide.id}`}
                  className={`h-2.5 rounded-full transition-all ${
                    activeSlide === index
                      ? "w-10 bg-[#00A3FF]"
                      : "w-2.5 bg-white/35 hover:bg-white/55"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 w-full max-w-[420px] lg:max-w-[430px]">
            <div className="absolute inset-x-4 bottom-4 rounded-[1rem] border border-white/10 bg-[#000000]/40 p-4 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-2">
              <div className="flex items-start justify-between gap-4">
                <div className="w-full">
                  <div className="overflow-hidden rounded-[0.5rem] border border-white/10">
                    <img
                      src={currentSlide.cardImg}
                      alt={`${currentSlide.title} preview`}
                      className="h-40 w-full object-cover sm:h-44"
                    />
                  </div>
                  <p className="mt-2 p-2 text-lg font-medium text-white sm:text-xl">
                    {currentSlide.title}
                  </p>
                  <p className="mt-2 max-w-md p-2 text-xs font-light leading-4 text-white/72">
                    {currentSlide.description}
                  </p>
                  <hr className="mx-2 mt-3 border-0 border-t border-white/12" />
                  <div className="mt-4 flex items-center justify-between p-1 px-2">
                    <h4 className="text-xs font-light leading-4 text-white/72">
                      Last Enties
                    </h4>
                    <div className="inline-flex overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                      <button
                        type="button"
                        onClick={showPreviousSlide}
                        aria-label="Show previous slide"
                        className="flex h-8 w-12 items-center justify-center text-white/75 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                      >
                        <ArrowLeftIcon />
                      </button>
                      <button
                        type="button"
                        onClick={showNextSlide}
                        aria-label="Show next slide"
                        className="flex h-8 w-12 items-center justify-center border-l border-white/10 text-white transition-colors duration-200 hover:bg-white/10"
                      >
                        <ArrowRightIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
