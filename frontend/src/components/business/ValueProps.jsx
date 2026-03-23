"use client";

import { motion } from "framer-motion";

const valueProps = [
  {
    title: "Revenue Generation",
    description:
      "Stop leaving money on the table. Our platform maximises occupancy and automates payments 24/7.",
  },
  {
    title: "Operational Control",
    description:
      "One dashboard for access, reporting, and management across all your locations.",
  },
  {
    title: "Full Support",
    description:
      "From installation to daily ops, our team handles the technical side so you can focus on your business.",
  },
];

export default function BusinessValueProps() {
  return (
    <section className="py-20 max-md:py-16 max-sm:py-14 bg-white">
      <div className="container mx-auto sm:px-0 px-4 max-w-7xl">
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {valueProps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-7 shadow-sm"
            >
              <div className="mb-5 h-1.5 w-14 rounded-full bg-[#0088FF]" />
              <h2 className="text-2xl max-sm:text-xl font-semibold text-slate-900 mb-4">
                {item.title}
              </h2>
              <p className="text-base max-sm:text-sm leading-relaxed text-[#5E6578]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
