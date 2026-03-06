"use client";

import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";

const MAP = new DottedMap({ height: 100, grid: "diagonal" });
const SVG_MAP = MAP.getSVG({
  radius: 0.22,
  color: "#0F172A33",
  shape: "circle",
  backgroundColor: "#ffffff",
});

const UAE_SOURCE = { lat: 25.2048, lng: 55.2708, label: "Dubai, UAE" };

const ROUTES = [
  { start: UAE_SOURCE, end: { lat: 51.5072, lng: -0.1276, label: "London" } },
  { start: UAE_SOURCE, end: { lat: 40.7128, lng: -74.006, label: "New York" } },
  { start: UAE_SOURCE, end: { lat: 28.6139, lng: 77.209, label: "Delhi" } },
  {
    start: UAE_SOURCE,
    end: { lat: 1.3521, lng: 103.8198, label: "Singapore" },
  },
];

const projectPoint = (lat, lng) => {
  const x = (lng + 180) * (800 / 360);
  const y = (90 - lat) * (400 / 180);
  return { x, y };
};

const createCurvedPath = (start, end) => {
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - 50;
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
};

export default function WorldMapAnimationSection() {
  return (
    <section className="w-full bg-white px-6 pb-10 pt-14 md:pt-18">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0088FF]">
            Global Reach
          </p>
          <h2 className="mt-3 text-3xl font-bold text-black md:text-5xl">
            Connected Beyond Borders
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-[#50576B] md:text-base">
            HalaPark connects parking operations from the UAE to key cities
            worldwide with secure, real-time digital coordination.
          </p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-6xl rounded-3xl bg-white p-3">
          <div className="relative w-full overflow-hidden rounded-2xl">
            <Image
              src={`data:image/svg+xml;utf8,${encodeURIComponent(SVG_MAP)}`}
              className="h-full w-full select-none [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]"
              alt="world map"
              width={1056}
              height={495}
              draggable={false}
            />

            <svg
              viewBox="0 0 800 400"
              className="pointer-events-none absolute inset-0 h-full w-full select-none"
            >
              <defs>
                <linearGradient
                  id="halapark-path-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="5%" stopColor="#0088FF" stopOpacity="1" />
                  <stop offset="95%" stopColor="#0088FF" stopOpacity="1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>

              {ROUTES.map((route, i) => {
                const start = projectPoint(route.start.lat, route.start.lng);
                const end = projectPoint(route.end.lat, route.end.lng);
                return (
                  <g key={`route-${i}`}>
                    <motion.path
                      d={createCurvedPath(start, end)}
                      fill="none"
                      stroke="#0088FF"
                      strokeOpacity="0.2"
                      strokeWidth="2.2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 1.1,
                        delay: 0.3 * i,
                        ease: "easeOut",
                      }}
                    />
                    <motion.path
                      d={createCurvedPath(start, end)}
                      fill="none"
                      stroke="url(#halapark-path-gradient)"
                      strokeWidth="1.3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 1.1,
                        delay: 0.3 * i,
                        ease: "easeOut",
                      }}
                    />
                  </g>
                );
              })}

              {ROUTES.map((route, i) => (
                <g key={`points-${i}`}>
                  <PingDot lat={route.start.lat} lng={route.start.lng} />
                  <PingDot lat={route.end.lat} lng={route.end.lng} />
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function PingDot({ lat, lng }) {
  const p = projectPoint(lat, lng);
  return (
    <g>
      <circle cx={p.x} cy={p.y} r="2.1" fill="#0088FF" />
      <circle cx={p.x} cy={p.y} r="2.1" fill="#0088FF" opacity="0.5">
        <animate
          attributeName="r"
          from="2.1"
          to="8.2"
          dur="1.6s"
          begin="0s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          from="0.5"
          to="0"
          dur="1.6s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  );
}
