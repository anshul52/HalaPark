"use client";

import { useState, useEffect } from "react";

export default function SmartFeatures() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      title: "Ticketless Parking",
      description: "No more paper tickets - everything digital",
      image: "/imgi_167_8BXeBQObnslmzSi9htBC7WTLXM.svg",
      video: null, // Add video URL here if available
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      title: "24×7 Customer Support",
      description: "Round-the-clock assistance whenever you need help",
      image: "/imgi_165_eVPQSYBoVqwchmpN78sjyYtovY.svg",
      video: null, // Add video URL here if available
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      title: "Effortless Transactions",
      description: "Smooth and secure payment processing",
      image: "/imgi_36_5qfWioz2YlGmZ4gVXknKz1yjY.svg",
      video: null, // Add video URL here if available
      bgColor: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      title: "Rent Out Your Space",
      description: "Monetize your parking space easily",
      image: "/imgi_37_iDrlOYszhHrSmrgaFKo5G5kRV8.svg",
      video: null, // Add video URL here if available
      bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    },
    {
      title: "Smart Parking Solutions",
      description: "Advanced technology for seamless parking",
      image: "/imgi_167_8BXeBQObnslmzSi9htBC7WTLXM.svg",
      video: null, // Add video URL here if available
      bgColor: "bg-gradient-to-br from-teal-500 to-teal-600",
    },
    {
      title: "Real-Time Availability",
      description: "Know parking availability before you arrive",
      image: "/imgi_165_eVPQSYBoVqwchmpN78sjyYtovY.svg",
      video: null, // Add video URL here if available
      bgColor: "bg-gradient-to-br from-pink-500 to-pink-600",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(4); // lg: 4 panels
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2); // sm: 2 panels
      } else {
        setVisibleCount(1); // mobile: 1 panel
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const nextFeature = () => {
    const maxIndex = Math.max(0, features.length - visibleCount);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevFeature = () => {
    const maxIndex = Math.max(0, features.length - visibleCount);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-16 md:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-25">
          <div className="flex items-center justify-center w-fit mx-auto gap-2 rounded-full px-4 py-2">
            <img
              src="/download(1).svg"
              alt="BLOG AND INSIGHTS"
              className="w-5 h-5 text-white shrink-0"
            />
            <p className="text-[14px] text-black max-w-2xl mx-auto">Features</p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[56px] font-semibold text-gray-900 mb-4 tracking-tight">
            Smart Features for Modern <br /> Parking
          </h2>
        </div>

        {/* Top Section with Description and Navigation */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <p className="text-[16px] font-medium text-[#6D6D6D] max-w-2xl">
            Designed to support smooth operations and better user experiences.
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={prevFeature}
              className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-10 flex items-center justify-center"
              aria-label="Previous feature"
            >
              <svg
                className="w-5 h-5"
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
              onClick={nextFeature}
              className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-10 flex items-center justify-center"
              aria-label="Next feature"
            >
              <svg
                className="w-5 h-5"
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
        </div>

        <div className="relative">
          {/* Feature Carousel */}
          <div className="relative overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCount)
                }%)`,
              }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="shrink-0"
                  style={{
                    width: `calc(${100 / visibleCount}% - ${
                      ((visibleCount - 1) * 16) / visibleCount
                    }px)`,
                  }}
                >
                  <div
                    className={`${feature.bgColor} rounded-lg h-[400px] sm:h-[500px] md:h-[600px] relative overflow-hidden flex flex-col`}
                  >
                    {/* Video/Image Content */}
                    <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
                      {feature.video ? (
                        <video
                          src={feature.video}
                          className="w-full h-full object-contain rounded-lg"
                          controls
                          muted
                          loop
                          playsInline
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>
                    {/* Title at Bottom Left */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
