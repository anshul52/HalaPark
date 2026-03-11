"use client";

import { useState, useEffect, useRef } from "react";

export default function SmartFeatures() {
  const features = [
    {
      title: "Ticketless Parking",
      description: "Enter and exit without stopping for a ticket, ever.",
      video: "/Ticket.mp4",
    },
    {
      title: "24×7 Customer Support",
      description: "Round-the-clock help whenever you need it, instantly.",
      video: "/mobilemen.mp4",
    },
    {
      title: "Effortless Transactions",
      description: "Pay in seconds with any method — tap, scan, or card.",
      video: "/Cards.mp4",
    },
    {
      title: "Rent Out Your Parking",
      description: "Earn passive income by listing your unused parking spot.",
      video: "/cvc.mp4",
    },
    {
      title: "Valet On Demand",
      description: "Get valet service whenever you need it, without the wait.",
      video: "/huhuhuhu.mp4",
    },
    {
      title: "Seamless Experience",
      description: "EV charging built right into your parking experience.",
      video: "/Ev.mp4",
    },
  ];

  const GAP_PX = 12; // single gap value in px
  const TRANSITION_MS = 500;

  const [visibleCount, setVisibleCount] = useState(1);
  const [slideWidth, setSlideWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  const trackRef = useRef(null);
  const containerRef = useRef(null);

  // 1 on mobile, 2 on sm, 4 on lg
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setVisibleCount(4);
      else if (window.innerWidth >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Reset index when visibleCount changes to avoid out-of-bounds
  useEffect(() => {
    setTransition(false);
    setIndex(visibleCount);
  }, [visibleCount]);

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  // Recalculate slide width whenever visibleCount or container width changes
  useEffect(() => {
    const calc = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const totalGap = (visibleCount - 1) * GAP_PX;
      setSlideWidth((containerWidth - totalGap) / visibleCount + GAP_PX);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [visibleCount]);

  // Clone slides for infinite loop
  const extended = [
    ...features.slice(-visibleCount),
    ...features,
    ...features.slice(0, visibleCount),
  ];

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  // Silent jump at boundaries
  useEffect(() => {
    const total = features.length;
    if (index === total + visibleCount) {
      setTimeout(() => {
        setTransition(false);
        setIndex(visibleCount);
      }, TRANSITION_MS);
    }
    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(total);
      }, TRANSITION_MS);
    }
  }, [index, visibleCount]);

  // Dot index (maps extended index back to real feature index)
  const activeDot =
    (((index - visibleCount) % features.length) + features.length) %
    features.length;

  return (
    <section className="py-5 sm:py-7 md:py-8 px-4 sm:px-5 lg:px-0 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-5 md:mb-6 bg-white">
          <div className="flex items-center justify-center w-fit mx-auto gap-1.5 rounded-full px-3 py-1">
            <img
              src="/download(1).svg"
              alt="Features icon"
              className="w-4 h-4 shrink-0"
            />
            <p className="text-xs sm:text-sm text-black">Features</p>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold bg-white text-gray-900 mb-2 sm:mb-3 tracking-tight leading-tight">
            Smart Features for Modern <br className="hidden sm:block" /> Parking
          </h2>
          <p className="text-sm sm:text-[15px] font-medium text-[#6D6D6D] max-w-xl mx-auto">
            Designed to support smooth operations and better experiences for
            customers and property owners alike.
          </p>
        </div>

        {/* Nav arrows */}
        <div className="flex justify-end gap-2 mb-2 sm:mb-3">
          <button
            onClick={prev}
            className="bg-blue-600 text-white p-1.5 rounded-lg shadow hover:bg-blue-700 transition-colors z-10 flex items-center justify-center"
            aria-label="Previous feature"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={next}
            className="bg-blue-600 text-white p-1.5 rounded-lg shadow hover:bg-blue-700 transition-colors z-10 flex items-center justify-center"
            aria-label="Next feature"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Carousel */}
        <div ref={containerRef} className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex"
            style={{
              gap: `${GAP_PX}px`,
              transform: `translateX(-${index * slideWidth}px)`,
              transition: transition
                ? `transform ${TRANSITION_MS}ms ease`
                : "none",
            }}
          >
            {extended.map((f, i) => (
              <div
                key={i}
                className="shrink-0"
                style={{
                  width:
                    slideWidth > 0
                      ? `${slideWidth - GAP_PX}px`
                      : `calc(${100 / visibleCount}% - ${
                          ((visibleCount - 1) * GAP_PX) / visibleCount
                        }px)`,
                }}
              >
                <div className="h-[330px] sm:h-[300px] md:h-[320px] lg:h-[370px] rounded-xl sm:rounded-2xl overflow-hidden relative">
                  <video
                    src={f.video}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  {/* Top gradient */}
                  <div className="pointer-events-none absolute top-0 left-0 w-full h-16 sm:h-20 lg:h-24 bg-gradient-to-b from-black/60 to-transparent z-10" />
                  {/* Bottom gradient */}
                  <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 sm:h-24 lg:h-28 bg-gradient-to-t from-black/70 to-transparent z-10" />

                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-3 z-20 group">
                    <div className="relative min-h-[64px] sm:min-h-[72px] lg:min-h-[84px]">
                      <h3 className="text-white text-lg sm:text-lg md:text-xl font-bold transition-all duration-300 ease-out translate-y-3 group-hover:-translate-y-1">
                        {f.title}
                      </h3>
                      <p className="text-white/90 text-xs sm:text-sm mt-1 opacity-0 translate-y-6 transition-all duration-300 ease-out delay-75 group-hover:opacity-100 group-hover:translate-y-0">
                        {f.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators — visible on mobile only */}
        <div className="flex justify-center gap-2 mt-3 sm:hidden">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i + visibleCount)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === activeDot ? "bg-blue-600 w-5 h-2" : "bg-gray-300 w-2 h-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
