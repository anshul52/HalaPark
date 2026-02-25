"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["/banner1.png", "/banner2.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative py-16 md:py-24 lg:py-32 h-screen overflow-hidden font-sans">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 px-12 mx-auto h-full flex items-center">
        <div className="text-left mb-12 w-full flex flex-col items-left justify-center">
          <div className="flex items-center">
            <div className="flex items-center gap-6 px-3 py-3 rounded-full border border-white/40 backdrop-blur-md bg-white/10 shadow-xl">
              {/* Avatars */}
              <div className="flex -space-x-4">
                <img
                  src="RatingPill1.png"
                  alt=""
                  className="w-8 h-8 rounded-full object-cover"
                />
                <img
                  src="RatingPill2.png"
                  alt=""
                  className="w-8 h-8 rounded-full object-cover"
                />
                <img
                  src="RatingPill3.png"
                  alt=""
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>

              {/* Text */}
              <p className="text-white text-[14px] font-normal">
                <span className="font-semibold">4.9/5</span> from 4268 customers
              </p>

              {/* Star */}
              <div className="text-yellow-400 text-2xl mr-2">★</div>
            </div>
          </div>
          <h1 className="text-[54px] font-bold text-white mb-6 leading-tight">
            Innovating Smarter <br /> Parking Experiences
          </h1>
          <p className="text-white text-[18px] font-regular mb-6">
            We transform your parking into a fully automated, high-performing{" "}
            <br />
            asset with smart systems, valet on demand, and digital operations.
          </p>
          <h4 className="text-white text-[18px] font-bold mb-6">
            Smart Parking. Real Revenue. Zero Stress.
          </h4>
          <div>
            <button className="px-8 py-3 cursor-pointer text-white text-[16px] font-medium rounded-full bg-gradient-to-r from-[#000B18] via-[#001F3F] to-[#003A70] shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out">
              Book A Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
