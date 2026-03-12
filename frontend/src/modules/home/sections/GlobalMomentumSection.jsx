"use client";

import Link from "next/link";
import GlobalMomentumGlobe from "./GlobalMomentumGlobe";

const stats = [
  {
    value: "24%",
    label: "Regional growth momentum",
  },
  {
    value: "$11B+",
    label: "Projected global smart parking market",
  },
  {
    value: "UAE",
    label: "Leading digital-first urban mobility adoption",
  },
];

export default function GlobalMomentumSection() {
  return (
    <section className="bg-white py-10 sm:py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-[#08162d] to-[#0e2d57] p-5 text-white shadow-[0_22px_54px_rgba(15,23,42,0.18)] sm:p-7 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-blue-100">
                <img
                  src="/download(1).svg"
                  alt="Global Momentum"
                  className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
                />
                <span>Global Momentum</span>
              </div>

              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-[3.1rem]">
                Smart Parking Is the Future and the UAE Is Leading It
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base">
                The global smart parking market is growing rapidly, driven by
                urbanisation and digital-first mobility. HalaPark is at the
                forefront, bringing enterprise-grade technology to the
                UAE&apos;s fastest-growing properties and cities.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
              >
                Learn About Our Platform
              </Link>
            </div>

            <div className="grid gap-4">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_50%_48%,rgba(56,189,248,0.16),rgba(9,18,41,0.04)_42%,transparent_76%)] p-6">
                <GlobalMomentumGlobe />
              </div>

              {stats.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur sm:p-6"
                >
                  <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-200 sm:text-base">
                    {item.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
