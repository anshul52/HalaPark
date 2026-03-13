"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
        <div className="relative overflow-hidden rounded-[2rem] border border-sky-100 bg-[linear-gradient(180deg,#fafdff_0%,#eef7ff_55%,#f8fbff_100%)] p-5 shadow-[0_24px_54px_rgba(148,163,184,0.16)] sm:p-7 md:p-8">
          <div className="absolute -top-16 right-10 h-44 w-44 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute -bottom-20 left-8 h-52 w-52 rounded-full bg-cyan-100/70 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />

          <div className="relative grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-sky-200 bg-white/90 px-4 py-2 text-sm font-medium text-sky-700 shadow-[0_10px_24px_rgba(148,163,184,0.12)]">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-500 shadow-[0_0_18px_rgba(14,165,233,0.45)]" />
                <span>Global Momentum</span>
              </div>

              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-[3.1rem]">
                Smart Parking Is the Future and the UAE Is Leading It
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                The global smart parking market is growing rapidly, driven by
                urbanisation and digital-first mobility. HalaPark is at the
                forefront, bringing enterprise-grade technology to the
                UAE&apos;s fastest-growing properties and cities.
              </p>

              <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-2">
                <article className="rounded-[1.5rem] border border-white bg-white/85 p-4 shadow-[0_16px_35px_rgba(148,163,184,0.12)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                    Why Now
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Urbanisation and digital-first mobility are rapidly
                    reshaping parking demand across high-growth markets.
                  </p>
                </article>

                <article className="rounded-[1.5rem] border border-white bg-white/85 p-4 shadow-[0_16px_35px_rgba(148,163,184,0.12)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                    Why HalaPark
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Enterprise-grade technology built for properties and cities
                    moving toward connected parking operations.
                  </p>
                </article>
              </div>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Learn About Our Platform
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.75rem] border border-sky-100 bg-[radial-gradient(circle_at_50%_18%,rgba(186,230,253,0.95),rgba(255,255,255,0.96)_40%,rgba(240,249,255,0.96)_100%)] p-6 shadow-[0_20px_40px_rgba(148,163,184,0.14)]">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                      Momentum Map
                    </p>
                    <p className="mt-3 text-xl font-semibold leading-8 text-slate-900">
                      Market demand is moving toward connected, low-friction
                      parking ecosystems.
                    </p>
                  </div>

                  <GlobalMomentumGlobe />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((item, index) => (
                  <article
                    key={item.label}
                    className={`rounded-[1.5rem] border border-sky-100 p-5 shadow-[0_16px_32px_rgba(148,163,184,0.12)] sm:p-6 ${
                      index === 1
                        ? "bg-[linear-gradient(135deg,#dff4ff_0%,#f9fdff_100%)]"
                        : "bg-white/90"
                    }`}
                  >
                    <p className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                      {item.label}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
