"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const focusItems = [
  {
    id: "01",
    title: "For Drivers",
    description: "Find, book, and pay for parking in seconds.",
  },
  {
    id: "02",
    title: "For Property Owners",
    description: "Turn empty bays into reliable monthly income.",
  },
  {
    id: "03",
    title: "For Enterprises",
    description: "Manage your entire parking operation from one platform.",
  },
];

export default function MajorFocusHighlight() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-10 sm:py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-[#f7fbff] via-white to-[#eef6ff] p-5 shadow-[0_18px_44px_rgba(15,23,42,0.06)] sm:p-7 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div
              className={`transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="flex w-full items-center">
                <div className="flex w-fit items-center justify-center gap-1.5 rounded-full border border-[#cfe6ff] bg-white px-3 py-1.5 sm:gap-2 sm:px-4 sm:py-2">
                  <img
                    src="/download(1).svg"
                    alt="Major Focus Highlight"
                    className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
                  />
                  <p className="text-xs text-black sm:text-sm lg:text-[14px]">
                    Major Focus Highlight
                  </p>
                </div>
              </div>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-[3.15rem]">
                Smart Parking Starts Here
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
                HalaPark is built around the three parking journeys that matter
                most: everyday drivers, property owners, and enterprise
                operators.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/app"
                  className="inline-flex items-center justify-center rounded-full bg-[#0088FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(0,136,255,0.24)] transition hover:bg-blue-700"
                >
                  I&apos;m a Parking User
                </Link>
                <Link
                  href="/business"
                  className="inline-flex items-center justify-center rounded-full border border-[#cfe6ff] bg-white px-6 py-3 text-sm font-semibold text-[#0088FF] transition hover:border-[#0088FF] hover:bg-blue-50"
                >
                  I&apos;m a Business Owner
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {focusItems.map((item, index) => (
                <article
                  key={item.id}
                  className={`rounded-[1.75rem] border border-slate-200 bg-white/90 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] backdrop-blur transition-all duration-700 ease-out sm:p-6 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 140}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eaf4ff] text-sm font-semibold text-[#0088FF]">
                      {item.id}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
