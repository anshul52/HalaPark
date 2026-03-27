"use client";

import { useEffect, useState } from "react";

const AUTO_SLIDE_DELAY = 4500;

const slides = [
  {
    id: 1,
    cardImg: "/hf_20260327_065515_cd3808b8-d99d-4faa-817d-e3f772726da6.png",
    tag: "Smart Public Parking",
    title: "Parking That Thinks Ahead So You Don't Have To",
    subtitle: "Find it. Reserve it. Arrive stress-free.",
    description:
      "Real-time availability helps you lock in your spot before you even step out. No circling, no guessing, just smooth, predictable parking every time.",
    image: "/hf_20260327_061900_db12a62e-2867-44b6-83f0-ea7f1a5442ef.png",
  },
  {
    id: 2,
    cardImg: "/3ca506f760b463d2f3eb686fb08621c5.jpg.jpeg",
    tag: "Private Parking Rental",
    title: "Empty Space. Untapped Income.",
    subtitle: "Turn idle parking into steady earnings.",
    description:
      "List your space in minutes and start earning effortlessly. Smart pricing and secure bookings ensure consistent returns.",
    image: "/hf_20260327_062407_6dca49c0-90dd-468a-96f9-b36bba13ea8b.png",
  },
  {
    id: 3,
    cardImg: "/hf_20260327_071129_800d49da-6fb8-4b7e-a1ba-b32db4c31565.png",
    tag: "EV Charging",
    title: "Park Smart. Drive Electric. Repeat.",
    subtitle: "Charging that fits your routine.",
    description:
      "Locate and reserve charging-enabled parking in one go. Power up while you go about your day, no extra stops needed.",
    image: "/hf_20260327_060926_cbb82448-441c-42ee-9589-785e7acd7565.png",
  },
  {
    id: 4,
    cardImg: "/valet on demand short image.png",
    tag: "Valet On Demand",
    title: "Walk In Like You Own the Place",
    subtitle: "Premium parking without the wait.",
    description:
      "Request a valet instantly and skip the hassle of finding a spot. Arrive, hand over, and move on, effortless from start to finish.",
    image: "/hf_20260327_061010_f3bc038b-576f-4903-8896-5d998cc78527.png",
  },
  {
    id: 5,
    cardImg: "/hf_20260327_070648_996630bc-828e-4cd7-8cb1-f42c30332d86.png",
    tag: "Barrier-Free Parking",
    title: "Blink and You're Already In",
    subtitle: "Seamless entry, zero friction.",
    description:
      "License plate recognition handles access automatically. No tickets, no delays, just drive in and out with ease.",
    image: "/hf_20260327_064457_c75923ba-dc06-4c6e-9b63-fa181e94bcfa.png",
  },
  {
    id: 6,
    cardImg: "/37ea36b9e2f10ae7848280afbc3236af.jpg.jpeg",
    tag: "Parking Management",
    title: "Less Chaos. More Control. More Revenue.",
    subtitle: "Everything managed from one place.",
    description:
      "Monitor, optimize, and scale operations across all locations. Smart insights and automation keep everything running at peak efficiency.",
    image: "/hf_20260327_064316_9c7b1a28-dbfa-456e-b88a-0087cb567a61.png",
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
          <div className="relative z-10 w-full max-w-xl">
            <h1 className="mt-4 text-4xl font-semibold leading-[0.95] text-white sm:text-5xl md:text-6xl">
              {currentSlide.tag}
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-white sm:text-base">
              {currentSlide.title}
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
                    {currentSlide.subtitle}
                  </p>
                  {/* <p className="px-2 text-sm font-medium text-white/85">
                    {currentSlide.subtitle}
                  </p> */}
                  <p className="mt-2 max-w-md p-2 text-xs font-light leading-4 text-white/72">
                    {currentSlide.description}
                  </p>
                  <hr className="mx-2 mt-3 border-0 border-t border-white/12" />
                  <div className="mt-4 flex items-center justify-between p-1 px-2">
                    <h4 className="text-xs font-light leading-4 text-white/72">
                      Last Entries
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
