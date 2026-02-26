"use client";

import * as React from "react";
import { motion } from "framer-motion";

import FlowConnections, {
  GradientOrb,
} from "@/components/common/Home/homecommon";

export default function EnterpriseSolutions() {
  const features = [
    {
      title: "Smart Public Parking",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
      description: "Real-time parking availability with smart detection",
      badge: "parking zone (304) detected",
    },
    {
      title: "Private Parking",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      description: "Reserved parking spaces for your business",
    },
    {
      title: "EV Parking",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      description: "Electric vehicle charging stations",
    },
    {
      title: "Valet On Demand",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
          />
        </svg>
      ),
      description: "Professional valet service when you need it",
    },
    {
      title: "Barrier-Free Parking",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      description: "Seamless entry and exit experience",
    },
    {
      title: "System Integrations",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      description: "Integrate with payment systems and more",
      showLogos: true,
    },
  ];

  const paymentLogos = [
    "Stripe",
    "Apple Pay",
    "Google Pay",
    "Visa",
    "Mastercard",
    "PayPal",
  ];

  return (
    <section
      id="what-we-do"
      className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white font-sans px-4 sm:px-6 lg:px-0"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center w-fit mx-auto gap-1.5 sm:gap-2 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
            <img
              src="/download(1).svg"
              alt="BLOG AND INSIGHTS"
              className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0"
            />
            <p className="text-xs sm:text-sm lg:text-[14px] text-black max-w-2xl mx-auto">
              SERVICES
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-semibold text-gray-900 mb-3 sm:mb-4 tracking-tight">
            Enterprise-Grade Parking <br className="hidden sm:block" />{" "}
            Solutions
          </h2>
          <p className="text-sm sm:text-base lg:text-[16px] font-normal text-[#828282] max-w-2xl mx-auto leading-5 px-4 sm:px-0">
            One connected platform powering smarter,{" "}
            <br className="hidden md:block" /> smoother parking experiences.
          </p>
        </div>

        <div className="relative w-full flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-11">
          {/* Central Location Pin */}

          <div className="absolute h-180 w-180 rotate-90 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex z-10 items-center justify-center">
            <FlowConnections
              strokeWidth={1}
              baseColor="#7DD3FC"
              flowStart="#4FACFE"
              flowEnd="#8B5CF6"
              speed={2.5}
              centerSize={34}
              flowLength={160}
              paths={[
                "M500 500 C500 260 260 260 140 180",
                "M500 500 C740 260 820 300 900 220",
                "M500 500 C260 520 220 640 140 760",
                "M500 500 C740 560 840 700 900 820",
                "M500 500 C500 160 500 80 500 40",
                "M500 500 C500 840 500 920 500 960",
              ]}
            />
          </div>
          <div className="text-center absolute h-37 w-37 hidden lg:flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-[38px]">
            <div className="absolute flex items-center justify-center -z-10 w-full h-full">
              <GradientOrb
                size={105}
                colorA="#4FACFE"
                colorB="#38E8FF"
                colorC="#8B5CF6"
                speed={24}
              />
            </div>
            <img
              src="/imgi_108_YpBkFvtbQ8rBkIMUJEEep7jKpM.png"
              alt="Smart Public Parking"
              className="w-7 h-8.1 object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          {/* Feature Grid 1*/}
          <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-18 z-20 relative">
            <div className="w-[calc(50%-0.25rem)] sm:w-[calc(50%-0.375rem)] md:w-[calc(50%-0.5rem)] lg:w-full lg:max-w-4xl mx-auto">
              <div className="bg-[#f3f4f6] rounded-lg border border-gray-200 p-3 sm:p-4 md:p-5 lg:p-7 px-2 sm:px-4 md:px-6 lg:px-10">
                {/* Map Image */}
                <div className="w-full h-20 sm:h-48 md:h-52 lg:h-56 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 md:mb-6">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://framerusercontent.com/assets/clShwemj51ZsM12xcORI3h6pdo0.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-[14px] sm:text-xl md:text-2xl font-medium tracking-tighter text-gray-900 mb-2">
                    Smart Public Parking
                  </h2>

                  <p className="text-gray-600 text-[12px] sm:text-base leading-4 sm:leading-5 tracking-normal max-w-xl">
                    Cities can manage public parking more efficiently while
                    reducing congestion and confusion for drivers.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[calc(50%-0.25rem)] sm:w-[calc(50%-0.375rem)] md:w-[calc(50%-0.5rem)] lg:w-full lg:max-w-4xl mx-auto">
              <div className="bg-[#f3f4f6] rounded-lg border border-gray-200 p-3 sm:p-4 md:p-5 lg:p-7 px-2 sm:px-4 md:px-6 lg:px-10">
                <div className="w-full h-20 sm:h-48 md:h-52 lg:h-56 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 md:mb-6">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://framerusercontent.com/assets/Ki9XP1dVVd8pAXpLyQHZWqYodIo.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>

                <div>
                  <h2 className="text-[14px] sm:text-xl md:text-2xl font-medium tracking-tighter text-gray-900 mb-2">
                    Private Parking
                  </h2>

                  <p className="text-gray-600 text-[12px] sm:text-base leading-4 sm:leading-5 tracking-normal max-w-xl">
                    Property owners get secure, flexible parking that fits the
                    needs of their buildings and tenants.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid 2*/}
          <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-18 justify-between relative z-20 w-full">
            <div className="w-[calc(50%-0.25rem)] sm:w-[calc(50%-0.375rem)] md:w-[calc(50%-0.5rem)] lg:w-[37.5%]">
              <div className="bg-[#f3f4f6] rounded-lg border border-gray-200 p-3 sm:p-4 md:p-5 lg:p-6">
                {/* Map Image */}
                <div className="w-full h-20 sm:h-48 md:h-52 lg:h-56 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 md:mb-6">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://framerusercontent.com/assets/4uhF4StMZIQQONmyLqow8n0Qw.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-[14px] sm:text-xl md:text-2xl font-medium tracking-tighter text-gray-900 mb-2">
                    EV Parking
                  </h2>

                  <p className="text-gray-600 text-[12px] sm:text-base leading-4 sm:leading-5 tracking-normal max-w-xl">
                    Drivers can charge their vehicles conveniently while parked,
                    without extra steps or hassle.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[calc(50%-0.25rem)] sm:w-[calc(50%-0.375rem)] md:w-[calc(50%-0.5rem)] lg:w-[37.5%]">
              <div className="bg-[#f3f4f6] rounded-lg border border-gray-200 p-3 sm:p-4 md:p-5 lg:p-6">
                <div className="w-full h-20 sm:h-48 md:h-52 lg:h-56 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 md:mb-6">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://framerusercontent.com/assets/0ynnxWZbG6G2zLs2krR8m3tUyQ.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>

                <div>
                  <h2 className="text-[14px] sm:text-xl md:text-2xl font-medium tracking-tighter text-gray-900 mb-2">
                    Valet On Demand
                  </h2>

                  <p className="text-gray-600 text-[12px] sm:text-base leading-4 sm:leading-5 tracking-normal max-w-xl">
                    Users can request valet service when needed, saving time and
                    making arrivals smoother.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid 3*/}
          <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-18 relative z-20">
            <div className="w-[calc(50%-0.25rem)] sm:w-[calc(50%-0.375rem)] md:w-[calc(50%-0.5rem)] lg:w-full lg:max-w-4xl mx-auto">
              <div className="bg-[#f3f4f6] rounded-lg border border-gray-200 p-3 sm:p-4 md:p-5 lg:p-7 px-2 sm:px-4 md:px-6 lg:px-10">
                {/* Map Image */}
                <div className="w-full h-20 sm:h-48 md:h-52 lg:h-56 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 md:mb-6">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://framerusercontent.com/assets/lYtF9CvnSQ87rJssRO4TBGeHuM.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-[14px] sm:text-xl md:text-2xl font-medium tracking-tighter text-gray-900 mb-2">
                    Barrier Free Parking
                  </h2>

                  <p className="text-gray-600 text-[12px] sm:text-base leading-4 sm:leading-5 tracking-normal max-w-xl">
                    Simplify how you manage connections with streamlined
                    relationship organization — effortlessly.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[calc(50%-0.25rem)] sm:w-[calc(50%-0.375rem)] md:w-[calc(50%-0.5rem)] lg:w-full lg:max-w-4xl mx-auto">
              <div className="bg-[#f3f4f6] rounded-lg border border-gray-200 p-3 sm:p-4 md:p-5 lg:p-7 px-2 sm:px-4 md:px-6 lg:px-10">
                <div className="w-full h-20 sm:h-48 md:h-52 lg:h-56 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 md:mb-6">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://framerusercontent.com/assets/clShwemj51ZsM12xcORI3h6pdo0.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>

                <div>
                  <h2 className="text-[14px] sm:text-xl md:text-2xl font-medium tracking-tighter text-gray-900 mb-2">
                    System Integrations
                  </h2>

                  <p className="text-gray-600 text-[12px] sm:text-base leading-4 sm:leading-5 tracking-normal max-w-xl">
                    All your parking systems work together in one place, making
                    daily operations easier to manage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
