"use client";

import { motion } from "framer-motion";

const valueProps = [
  {
    title: "Revenue Generation",
    description:
      "Stop leaving money on the table. Our platform maximises occupancy and automates payments 24/7.",
    theme: "light",
    ticketTilt: "-rotate-6",
    rounded: "bl",
  },
  {
    title: "Operational Control",
    description:
      "One dashboard for access, reporting, and management across all your locations.",
    theme: "dark",
    ticketTilt: "-rotate-1",
    rounded: "none",
  },
  {
    title: "Full Support",
    description:
      "From installation to daily ops, our team handles the technical side so you can focus on your business.",
    theme: "light",
    ticketTilt: "rotate-6",
    rounded: "tr",
  },
];

export default function BusinessValueProps() {
  return (
    <section className="py-20 max-md:py-16 max-sm:py-14 bg-white">
      <div className="container mx-auto sm:px-0 px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl"
        >
          {/* button */}
          <button
            type="button"
            className="mb-5 inline-flex items-center gap-3 rounded-full bg-[#0088FF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_rgba(0,136,255,0.22)] transition-transform hover:-translate-y-0.5 hover:bg-blue-700"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[#0088FF]">
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 5v14" />
                <path d="M5 12h14" />
              </svg>
            </span>
            <span>How It Works</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[#0088FF]">
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 5v14" />
                <path d="M5 12h14" />
              </svg>
            </span>
          </button>
          <h2 className="text-3xl max-sm:text-2xl font-bold text-slate-900">
            Why Businesses Choose HalaPark
          </h2>
          <p className="mt-4 text-lg max-sm:text-base leading-relaxed text-[#5E6578]">
            Built for modern parking operations, HalaPark helps businesses
            increase revenue, simplify management, and deliver a smoother
            experience for every driver.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3 lg:gap-4">
          {valueProps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={[
                "relative flex min-h-[500px] h-full flex-col overflow-hidden px-6 pb-6 pt-6",
                // Dynamic rounded classes
                item.rounded === "bl" && "rounded-bl-[55px]",
                item.rounded === "tr" && "rounded-tr-[55px]",
                item.rounded === "none" && "",
                item.theme === "dark"
                  ? "bg-[#0088FF] text-white"
                  : " bg-[#F8FBFF] text-slate-900",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div
                className={[
                  "pointer-events-none absolute inset-0",
                  item.theme === "dark"
                    ? "bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0))]"
                    : "bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_40%),linear-gradient(180deg,rgba(156,209,255,0.18),rgba(255,255,255,0.08))]",
                ].join(" ")}
              />

              <div className="relative z-10 flex h-full flex-col">
                <div
                  className={[
                    "mb-7 flex h-12 w-12 items-center justify-center rounded-full",
                    item.theme === "dark" ? "bg-white" : "bg-[#0088FF]",
                  ].join(" ")}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className={[
                      "h-5 w-5",
                      item.theme === "dark" ? "text-[#0088FF]" : "text-white",
                    ].join(" ")}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 7.25c0-1.8-1.2-3.25-2.75-3.25S6.5 5.45 6.5 7.25 7.7 10.5 9.25 10.5 12 9.05 12 7.25Z" />
                    <path d="M17.5 7.25c0-1.8-1.2-3.25-2.75-3.25S12 5.45 12 7.25s1.2 3.25 2.75 3.25 2.75-1.45 2.75-3.25Z" />
                    <path d="M12 16.75c0-1.8-1.2-3.25-2.75-3.25S6.5 14.95 6.5 16.75 7.7 20 9.25 20 12 18.55 12 16.75Z" />
                    <path d="M17.5 16.75c0-1.8-1.2-3.25-2.75-3.25S12 14.95 12 16.75 13.2 20 14.75 20s2.75-1.45 2.75-3.25Z" />
                  </svg>
                </div>

                <div className="max-w-[16rem]">
                  <h3
                    className={[
                      "text-[2rem] leading-tight max-sm:text-[1.7rem] font-semibold",
                      item.theme === "dark" ? "text-white" : "text-slate-900",
                    ].join(" ")}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={[
                      "mt-4 text-base max-sm:text-sm leading-7",
                      item.theme === "dark"
                        ? "text-white/72"
                        : "text-slate-700/80",
                    ].join(" ")}
                  >
                    {item.description}
                  </p>
                </div>

                <div className="mt-auto flex justify-center px-2 pt-10">
                  <div
                    className={[
                      "w-full max-w-[240px] rounded-[22px] bg-white p-4 text-left shadow-[0_22px_40px_rgba(15,23,42,0.18)]",
                      item.ticketTilt,
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0088FF]">
                          <div className="h-2.5 w-2.5 rounded-full bg-white" />
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold leading-none text-slate-900">
                            HalaPark Pass
                          </p>
                          <p className="mt-1 text-[9px] leading-none text-slate-400">
                            Smart parking access
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-300">01</span>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-[10px] text-slate-400">
                      <div>
                        <p>Use Case</p>
                        <p className="mt-1 text-[11px] font-medium text-slate-800">
                          {item.title}
                        </p>
                      </div>
                      <div>
                        <p>Status</p>
                        <p className="mt-1 text-[11px] font-medium text-slate-800">
                          Active
                        </p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="text-[10px] text-slate-400">Hours</p>
                      <p className="mt-1 text-[11px] font-medium text-slate-800">
                        24/7 Access
                      </p>
                    </div>

                    <div className="mt-5 flex h-14 items-end gap-1 overflow-hidden">
                      {[
                        32, 22, 42, 18, 38, 48, 28, 20, 44, 26, 36, 16, 40, 30,
                      ].map((height, barIndex) => (
                        <span
                          key={`${item.title}-${barIndex}`}
                          className="w-full rounded-t-[2px] bg-slate-700/80"
                          style={{ height }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
