"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { serviceFlows } from "./appContent";

const serviceShowcase = {
  public: {
    screen: "/Park.png",
    stepScreens: {
      Search: "/Map.png",
      Book: "/Park.png",
      Pay: "/Payment.png",
    },
    cta: "Start parking now",
    cardKicker: "Live inventory",
    cardTitle: "City Access Pass",
    cardCaption: "Fast entry",
    cardNote: "Live bays, smooth checkout, and reliable turnover.",
    cardGradient:
      "linear-gradient(135deg, #fbf5ea 0%, #f1e4d2 48%, #dcc4b0 100%)",
    cardFooter: "#8D7A77",
    halo: "bg-[#F6EEE2]",
  },
  private: {
    screen: "/Booking.png",
    stepScreens: {
      List: "/Booking.png",
      Manage: "/Home (1).png",
      Earn: "/recipt.png",
    },
    cta: "List your private bay",
    cardKicker: "Owner control",
    cardTitle: "Revenue Access Card",
    cardCaption: "Private rental",
    cardNote: "Availability, pricing, and payouts managed in one place.",
    cardGradient:
      "linear-gradient(135deg, #f6f1ec 0%, #e8ddd5 52%, #d1c0b4 100%)",
    cardFooter: "#7B6B67",
    halo: "bg-[#EEE6DF]",
  },
  valet: {
    screen: "/Find.png",
    stepScreens: {
      Request: "/Find.png",
      Track: "/Map.png",
      Retrieve: "/Done.png",
    },
    cta: "Request valet service",
    cardKicker: "Premium handoff",
    cardTitle: "Priority Drop-Off",
    cardCaption: "Valet flow",
    cardNote: "Collection, status tracking, and retrieval without friction.",
    cardGradient:
      "linear-gradient(135deg, #f7efe7 0%, #eddccc 48%, #d4bea8 100%)",
    cardFooter: "#8A7167",
    halo: "bg-[#F4E8DD]",
  },
  ev: {
    screen: "/Payment.png",
    stepScreens: {
      Locate: "/Map.png",
      Charge: "/Find.png",
      Pay: "/Payment.png",
    },
    cta: "Find EV-ready bays",
    cardKicker: "Charge ready",
    cardTitle: "Energy Lane Pass",
    cardCaption: "EV charging",
    cardNote: "Charging sessions and payments stay in one clean mobile flow.",
    cardGradient:
      "linear-gradient(135deg, #f8f3ea 0%, #ece2d7 50%, #d6c6b5 100%)",
    cardFooter: "#7D6F69",
    halo: "bg-[#F2EBE1]",
  },
};

function PhonePreview({ screen, label }) {
  return (
    <div className="relative scale-80 mx-auto w-[156px] sm:w-[236px] lg:w-[312px]">
      <div className="absolute inset-x-[14%] bottom-3 h-12 rounded-full bg-[#0F172A]/14 blur-[28px]" />

      <div className="relative aspect-[375/812] rounded-[44px] border-[6px] border-[#151515] bg-[#111111] p-[7px] shadow-[0_28px_60px_-28px_rgba(15,23,42,0.45)]">
        <div className="absolute left-1/2 top-[13px] z-20 h-[30px] w-[112px] -translate-x-1/2 rounded-full bg-black" />
        <div className="absolute right-[62px] top-[23px] z-20 h-2.5 w-2.5 rounded-full bg-[#171717]" />

        <div className="relative h-full overflow-hidden rounded-[36px] bg-[#EAF1F8]">
          <Image
            src={screen}
            alt={`${label} screen preview`}
            fill
            sizes="(min-width: 1024px) 312px, (min-width: 640px) 236px, 156px"
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default function AppServiceTabs() {
  const [activeTab, setActiveTab] = useState(serviceFlows[0].key);
  const [activeStep, setActiveStep] = useState(serviceFlows[0].steps[0]);
  const activeService =
    serviceFlows.find((service) => service.key === activeTab) ||
    serviceFlows[0];
  const activeShowcase =
    serviceShowcase[activeService.key] || serviceShowcase.public;
  const activeScreen =
    activeShowcase.stepScreens?.[activeStep] || activeShowcase.screen;

  useEffect(() => {
    setActiveStep(activeService.steps[0]);
  }, [activeService]);

  return (
    <section className="w-full bg-white mt-10">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <div
            role="tablist"
            aria-label="App services"
            className="grid min-w-max border-b border-[#D8DDE5] sm:min-w-0"
            style={{
              gridTemplateColumns: `repeat(${serviceFlows.length}, minmax(180px, 1fr))`,
            }}
          >
            {serviceFlows.map((service) => {
              const isActive = service.key === activeService.key;

              return (
                <button
                  key={service.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(service.key)}
                  className={`relative px-6 pb-6 pt-1 text-[15px] flex items-center text-center justify-center font-medium transition-colors duration-300 md:text-[17px] ${
                    isActive
                      ? "text-[#1F2940]"
                      : "text-[#D2D6DD] hover:text-[#7C8596]"
                  }`}
                >
                  <span className="whitespace-nowrap">{service.label}</span>
                  <span
                    className={`absolute bottom-[-1px] left-0 h-0.5 bg-[#0471D1]/70 transition-all duration-300 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center justify-evenly gap-10 text-center md:flex-row md:items-center md:text-left">
          <div className="w-full max-w-[360px] md:flex-1 md:pt-6 lg:max-w-[420px] lg:pt-10">
            <h3 className="text-[30px] font-medium tracking-[-0.04em] text-black sm:text-[34px] lg:text-[42px] lg:leading-[0.98]">
              {activeService.label}
            </h3>

            <p className="mt-5 text-[16px] leading-[1.7] text-[#667085] sm:text-[17px]">
              {activeService.description}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2 text-[15px] font-medium tracking-[0.06em] text-[#6B7280] md:justify-start">
              {activeService.steps.map((step) => (
                <button
                  key={step}
                  type="button"
                  onClick={() => setActiveStep(step)}
                  className={`rounded-full border px-3 py-1.5 transition-colors duration-200 ${
                    activeStep === step
                      ? "border-[#0471D1] bg-[#0471D1] text-white"
                      : "border-[#E7E7E7] bg-white text-[#6B7280]"
                  }`}
                >
                  {step}
                </button>
              ))}
            </div>
          </div>

          <div className="flex h-full w-full justify-center md:w-auto md:flex-none">
            <PhonePreview
              screen={activeScreen}
              label={`${activeService.label} ${activeStep}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
