"use client";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Public Parking",
    desc: "Find and pay for public parking spaces",
    position: "top-left",
    icon: "🅿️",
    accent: "#3B82F6",
    img: "/iPhone-13-Pro-Front.png",
  },
  {
    title: "Private Parking",
    desc: "Access secure private parking spaces",
    position: "top-right",
    icon: "🔒",
    accent: "#8B5CF6",
    img: "/11982235dfghj5678bn.png",
  },
  {
    title: "EVC Parking",
    desc: "Park and charge your electric vehicle",
    position: "bottom-left",
    icon: "⚡",
    accent: "#22C55E",
    img: "/Screenshot02026-03-02p015948.png",
  },
  {
    title: "Valet",
    desc: "Enjoy effortless parking with valet",
    position: "bottom-right",
    icon: "🚗",
    accent: "#F59E0B",
    img: "/Screenshot2026-03-0215824.png",
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
    <section className="relative sm:pt-20 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center sm:mb-16 mb-12">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
              text-4xl 
              sm:text-5xl 
              lg:text-[64px] 
              max-md:text-[40px] 
              max-sm:text-[30px] 
              font-bold 
              text-slate-900 
              leading-15 
              max-md:leading-snug
              tracking-tight 
              my-6
            "
        >
          Seamless for Drivers. Profitable for Owners.
        </motion.h1>
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
              text-lg 
              max-md:text-base 
              max-sm:text-sm 
              text-slate-600 
              mb-0 
              text-center
              max-w-3xl
            "
        >
          Whether you're looking for a spot or listing one, HalaPark makes the
          entire process simple, secure, and fully in your control.
        </motion.p>
        <div className="flex gap-2 items-center justify-center mt-4">
          <img src={"/google-play.svg"} alt="Google play" />
          <img src={"/app-store.svg"} alt="App Store" />
        </div>
      </div>
      <motion.div
        className="max-w-7xl mx-auto px-6 flex sm:flex-row flex-col sm:gap-12 gap-6 items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Cards */}
        <div className="flex sm:flex-col sm:gap-12 gap-6 sm:w-[30%]">
          {cards
            .filter((c) => c.position.includes("left"))
            .map((card) => (
              <ServiceCard key={card.title} card={card} />
            ))}
        </div>

        {/* Center Phone Mockup */}
        <motion.div
          className="relative flex w-[40%] h-full items-center justify-center"
          variants={phoneVariants}
        >
          <motion.div>
            <div className="relative  bg-gradient-to-t from-[#5bb1e7] to-[#3d80fd] rounded-[1rem] shadow-2xl shadow-blue-300/50 p-4">
              <div className="bg-black rounded-[4rem]">
                <img src="/Groupoij10000043932.png" alt="" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Cards */}
        <div className="flex sm:flex-col sm:gap-12 gap-6 sm:w-[30%]">
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
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl  border border-[#E0E0E0] cursor-pointer group overflow-hidden"
    >
      <div className="flex items-start gap-3 mb-3 p-5 flex-col">
        <div>
          <h3 className="font-regular text-gray-900 sm:text-[18.8px] text-[14px] leading-tight">
            {card.title}
          </h3>
          <p className="text-[#717171] font-regular sm:text-[14.46px] text-[12px] mt-0.5 leading-snug">
            {card.desc}
          </p>
        </div>
        <div className="flex items-center gap-1 text-[#717171] font-regular sm:text-[14.46px] text-[12px] group-hover:gap-2 transition-all">
          <span>Learn More</span>
          <span>→</span>
        </div>
      </div>
      {/* Visual preview area */}
      <div className="mt-3 sm:h-80 h-25 rounded-xl flex items-center justify-center">
        <img
          src={card.img}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
    </motion.div>
  );
}
