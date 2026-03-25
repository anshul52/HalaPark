"use client";

import { useEffect, useState } from "react";

const AUTO_SLIDE_DELAY = 4500;

const slides = [
  {
    id: 1,
    cardImg:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    tag: "Smart Public Parking",
    title: "Parking That Thinks Ahead So You Don't Have To",
    subtitle: "Find it. Reserve it. Arrive stress-free.",
    description:
      "Real-time availability helps you lock in your spot before you even step out. No circling, no guessing, just smooth, predictable parking every time.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    cardImg:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    tag: "Private Parking Rental",
    title: "Empty Space. Untapped Income.",
    subtitle: "Turn idle parking into steady earnings.",
    description:
      "List your space in minutes and start earning effortlessly. Smart pricing and secure bookings ensure consistent returns.",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    cardImg:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    tag: "EV Charging",
    title: "Park Smart. Drive Electric. Repeat.",
    subtitle: "Charging that fits your routine.",
    description:
      "Locate and reserve charging-enabled parking in one go. Power up while you go about your day, no extra stops needed.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    cardImg:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    tag: "Valet On Demand",
    title: "Walk In Like You Own the Place",
    subtitle: "Premium parking without the wait.",
    description:
      "Request a valet instantly and skip the hassle of finding a spot. Arrive, hand over, and move on, effortless from start to finish.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 5,
    cardImg:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
    tag: "Barrier-Free Parking",
    title: "Blink and You're Already In",
    subtitle: "Seamless entry, zero friction.",
    description:
      "License plate recognition handles access automatically. No tickets, no delays, just drive in and out with ease.",
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 6,
    cardImg:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    tag: "Parking Management",
    title: "Less Chaos. More Control. More Revenue.",
    subtitle: "Everything managed from one place.",
    description:
      "Monitor, optimize, and scale operations across all locations. Smart insights and automation keep everything running at peak efficiency.",
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
            {/* <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/70">
              {currentSlide.tag}
            </p> */}

            <h1 className="mt-4 text-4xl font-semibold leading-[0.95] text-white sm:text-5xl md:text-6xl">
              {/* {currentSlide.title} */}
              {currentSlide.tag}
            </h1>

            {/* <p className="mt-5 max-w-lg text-lg font-medium leading-7 text-white/90 sm:text-xl">
              {currentSlide.subtitle}
            </p> */}

            <p className="mt-4 max-w-lg text-sm leading-7 text-white sm:text-base">
              {/* {currentSlide.description} */}
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
