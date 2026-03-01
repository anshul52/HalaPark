"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function FeatureList({ heading, items, highlighted = false }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5 }}
      className={`flex-1 rounded-2xl p-8 text-left transition-all duration-300 ${
        highlighted
          ? "bg-white border border-blue-200"
          : ""
      }`}
    >
      <h2 className="text-2xl font-semibold text-slate-900 mb-8">
        {heading}
      </h2>

      <motion.div
        variants={containerVariants}
        className="space-y-8"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start gap-4"
          >
            <img
              src="/check.svg"
              alt="tick"
              className="mt-1 w-5 h-5"
            />

            <div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-800 text-base leading-relaxed max-w-md">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function FeatureSplit({ left, right }) {
  return (
    <section className="w-full flex justify-center px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="
          w-full 
          max-w-6xl 
          rounded-3xl 
          border
          border-[#e3e3e3]
          bg-gradient-to-r 
          from-[#FFFFFF]
          to-[#91C8FB]
          p-2
        "
      >
        <div className="flex flex-col md:flex-row gap-8">
          <FeatureList
            heading={left.heading}
            items={left.items}
          />

          <FeatureList
            heading={right.heading}
            items={right.items}
            highlighted
          />
        </div>
      </motion.div>
    </section>
  );
}