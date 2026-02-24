"use client";

import { useEffect, useRef, useState } from "react";

export default function SayGoodbye() {
  const frustrations = [
    "Slow entry and exit",
    "Parking stress",
    "Unmanaged parking space",
    "Outdated systems",
    "manual payments",
    "Slow entry and exit",
    "Parking stress",
    "Unmanaged parking space",
    "Outdated systems",
    "manual payments",
    "Slow entry and exit",
    "Parking stress",
    "Unmanaged parking space",
    "Outdated systems",
    "manual payments",
  ];

  const [currentIndex, setCurrentIndex] = useState(4); // start at the blue "manual payments"
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % frustrations.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-16 md:py-18 font-sans w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_35%,black_65%,transparent)]
[-webkit-mask-image:linear-gradient(to_bottom,transparent,black_35%,black_65%,transparent)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative flex gap-5 w-full">
          {/* LEFT: primary heading */}
          <div className=" w-[43%] text-end flex items-center justify-end relative">
            <img
              src="/imgi_168_5qfWioz2YlGmZ4gVXknKz1yjY.svg"
              alt="Say goodbye to"
              className="w-40 h-30 object-cover absolute top-3 -right-7"
            />
            <img
              src="/imgi_167_8BXeBQObnslmzSi9htBC7WTLXM.svg"
              alt="Say goodbye to"
              className="w-7 h-8 object-cover absolute top-19 left-21"
            />
            <h2 className="relative text-4xl md:text-[52px] lg:text-[52px] font-semibold text-gray-900 leading-tight">
              <span className="inline-block align-middle">Say goodbye to</span>
            </h2>
          </div>

          {/* RIGHT: stack of frustrations */}
          <div
            ref={containerRef}
            className="relative w-[66%] h-56 md:h-48 lg:h-56 overflow-visible"
            aria-hidden
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full  h-full">
                {frustrations.map((text, index) => {
                  // compute vertical offset so the active word sits in center
                  const offset = (index - currentIndex) * 64; // px; gap between lines

                  const isActive = index === currentIndex;
                  const className = `absolute left-0 transition-all duration-700 ease-out will-change-transform text-left font-semibold`;

                  // styles applied inline to allow per-item translateY and subtle blur/opacity changes
                  const style = {
                    top: "36%",
                    transform: `translateY(${offset}px) scale(${
                      isActive ? 1 : 1
                    })`,
                    opacity: isActive ? 1 : 0.58,
                    color: isActive ? undefined : "#9CA3AF", // tailwind gray-400 fallback
                    filter: isActive ? "none" : "blur(0.2px)",
                  };

                  // size varies with viewport using responsive classes + inline fontSize fallback
                  const sizeClass =
                    "text-3xl md:text-[50px] lg:text-[50px] text-nowrap text-left";

                  return (
                    <div
                      key={index}
                      className={className + " " + sizeClass}
                      style={style}
                    >
                      <span
                        className={`px-2 ${
                          isActive
                            ? "text-[#1E92FE] text-left text-align-left"
                            : "text-black/70"
                        }`}
                        style={{
                          // ensure the active item uses the bold blue look from the image
                          color: isActive ? undefined : undefined,
                        }}
                      >
                        {text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* small extra CSS to smooth the transform on low-power devices */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; animation: none !important; }
        }
      `}</style>
    </section>
  );
}
