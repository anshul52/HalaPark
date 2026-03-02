"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "10K+", label: "Parking Spots" },
  { value: "98%", label: "Uptime" },
  { value: "50+", label: "Cities" },
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image / Visual */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="w-full aspect-square bg-gradient-to-br from-slate-100 to-blue-100 rounded-3xl overflow-hidden relative">
            <img
              src="Rectangl5678uhb.png"
              alt=""
              className="object-cover h-full w-full"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className=""
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tighter mb-6">
            Why Choose HalaPark for Parking?
          </h2>
          <p className="text-[#50576B] text-base font-medium leading-relaxed mb-8">
            Public parking shouldn't feel like a daily operational challenge.
            With HalaPark, you can run parking as a structured, efficient
            business by reducing reliance on manual supervision, improving space
            utilization, minimizing revenue leakage, and gaining full visibility
            over daily operations. The result is a controlled, transparent, and
            scalable parking operation that generates predictable, trackable
            income and grows confidently alongside your needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
