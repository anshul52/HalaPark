"use client";
import * as React from "react";
import FlowConnections, {
  GradientOrb,
} from "@/components/common/Home/homecommon";

export default function EnterpriseSolutions() {
  const integrations = [
    { name: "Management", bgcolor: "bg-[#923BE2]", img: "/Group44.svg" },
    { name: "Maintenance", bgcolor: "bg-pink-600", img: "/Group77.png" },
    {
      name: "Technical Support",
      bgcolor: "bg-pink-600",
      img: "/Group11.svg",
    },
    { name: "Operations", bgcolor: "bg-[#4A44FE]", img: "/Group66.png" },
    { name: "Installation", bgcolor: "bg-pink-600", img: "/Group22.svg" },
    {
      name: "Equipment Supply",
      bgcolor: "bg-[#197ADD]",
      img: "/Group55.png",
    },
    {
      name: "Advisory Services",
      bgcolor: "bg-[#FA4162]",
      img: "/Group33.svg",
    },
  ];

  // Duplicate integrations for seamless loop
  const duplicatedIntegrations = [...integrations, ...integrations];

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
            Everything Your Parking <br className="hidden sm:block" /> Space
            Needs. In One Place.{" "}
          </h2>
          <p className="text-sm sm:text-base lg:text-[16px] font-normal text-[#828282] max-w-2xl mx-auto leading-5 px-4 sm:px-0">
            This is what parking looks like when{" "}
            <br className="hidden md:block" /> technology actually gets it
            right.
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
            <div className="w-[calc(50%-0.25rem)] sm:w-[calc(50%-0.375rem)] md:w-[calc(50%-0.5rem)] lg:w-full lg:max-w-4xl mx-auto transform transition-all duration-400 ease-in-out hover:scale-105 group">
              <div className="bg-[#f3f4f6]  rounded-lg border border-gray-200 p-3 sm:p-4 md:p-5 lg:p-7 px-2 sm:px-4 md:px-6 lg:px-10 transition-colors duration-400 ease-in-out hover:shadow-lg">
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
                  <h2 className="text-[14px] sm:text-xl md:text-2xl font-medium tracking-tighter text-gray-900 mb-2 transition-colors duration-400">
                    Smart Public Parking
                  </h2>

                  <p className="text-gray-600 text-[12px] sm:text-base leading-4 sm:leading-5 tracking-normal max-w-xl transition-colors duration-400">
                    Real-time availability and cashless payment, parking without
                    the friction.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[calc(50%-0.25rem)] sm:w-[calc(50%-0.375rem)] md:w-[calc(50%-0.5rem)] lg:w-full lg:max-w-4xl mx-auto transform transition-all duration-400 ease-in-out hover:scale-105 group">
              <div className="bg-[#f3f4f6] rounded-lg border border-gray-200 p-3 sm:p-4 md:p-5 lg:p-7 px-2 sm:px-4 md:px-6 lg:px-10 transition-colors duration-400 ease-in-out hover:shadow-lg">
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
                  <h2 className="text-[14px] sm:text-xl md:text-2xl font-medium tracking-tighter text-gray-900 mb-2 transition-colors duration-400">
                    Private Parking Rental
                  </h2>

                  <p className="text-gray-600 text-[12px] sm:text-base leading-4 sm:leading-5 tracking-normal max-w-xl transition-colors duration-400">
                    Property owners get secure, flexible parking that fits the
                    needs of their buildings and tenants.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid 2*/}
          <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-18 justify-between relative z-20 w-full">
            <div className="w-[calc(50%-0.25rem)] sm:w-[calc(50%-0.375rem)] md:w-[calc(50%-0.5rem)] lg:w-[37.5%] transform transition-all duration-400 ease-in-out hover:scale-105 group">
              <div className="bg-[#f3f4f6] rounded-lg border border-gray-200 p-3 sm:p-4 md:p-5 lg:p-6 hover:shadow-lg">
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
                    EV Charging
                  </h2>

                  <p className="text-gray-600 text-[12px] sm:text-base leading-4 sm:leading-5 tracking-normal max-w-xl">
                    Charge while you park. No extra apps, no separate accounts,
                    built right into the Hala Park experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[calc(50%-0.25rem)] sm:w-[calc(50%-0.375rem)] md:w-[calc(50%-0.5rem)] lg:w-[37.5%] transform transition-all duration-400 ease-in-out hover:scale-105 group">
              <div className="bg-[#f3f4f6] rounded-lg border border-gray-200 p-3 sm:p-4 md:p-5 lg:p-6 hover:shadow-lg">
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
                    Request a professional valet from your phone. Your vehicle
                    is collected, secured, and returned, on your time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid 3 */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-18 relative z-20">
            {/* Card 1 - Barrier Free Parking */}
            <div className="bg-[#f3f4f6] rounded-lg border border-gray-200 p-3 sm:p-4 md:p-5 lg:p-7 px-2 sm:px-4 md:px-6 lg:px-10 transform transition-all duration-400 ease-in-out hover:scale-105 group hover:shadow-lg">
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
              <div>
                <h2 className="text-[14px] sm:text-xl md:text-2xl font-medium tracking-tighter text-gray-900 mb-2">
                  Barrier-Free Parking
                </h2>
                <p className="text-gray-600 text-[12px] sm:text-base leading-4 sm:leading-5 tracking-normal max-w-xl">
                  Your licence plate is your ticket. Drive in, drive out, the
                  system handles everything in between.
                </p>
              </div>
            </div>

            {/* Card 2 - System Integrations */}
            <div className="bg-[#f3f4f6] rounded-lg border border-gray-200 p-3 sm:p-4 md:p-5 lg:p-7 px-2 sm:px-4 md:px-6 lg:px-10 transform transition-all duration-400 ease-in-out hover:scale-105 group hover:shadow-lg">
              <div className="w-full h-20 flex flex-col items-center justify-evenly sm:h-48 md:h-52 lg:h-56 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 md:mb-6">
                {/* ===============c11=============== */}
                <div className="w-full h-1/3 flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                  <style>{`
                    @keyframes scroll-left {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }

                    @keyframes scroll-right {
                      0% { transform: translateX(-50%); }
                      100% { transform: translateX(0); }
                    }

                    .scroll-left {
                      animation: scroll-left 30s linear infinite;
                    }

                    .scroll-right {
                      animation: scroll-right 30s linear infinite;
                    }
                  `}</style>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 scroll-right">
                    {duplicatedIntegrations.map((integration, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1.5 sm:gap-2 shrink-0 bg-white border border-white rounded-[2px] sm:rounded-xl px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 shadow-lg text-xs sm:text-sm font-medium text-white transition-transform"
                      >
                        <div
                          className={`w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 ${integration.bgcolor} rounded-[7px] flex items-center justify-center`}
                        >
                          <img
                            src={integration.img}
                            alt={integration.name}
                            className="sm:w-4 w-2 sm:h-4 h-2 object-cover"
                          />
                        </div>
                        <span className="text-black text-[8px] sm:text-sm font-medium whitespace-nowrap">
                          {integration.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* ======= c22 ============ */}
                <div
                  className="w-full h-1/3 flex items-center overflow-hidden
        [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]
        [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
                >
                  <style>{`
                    @keyframes scroll-left {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }

                    @keyframes scroll-right {
                      0% { transform: translateX(-50%); }
                      100% { transform: translateX(0); }
                    }

                    .scroll-left {
                      animation: scroll-left 30s linear infinite;
                    }

                    .scroll-right {
                      animation: scroll-right 30s linear infinite;
                    }
                  `}</style>
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 scroll-left">
                    {duplicatedIntegrations.map((integration, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1.5 sm:gap-2 shrink-0 bg-white border border-white rounded-lg sm:rounded-xl px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white transition-transform"
                      >
                        <div
                          className={`w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 ${integration.bgcolor} rounded-[7px] flex items-center justify-center`}
                        >
                          <img
                            src={integration.img}
                            alt={integration.name}
                            className="sm:w-4 w-2 sm:h-4 h-2 object-cover"
                          />
                        </div>
                        <span className="text-black text-[8px] sm:text-sm font-medium whitespace-nowrap">
                          {integration.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
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
    </section>
  );
}
