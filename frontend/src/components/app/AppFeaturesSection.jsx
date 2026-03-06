"use client";

import { useEffect, useRef, useState } from "react";
import { BellRing, CarFront, MapPinned } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    id: 1,
    icon: BellRing,
    title: "Real-Time Notifications",
    kicker: "Operational Clarity",
    description:
      "Stay informed at every step, booking confirmations, valet arrival, entry and exit alerts, payout notifications.",
    stat: "99.9% Event Visibility",
    image: "/hf_20260306_085105_5eb584ad-a1e8-47a0-b166-66532b804416.jpeg",
  },
  {
    id: 2,
    icon: CarFront,
    title: "Your Valet, One Tap Away.",
    kicker: "Instant Service Layer",
    description:
      "Request a professional valet from wherever you are. They come to you, park your vehicle securely, and bring it back the moment you need it. No waiting, no walking, no hassle.",
    stat: "< 3 Min Avg Dispatch",
    image: "/hf_20260306_081828_6093ba8d-44ed-42ff-ad4c-45ab187e95af.jpeg",
  },
  {
    id: 3,
    icon: MapPinned,
    title: "Know Exactly Where Everything Is, Always.",
    kicker: "Live Movement Intelligence",
    description:
      "Live tracking from the moment your valet is dispatched to the second your vehicle is returned. Every movement, every update, right there on your screen in real time.",
    stat: "End-to-End Live Tracking",
    image: "/hf_20260305_084408_f3cc7116-e6ad-4da9-ac1f-2390b4dcb9ab (1).jpeg",
  },
];

export default function AppFeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const featureRefs = useRef([]);
  const listRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (progress < 100) return;
    const id = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURES.length);
      setProgress(0);
    }, 150);

    return () => clearTimeout(id);
  }, [progress]);

  useEffect(() => {
    const current = featureRefs.current[activeIndex];
    const list = listRef.current;
    if (!current || !list) return;

    const listRect = list.getBoundingClientRect();
    const itemRect = current.getBoundingClientRect();
    list.scrollTo({
      left: current.offsetLeft - (listRect.width - itemRect.width) / 2,
      behavior: "smooth",
    });
  }, [activeIndex]);

  const handleSelect = (index) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <section className="relative overflow-hidden bg-[#F7FAFF] px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(0,136,255,0.16)_0%,transparent_42%),radial-gradient(circle_at_85%_15%,rgba(56,189,248,0.12)_0%,transparent_36%),radial-gradient(circle_at_70%_85%,rgba(14,165,233,0.1)_0%,transparent_40%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B8DAFF] bg-white/80 px-4 py-2 shadow-[0_8px_30px_rgba(15,23,42,0.07)] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#0088FF]" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0088FF] sm:text-sm">
              Smart Features
            </p>
          </div>
          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-bold leading-tight text-[#08142A] sm:text-4xl md:text-5xl lg:text-[58px]">
            One App. Every Parking Problem. Permanently Solved.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#4E5B73] md:text-base">
            Stop switching between apps. Stop chasing payments. Stop stressing
            about parking. 99 Problems and 1 Solution, HalaPark.
          </p>
        </div>

        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
          <div
            ref={listRef}
            className="flex snap-x snap-mandatory flex-row gap-4 overflow-x-auto pb-2 md:flex-col md:gap-5 md:overflow-visible md:pb-0 lg:gap-6"
          >
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  key={feature.id}
                  ref={(el) => {
                    featureRefs.current[index] = el;
                  }}
                  onClick={() => handleSelect(index)}
                  className={`group relative w-[84vw] max-w-[340px] shrink-0 snap-center cursor-pointer overflow-hidden rounded-3xl border p-5 text-left transition-all duration-300 sm:w-[360px] md:w-full md:max-w-none lg:max-w-none ${
                    isActive
                      ? "border-[#C9E4FF] bg-white/95 shadow-[0_24px_65px_rgba(15,23,42,0.14)]"
                      : "border-[#E4ECF8] bg-white/80 hover:border-[#D4E4F8] hover:bg-white"
                  }`}
                  type="button"
                >
                  <div
                    className={`pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full blur-2xl transition-opacity duration-300 ${
                      isActive ? "bg-[#8DD6FF]/45 opacity-100" : "opacity-0"
                    }`}
                  />
                  <div className="relative flex items-start gap-3 sm:gap-4">
                    <div
                      className={`rounded-2xl border p-2.5 sm:p-3 ${
                        isActive
                          ? "border-[#0088FF]/25 bg-gradient-to-br from-[#0088FF] to-[#31B4FF] text-white shadow-[0_10px_24px_rgba(0,136,255,0.38)]"
                          : "border-[#D8E9FF] bg-[#EEF5FF] text-[#0088FF]"
                      }`}
                    >
                      <Icon
                        size={18}
                        className="sm:h-5 sm:w-5"
                        strokeWidth={2.2}
                      />
                    </div>
                    <div className="flex-1">
                      {/* <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#4E8FD3] sm:text-xs">
                        {feature.kicker}
                      </p> */}
                      <h3 className="mt-1 text-base font-semibold text-[#08142A] sm:text-xl">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#4F5D75] sm:text-[15px]">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-[#E7EEF8]">
                    {isActive && (
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[#66B6FF] via-[#1AA5FF] to-[#0088FF]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.08, ease: "linear" }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative mx-auto w-full max-w-xl h-full">
            <motion.div
              key={FEATURES[activeIndex].id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="overflow-hidden flex items-center justify-center rounded-[30px] h-full"
            >
              <img
                src={FEATURES[activeIndex].image}
                alt={FEATURES[activeIndex].title}
                className="h-[250px] w-auto rounded-[40px] overflow-hidden  object-contain p-2 sm:h-[330px] sm:p-3 md:h-[390px] lg:h-[540px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
