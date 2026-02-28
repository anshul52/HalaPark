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
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image / Visual */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="w-full aspect-square bg-gradient-to-br from-slate-100 to-blue-100 rounded-3xl overflow-hidden relative shadow-xl">
            {/* Decorative grid */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="border border-blue-100/40" />
              ))}
            </div>
            {/* Center graphic */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-48 h-48 rounded-full border-4 border-dashed border-blue-300/50 absolute"
              />
              <div className="w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center">
                <span className="text-5xl">🅿️</span>
              </div>
            </div>
            {/* Stat badges */}
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: 0.4 + i * 0.15,
                  duration: 0.5,
                  ease: "backOut",
                }}
                className="absolute bg-white rounded-2xl shadow-lg px-4 py-2 text-center"
                style={{
                  top: i === 0 ? "15%" : i === 1 ? "50%" : "75%",
                  left: i === 0 ? "5%" : i === 1 ? "75%" : "10%",
                }}
              >
                <p className="text-xl font-black text-blue-600">{stat.value}</p>
                <p className="text-[10px] text-gray-500 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4 bg-blue-50 px-4 py-1.5 rounded-full"
          >
            Why HalaPark
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            Why Choose <span className="text-blue-600">HalaPark</span> for
            Parking?
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Public parking shouldn't feel like a daily operational challenge.
            With HalaPark, you can run parking as a structured, efficient
            business by reducing reliance on manual supervision, improving space
            utilization, minimizing revenue leakage, and gaining full visibility
            over daily operations.
          </p>
          <p className="text-gray-500 leading-relaxed mb-10">
            The result is a controlled, transparent, and scalable parking
            operation that generates predictable, trackable income and grows
            confidently alongside your needs.
          </p>

          <div className="flex flex-col gap-4">
            {[
              { icon: "📊", text: "Full operational visibility & reporting" },
              { icon: "💰", text: "Minimize revenue leakage automatically" },
              {
                icon: "📈",
                text: "Scalable infrastructure that grows with you",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.12 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-lg flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-gray-700 font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
