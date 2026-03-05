"use client";

import { useEffect, useRef, useState } from "react";
import { Brain, BrainCircuit, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    id: 1,
    icon: BrainCircuit,
    title: "Live Parking Intelligence",
    description:
      "Track occupancy and demand trends in real time to make faster, better parking decisions.",
    image: "/Frame78901171276870.png",
  },
  {
    id: 2,
    icon: Brain,
    title: "Automated Revenue Flow",
    description:
      "Reduce leakage with digital entry, automated billing, and centralized payment visibility.",
    image: "/iPhone-17-Pro.png",
  },
  {
    id: 3,
    icon: Sparkles,
    title: "Operator-Friendly Controls",
    description:
      "Run daily operations from one dashboard with role-based controls and instant status updates.",
    image: "/Frame9991171276918.png",
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
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 text-center sm:mb-10 lg:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0088FF] sm:text-sm sm:tracking-[0.18em]">
            Smart Features
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-bold leading-tight text-black sm:text-3xl md:text-4xl lg:text-5xl">
            Everything You Need To Operate Parking Better
          </h2>
        </div>

        <div className="grid items-center gap-6 md:gap-8 lg:grid-cols-2 lg:gap-6">
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
                  className={`w-[84vw] max-w-[340px] shrink-0 snap-center cursor-pointer rounded-2xl border p-4 text-left transition-all duration-300 sm:w-[360px] md:w-full md:max-w-none lg:max-w-md ${
                    isActive
                      ? "border-[#D7E7FF] bg-white shadow-lg"
                      : "border-transparent bg-[#F8FAFD]"
                  }`}
                  type="button"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`rounded-full p-2 sm:p-2.5 ${
                        isActive
                          ? "bg-[#0088FF] text-white"
                          : "bg-[#EAF3FF] text-[#0088FF]"
                      }`}
                    >
                      <Icon size={18} className="sm:h-5 sm:w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-black sm:text-lg">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#50576B]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-[#E7EEF8]">
                    {isActive && (
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#66B6FF] to-[#0088FF]"
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

          <div className="relative mx-auto w-full max-w-xl">
            <motion.div
              key={FEATURES[activeIndex].id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="overflow-hidden rounded-3xl border border-[#EEF3FB] bg-white shadow-xl"
            >
              <img
                src={FEATURES[activeIndex].image}
                alt={FEATURES[activeIndex].title}
                className="h-[240px] w-full object-cover sm:h-[320px] md:h-[380px] lg:h-[430px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
