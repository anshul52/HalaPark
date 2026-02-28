"use client";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Public Parking",
    desc: "Find and pay for public parking spaces",
    position: "top-left",
    icon: "🅿️",
    accent: "#3B82F6",
  },
  {
    title: "Private Parking",
    desc: "Access secure private parking spaces",
    position: "top-right",
    icon: "🔒",
    accent: "#8B5CF6",
  },
  {
    title: "EVC Parking",
    desc: "Park and charge your electric vehicle",
    position: "bottom-left",
    icon: "⚡",
    accent: "#22C55E",
  },
  {
    title: "Valet",
    desc: "Enjoy effortless parking with valet",
    position: "bottom-right",
    icon: "🚗",
    accent: "#F59E0B",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const phoneVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AllYouNeedSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-blue-50 pt-20 pb-16 overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-6 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Cards */}
        <div className="flex flex-col gap-6">
          {cards
            .filter((c) => c.position.includes("left"))
            .map((card) => (
              <ServiceCard key={card.title} card={card} />
            ))}
        </div>

        {/* Center Phone Mockup */}
        <motion.div
          className="relative flex justify-center"
          variants={phoneVariants}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative w-64 h-[520px] bg-gradient-to-br from-blue-500 to-blue-700 rounded-[3rem] shadow-2xl shadow-blue-300/50 p-3 border-4 border-white/20">
              {/* Phone Screen */}
              <div className="w-full h-full bg-white rounded-[2.4rem] overflow-hidden relative">
                {/* Status bar */}
                <div className="flex justify-between items-center px-4 pt-3 pb-1 text-[10px] font-semibold text-gray-800">
                  <span>7:24</span>
                  <div className="flex gap-1 items-center">
                    <span>▲</span>
                    <span>WiFi</span>
                    <span>🔋</span>
                  </div>
                </div>
                {/* App Header */}
                <div className="px-4 py-2 bg-white border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs">
                      ←
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-900 leading-tight">
                        198A/2, Adarsh Nagar, Ad...
                      </p>
                      <p className="text-[8px] text-gray-400">India</p>
                    </div>
                  </div>
                </div>
                {/* Filter Tabs */}
                <div className="flex gap-2 px-4 py-2">
                  {["Private", "Public", "Valet", "EVC"].map((tab, i) => (
                    <span
                      key={tab}
                      className={`px-2 py-1 rounded-full text-[8px] font-semibold ${
                        i === 0
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {tab}
                    </span>
                  ))}
                </div>
                {/* Map Area */}
                <div className="mx-3 rounded-2xl overflow-hidden h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative">
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-px opacity-30">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div key={i} className="bg-gray-400/20" />
                    ))}
                  </div>
                  {/* Map pins */}
                  <div className="absolute top-8 left-12 w-5 h-5 bg-blue-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                    <span className="text-[6px] text-white">P</span>
                  </div>
                  <div className="absolute top-16 right-10 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow" />
                  <div className="absolute bottom-10 left-20 w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow" />
                </div>
                {/* Bottom Nav */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-2 flex justify-around">
                  {["Parking", "Services", "Wallet", "Me"].map((nav) => (
                    <span
                      key={nav}
                      className="text-[8px] text-gray-400 font-medium"
                    >
                      {nav}
                    </span>
                  ))}
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full" />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Cards */}
        <div className="flex flex-col gap-6">
          {cards
            .filter((c) => c.position.includes("right"))
            .map((card) => (
              <ServiceCard key={card.title} card={card} />
            ))}
        </div>
      </motion.div>
    </section>
  );
}

function ServiceCard({ card }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
      className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 cursor-pointer group transition-shadow"
    >
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
          style={{ backgroundColor: card.accent + "20" }}
        >
          {card.icon}
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-sm leading-tight">
            {card.title}
          </h3>
          <p className="text-gray-500 text-xs mt-0.5 leading-snug">
            {card.desc}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1 text-blue-500 text-xs font-semibold group-hover:gap-2 transition-all">
        <span>Learn More</span>
        <span>→</span>
      </div>
      {/* Visual preview area */}
      <div
        className="mt-3 h-24 rounded-xl opacity-80 flex items-center justify-center"
        style={{ backgroundColor: card.accent + "10" }}
      >
        <span className="text-4xl">{card.icon}</span>
      </div>
    </motion.div>
  );
}
