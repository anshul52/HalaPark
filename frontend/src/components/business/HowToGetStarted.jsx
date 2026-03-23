"use client";

import { motion } from "framer-motion";

const steps = [
  "Book a free consultation",
  "We assess your site and design a custom setup",
  "Installation and onboarding",
  "Go live -- fully managed from day one",
];

export default function BusinessHowToGetStarted() {
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
          <div className="grid items-start gap-6 md:grid-cols-[220px_1fr] md:gap-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              How to Get Started
            </h2>

            <div>
              <div className="space-y-2 text-lg md:text-xl leading-relaxed text-[#2A3347]">
                {steps.map((step, index) => (
                  <p key={step}>
                    Step {index + 1}: {step}
                  </p>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-6 rounded-full bg-[#0088FF] px-7 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700"
              >
                Book a Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
