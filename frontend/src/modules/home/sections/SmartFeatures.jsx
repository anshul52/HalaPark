"use client";

import { useState, useEffect, useRef } from "react";

export default function SmartFeatures() {
  const features = [
    {
      title: "Ticketless Parking",
      video: "/Ticket.mp4",
      bgColor: "bg-transparent",
    },
    {
      title: "24×7 Customer Support",
      video: "/mobilemen.mp4",
      bgColor: "bg-transparent",
    },
    {
      title: "Effortless Transactions",
      video: "/Cards.mp4",
      bgColor: "bg-transparent",
    },
    {
      title: "Rent Out Your Parking",
      video: "/cvc.mp4",
      bgColor: "bg-transparent",
    },
    {
      title: "Valet On Demand",
      video: "/huhuhuhu.mp4",
      bgColor: "bg-transparent",
    },
    {
      title: "Seamless Experience",
      video: "/Ev.mp4",
      bgColor: "bg-transparent",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(4);
  const [slideWidth, setSlideWidth] = useState(0);
  const [index, setIndex] = useState(visibleCount);
  const [transition, setTransition] = useState(true);

  const trackRef = useRef(null);
  const cardRef = useRef(null);

  // responsive
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

  // clone slides
  const extended = [
    ...features.slice(-visibleCount),
    ...features,
    ...features.slice(0, visibleCount),
  ];

  // calculate px width
  useEffect(() => {
    const calc = () => {
      if (cardRef.current && trackRef.current) {
        const gap = parseFloat(
          window.getComputedStyle(trackRef.current).gap || 0
        );
        setSlideWidth(cardRef.current.offsetWidth + gap);
      }
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [visibleCount]);

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  // silent jump
  useEffect(() => {
    const total = features.length;
    if (index === total + visibleCount) {
      setTimeout(() => {
        setTransition(false);
        setIndex(visibleCount);
      }, 500);
    }
    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(total);
      }, 500);
    }
  }, [index]);

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  return (
    <section className="py-8 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div className="flex items-center justify-center w-fit mx-auto gap-1.5 sm:gap-2 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
            <img
              src="/download(1).svg"
              alt="BLOG AND INSIGHTS"
              className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0"
            />
            <p className="text-xs sm:text-sm lg:text-[14px] text-black max-w-2xl mx-auto">
              Features
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-semibold text-gray-900 mb-3 sm:mb-4 tracking-tight">
            Smart Features for Modern <br className="hidden sm:block" /> Parking
          </h2>
          <p className="text-sm sm:text-base lg:text-[16px] font-medium text-[#6D6D6D] max-w-2xl mx-auto px-4 sm:px-0">
            Designed to support smooth operations and better user experiences.
          </p>
        </div>
        <div className="flex justify-end gap-2 sm:gap-3 mb-3 sm:mb-4">
          <button
            onClick={prev}
            className="bg-blue-600 text-white p-1.5 sm:p-2 rounded-xl sm:rounded-2xl shadow-lg hover:bg-blue-700 transition-colors z-10 flex items-center justify-center"
            aria-label="Previous feature"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
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
            className="bg-blue-600 text-white p-1.5 sm:p-2 rounded-xl sm:rounded-2xl shadow-lg hover:bg-blue-700 transition-colors z-10 flex items-center justify-center"
            aria-label="Next feature"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
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

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-2 sm:gap-2.5 md:gap-3"
            style={{
              transform: `translateX(-${index * slideWidth}px)`,
              transition: transition ? "transform 0.5s ease" : "none",
            }}
          >
            {extended.map((f, i) => {
              // Calculate gap and extra width based on visibleCount
              const gap = visibleCount === 4 ? 12 : visibleCount === 2 ? 10 : 8;
              const extraWidth =
                visibleCount === 4 ? 50 : visibleCount === 2 ? 30 : 20;

              return (
                <div
                  key={i}
                  ref={i === visibleCount ? cardRef : null}
                  className="shrink-0"
                  style={{
                    width: `calc(${100 / visibleCount}% - ${
                      ((visibleCount - 1) * gap) / visibleCount
                    }px + ${extraWidth}px)`,
                  }}
                >
                  <div
                    className={`${f.bgColor} h-[600px] sm:h-[350px] md:h-[420px] lg:h-[530px] rounded-2xl sm:rounded-3xl overflow-hidden relative`}
                  >
                    <video
                      src={f.video}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    <div className="pointer-events-none absolute top-0 left-0 w-full h-20 sm:h-24 md:h-28 lg:h-32 bg-gradient-to-b from-black/60 to-transparent z-10" />

                    <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 sm:h-32 md:h-36 lg:h-40 bg-gradient-to-t from-black/70 to-transparent z-10" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-2.5 md:p-3 py-0 z-20 group">
                      <div className="relative h-[80px] sm:h-[90px] md:h-[100px] lg:h-[120px]">
                        {/* Title */}
                        <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-[1.6rem] font-bold transition-all duration-300 ease-out translate-y-4 sm:translate-y-5 md:translate-y-6 group-hover:-translate-y-1 sm:group-hover:-translate-y-1.5 md:group-hover:-translate-y-2">
                          {f.title}
                        </h3>

                        {/* Paragraph */}
                        <p className="text-white text-xs sm:text-sm md:text-[15px] lg:text-base mt-0 opacity-0 translate-y-8 sm:translate-y-9 md:translate-y-10 transition-all duration-300 ease-out delay-75 group-hover:opacity-100 group-hover:translate-y-0">
                          Get valet service whenever you need it, without
                          waiting or hassle.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
