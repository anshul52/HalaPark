"use client";

import { motion } from "framer-motion";

const audienceSegments = [
  "Residential Towers",
  "Commercial Properties",
  "Retail Centres",
  "Hospitals & Healthcare",
  "Corporate Campuses",
  "Hospitality & Hotels",
];

export default function BusinessWhoItsFor() {
  return (
    <section className="py-16 md:py-14 sm:py-12 bg-white">
      <div className="container mx-auto sm:px-0 px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[24px] border border-slate-200 bg-white px-6 py-8 md:px-8 md:py-10 shadow-sm"
        >
          <div className="grid items-start gap-6 md:grid-cols-[180px_1fr] md:gap-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Who It&apos;s For
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-[#2A3347]">
              {audienceSegments.map((segment, index) => (
                <span key={segment}>
                  {segment}
                  {index < audienceSegments.length - 1 && (
                    <span className="px-3 text-[#0088FF]">|</span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
