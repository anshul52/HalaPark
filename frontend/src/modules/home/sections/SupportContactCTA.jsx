"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { VariableProximityText } from "@/components/ui";
import { ArrowRight, Mail, MessageCircleMore, PhoneCall } from "lucide-react";

const whatsappHref =
  "https://wa.me/97143782022?text=Hello%20HalaPark%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20parking%20solutions.";

const contactMethods = [
  {
    label: "Email",
    value: "info@halapark.com",
    href: "mailto:info@halapark.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+971 4 3782022",
    href: "tel:+97143782022",
    icon: PhoneCall,
  },
];

export default function SupportContactCTA() {
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);

  return (
    <section className="bg-white py-10 sm:py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#e9eef3] shadow-[0_28px_64px_rgba(15,23,42,0.16)]">
          <Image
            src="/banner1.png"
            alt="Temporary support section visual"
            fill
            sizes="(min-width: 1024px) 1200px, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(243,247,250,0.98)_0%,rgba(243,247,250,0.94)_34%,rgba(243,247,250,0.42)_56%,rgba(15,23,42,0.22)_100%)]" />
          <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.22),transparent_68%)] blur-3xl" />

          <div className="relative grid min-h-[520px] gap-6 p-4 sm:p-6 lg:grid-cols-[minmax(0,560px)_1fr] lg:gap-10 lg:p-7">
            <div className="flex items-start">
              <div
                ref={leftPanelRef}
                className="w-full max-w-[560px] rounded-[1.75rem] border border-white/80 bg-white/88 p-6 shadow-[0_30px_60px_rgba(15,23,42,0.12)] backdrop-blur sm:p-8 lg:mt-10"
              >
                <p className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">
                  <VariableProximityText
                    label="Get In Touch"
                    containerRef={leftPanelRef}
                    radius={95}
                    falloff="linear"
                    fromFontVariationSettings="'wght' 540, 'opsz' 14"
                    toFontVariationSettings="'wght' 900, 'opsz' 28"
                  />
                </p>

                <div className="relative mt-5 max-w-3xl">
                  <h2 className="text-3xl font-semibold cursor-pointer leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-[3.1rem]">
                    <VariableProximityText
                      label="Ready to Transform Your"
                      containerRef={leftPanelRef}
                      radius={120}
                      falloff="linear"
                      fromFontVariationSettings="'wght' 580, 'opsz' 26"
                      toFontVariationSettings="'wght' 980, 'opsz' 72"
                    />{" "}
                    <VariableProximityText
                      label="Parking Operations?"
                      containerRef={leftPanelRef}
                      radius={120}
                      falloff="linear"
                      fromFontVariationSettings="'wght' 620, 'opsz' 26"
                      toFontVariationSettings="'wght' 1000, 'opsz' 72"
                      className="text-[#0088FF]"
                      style={{ color: "#0088FF" }}
                    />
                  </h2>
                </div>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  <VariableProximityText
                    label="Whether you want to list a space, integrate our platform, or explore enterprise solutions, our team is ready to help."
                    containerRef={leftPanelRef}
                    radius={95}
                    falloff="linear"
                    fromFontVariationSettings="'wght' 420, 'opsz' 12"
                    toFontVariationSettings="'wght' 760, 'opsz' 22"
                  />
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2f66f3] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2457dc]"
                  >
                    <VariableProximityText
                      label="Contact Us"
                      containerRef={leftPanelRef}
                      radius={85}
                      falloff="linear"
                      fromFontVariationSettings="'wght' 600, 'opsz' 14"
                      toFontVariationSettings="'wght' 980, 'opsz' 30"
                    />
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-sky-200 hover:bg-sky-50"
                  >
                    <MessageCircleMore className="h-4 w-4" aria-hidden="true" />
                    <VariableProximityText
                      label="WhatsApp Us"
                      containerRef={leftPanelRef}
                      radius={85}
                      falloff="linear"
                      fromFontVariationSettings="'wght' 600, 'opsz' 14"
                      toFontVariationSettings="'wght' 980, 'opsz' 30"
                    />
                  </a>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {contactMethods.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/90 px-4 py-4 transition hover:border-sky-200 hover:bg-white"
                      >
                        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eaf4ff] text-[#0088FF]">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>

                        <span className="min-w-0">
                          <span className="block text-xs uppercase tracking-[0.22em] text-slate-400">
                            <VariableProximityText
                              label={item.label}
                              containerRef={leftPanelRef}
                              radius={80}
                              falloff="linear"
                              fromFontVariationSettings="'wght' 520, 'opsz' 10"
                              toFontVariationSettings="'wght' 860, 'opsz' 20"
                            />
                          </span>
                          <span className="mt-1 block break-all text-base font-medium text-slate-900">
                            <VariableProximityText
                              label={item.value}
                              containerRef={leftPanelRef}
                              radius={90}
                              falloff="linear"
                              preserveWords={false}
                              fromFontVariationSettings="'wght' 520, 'opsz' 12"
                              toFontVariationSettings="'wght' 900, 'opsz' 24"
                            />
                          </span>
                        </span>
                      </a>
                    );
                  })}
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-500">
                  <VariableProximityText
                    label="Email:"
                    containerRef={leftPanelRef}
                    radius={80}
                    falloff="linear"
                    fromFontVariationSettings="'wght' 500, 'opsz' 12"
                    toFontVariationSettings="'wght' 820, 'opsz' 22"
                  />{" "}
                  <a
                    href="mailto:info@halapark.com"
                    className="font-medium text-slate-900 transition hover:text-[#0088FF]"
                  >
                    <VariableProximityText
                      label="info@halapark.com"
                      containerRef={leftPanelRef}
                      radius={80}
                      falloff="linear"
                      preserveWords={false}
                      fromFontVariationSettings="'wght' 560, 'opsz' 12"
                      toFontVariationSettings="'wght' 940, 'opsz' 24"
                    />
                  </a>{" "}
                  <span className="px-2 text-slate-300">|</span>
                  <VariableProximityText
                    label="Phone:"
                    containerRef={leftPanelRef}
                    radius={80}
                    falloff="linear"
                    fromFontVariationSettings="'wght' 500, 'opsz' 12"
                    toFontVariationSettings="'wght' 820, 'opsz' 22"
                  />{" "}
                  <a
                    href="tel:+97143782022"
                    className="font-medium text-slate-900 transition hover:text-[#0088FF]"
                  >
                    <VariableProximityText
                      label="+971 4 3782022"
                      containerRef={leftPanelRef}
                      radius={80}
                      falloff="linear"
                      preserveWords={false}
                      fromFontVariationSettings="'wght' 560, 'opsz' 12"
                      toFontVariationSettings="'wght' 940, 'opsz' 24"
                    />
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-end justify-end">
              <div
                ref={rightPanelRef}
                className="w-full max-w-sm rounded-[1.75rem] border border-white/30 bg-slate-950/55 p-5 text-white shadow-[0_24px_60px_rgba(15,23,42,0.26)] backdrop-blur-md sm:p-6 lg:mb-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/80">
                      <VariableProximityText
                        label="Support"
                        containerRef={rightPanelRef}
                        radius={90}
                        falloff="linear"
                        fromFontVariationSettings="'wght' 520, 'opsz' 12"
                        toFontVariationSettings="'wght' 860, 'opsz' 24"
                      />
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      <VariableProximityText
                        label="Talk to the team directly"
                        containerRef={rightPanelRef}
                        radius={105}
                        falloff="linear"
                        fromFontVariationSettings="'wght' 580, 'opsz' 20"
                        toFontVariationSettings="'wght' 980, 'opsz' 48"
                      />
                    </p>
                  </div>

                  <span className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-cyan-100 sm:inline-flex">
                    <PhoneCall className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  {contactMethods.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-4 transition hover:border-cyan-300/35 hover:bg-white/14"
                      >
                        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-100">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>

                        <span className="min-w-0">
                          <span className="block text-xs uppercase tracking-[0.22em] text-slate-300">
                            <VariableProximityText
                              label={item.label}
                              containerRef={rightPanelRef}
                              radius={82}
                              falloff="linear"
                              fromFontVariationSettings="'wght' 520, 'opsz' 10"
                              toFontVariationSettings="'wght' 860, 'opsz' 20"
                            />
                          </span>
                          <span className="mt-1 block break-all text-base font-medium text-white sm:text-lg">
                            <VariableProximityText
                              label={item.value}
                              containerRef={rightPanelRef}
                              radius={90}
                              falloff="linear"
                              preserveWords={false}
                              fromFontVariationSettings="'wght' 560, 'opsz' 12"
                              toFontVariationSettings="'wght' 940, 'opsz' 24"
                            />
                          </span>
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
