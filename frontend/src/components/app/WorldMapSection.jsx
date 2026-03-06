"use client";

import { motion } from "framer-motion";

const UAE_POLYGON = [
  [51.579519, 24.245497],
  [51.757441, 24.294073],
  [51.794389, 24.019826],
  [52.577081, 24.177439],
  [53.404007, 24.151317],
  [54.008001, 24.121758],
  [54.693024, 24.797892],
  [55.439025, 25.439145],
  [56.070821, 26.055464],
  [56.261042, 25.714606],
  [56.396847, 24.924732],
  [55.886233, 24.920831],
  [55.804119, 24.269604],
  [55.981214, 24.130543],
  [55.528632, 23.933604],
  [55.525841, 23.524869],
  [55.234489, 23.110993],
  [55.208341, 22.70833],
  [55.006803, 22.496948],
  [52.000733, 23.001154],
  [51.617708, 24.014219],
  [51.579519, 24.245497],
];

const CITY_POINTS = {
  AbuDhabi: { lat: 24.4539, lng: 54.3773, label: "Abu Dhabi" },
  Dubai: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
  Sharjah: { lat: 25.3463, lng: 55.4209, label: "Sharjah" },
  Ajman: { lat: 25.4052, lng: 55.5136, label: "Ajman" },
  RasAlKhaimah: { lat: 25.7895, lng: 55.9432, label: "Ras Al Khaimah" },
  Fujairah: { lat: 25.1288, lng: 56.3265, label: "Fujairah" },
};

const CONNECTIONS = [
  { start: CITY_POINTS.AbuDhabi, end: CITY_POINTS.Dubai },
  { start: CITY_POINTS.Dubai, end: CITY_POINTS.Sharjah },
  { start: CITY_POINTS.Sharjah, end: CITY_POINTS.Ajman },
  { start: CITY_POINTS.Dubai, end: CITY_POINTS.RasAlKhaimah },
  { start: CITY_POINTS.Dubai, end: CITY_POINTS.Fujairah },
  { start: CITY_POINTS.AbuDhabi, end: CITY_POINTS.Fujairah },
];

const VIEWBOX = { width: 900, height: 500, pad: 34 };
const BOUNDS = {
  minLng: Math.min(...UAE_POLYGON.map((d) => d[0])),
  maxLng: Math.max(...UAE_POLYGON.map((d) => d[0])),
  minLat: Math.min(...UAE_POLYGON.map((d) => d[1])),
  maxLat: Math.max(...UAE_POLYGON.map((d) => d[1])),
};

const projectPoint = (lat, lng) => {
  const x =
    VIEWBOX.pad +
    ((lng - BOUNDS.minLng) / (BOUNDS.maxLng - BOUNDS.minLng)) *
      (VIEWBOX.width - VIEWBOX.pad * 2);
  const y =
    VIEWBOX.pad +
    ((BOUNDS.maxLat - lat) / (BOUNDS.maxLat - BOUNDS.minLat)) *
      (VIEWBOX.height - VIEWBOX.pad * 2);
  return { x, y };
};

const polygonPath = `M ${UAE_POLYGON.map(([lng, lat]) => {
  const p = projectPoint(lat, lng);
  return `${p.x} ${p.y}`;
}).join(" L ")} Z`;

const curvedPath = (start, end) => {
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - 38;
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
};

function UAEMap() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[30px]   p-3">
      {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.14),transparent_38%),radial-gradient(circle_at_90%_18%,rgba(59,130,246,0.08),transparent_32%)]" />
      <div className="pointer-events-none absolute -left-10 top-10 h-44 w-44 rounded-full bg-[#60A5FA]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-8 bottom-8 h-48 w-48 rounded-full bg-[#0EA5E9]/16 blur-3xl" /> */}
      <svg
        viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`}
        preserveAspectRatio="xMidYMid meet"
        className="relative z-10 h-full w-full rounded-2xl "
      >
        <defs>
          <pattern
            id="uae-dot-pattern"
            x="0"
            y="0"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2.2" cy="2.2" r="1.75" fill="#71717A" />
          </pattern>
          <clipPath id="uae-shape-clip">
            <path d={polygonPath} />
          </clipPath>
          <linearGradient id="uae-map-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
          <linearGradient id="uae-route" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="10%" stopColor="#0088FF" stopOpacity="1" />
            <stop offset="90%" stopColor="#0088FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <filter id="route-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.2" />
          </filter>
          <filter
            id="map-border-blur"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="3.2" />
          </filter>
        </defs>

        <rect
          x="0"
          y="0"
          width={VIEWBOX.width}
          height={VIEWBOX.height}
          fill="#FFFFFF"
        />
        <path d={polygonPath} fill="url(#uae-map-fill)" stroke="none" />
        <rect
          x="0"
          y="0"
          width={VIEWBOX.width}
          height={VIEWBOX.height}
          fill="url(#uae-dot-pattern)"
          clipPath="url(#uae-shape-clip)"
        />
        <path
          d={polygonPath}
          fill="none"
          stroke="#cad7e8"
          strokeWidth="5"
          strokeOpacity="0.34"
          filter="url(#map-border-blur)"
        />

        {CONNECTIONS.map((route, index) => {
          const start = projectPoint(route.start.lat, route.start.lng);
          const end = projectPoint(route.end.lat, route.end.lng);
          return (
            <g key={`route-${index}`}>
              <motion.path
                d={curvedPath(start, end)}
                fill="none"
                stroke="#3B82F6"
                strokeWidth="5"
                strokeOpacity="0.18"
                filter="url(#route-glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.05,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
              />
              <motion.path
                d={curvedPath(start, end)}
                fill="none"
                stroke="url(#uae-route)"
                strokeWidth="2.4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.05,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
              />
            </g>
          );
        })}

        {Object.values(CITY_POINTS).map((city) => {
          const p = projectPoint(city.lat, city.lng);
          return (
            <g key={city.label}>
              <circle cx={p.x} cy={p.y} r="6.5" fill="#0088FF" opacity="0.12" />
              <circle cx={p.x} cy={p.y} r="3.6" fill="#0088FF" />
              <circle cx={p.x} cy={p.y} r="1.4" fill="#FFFFFF" />
              <circle cx={p.x} cy={p.y} r="3.2" fill="#0088FF" opacity="0.45">
                <animate
                  attributeName="r"
                  from="3.2"
                  to="10"
                  dur="1.6s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.45"
                  to="0"
                  dur="1.6s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {["Abu Dhabi", "Dubai", "Sharjah", "Ras Al Khaimah"].map((label) => {
          const city = Object.values(CITY_POINTS).find(
            (d) => d.label === label,
          );
          const p = projectPoint(city.lat, city.lng);
          return (
            <text
              key={`label-${label}`}
              x={p.x + 8}
              y={p.y - 8}
              fill="#475467"
              fontSize="11"
              fontWeight="600"
              letterSpacing="0.2"
            >
              {label}
            </text>
          );
        })}
      </svg>
      <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-white/50" />
    </div>
  );
}

export default function WorldMapSection() {
  return (
    <section className="w-full bg-white px-6 pt-24">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0088FF]">
          UAE Network
        </p>
        <h2 className="mt-3 text-3xl font-bold text-black md:text-5xl">
          Connected Parking Across UAE
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm text-[#50576B] md:text-base">
          From Abu Dhabi to Fujairah, HalaPark links operations across Emirates
          with one unified digital parking system.
        </p>
      </div>

      <div className="mx-auto mt-10 h-[180px] max-w-6xl sm:h-[420px] lg:h-[600px]">
        <UAEMap />
      </div>
    </section>
  );
}
