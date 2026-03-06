"use client";

import { cn } from "../../lib";

const features = [
  {
    name: "Public Parking",
    description: "Find nearby public spots and pay in seconds from your phone.",
    href: "#",
    cta: "Learn More",
    className: "md:col-span-5",
    Icon: PIcon,
    image: "/hf_20260306_103153_b265804d-2d81-4c0d-8c86-50b94bd60634 (1).jpeg",
  },
  {
    image: "/9f6d39892454a4aecbb4b8d648804225.jpg.jpeg",
    name: "Private Parking",
    description:
      "Monetize private spaces with secure access and smart controls.",
    href: "#",
    cta: "Learn More",
    className: "md:col-span-5",
    Icon: LockIcon,
  },
  {
    name: "EV Parking",
    description:
      "Book charging-enabled parking for electric vehicles on demand.",
    href: "#",
    cta: "Learn More",
    className: "md:col-span-6",
    Icon: BoltIcon,
    image: "/hf_20260306_105244_1ba5c7ed-2bfa-4d2e-b422-35180510c1ba.jpeg",
  },
  {
    name: "Valet",
    description:
      "Offer premium valet workflows with ticketless handover and tracking.",
    href: "#",
    cta: "Learn More",
    className: "md:col-span-4",
    Icon: CarIcon,
    image: "/hf_20260306_105452_e9554d73-6553-4981-92ac-9e3b5e9b1dbf.jpeg",
  },
];

export default function AllYouNeedSection() {
  return (
    <section className="relative isolate py-14 sm:py-20 overflow-hidden bg-[radial-gradient(1200px_500px_at_10%_0%,#E9F4FF_0%,transparent_60%),radial-gradient(1000px_500px_at_90%_100%,#EAF0FF_0%,transparent_58%),linear-gradient(180deg,#F8FBFF_0%,#F3F8FF_100%)]">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#1E92FE]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#5B7CFA]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center rounded-full border border-[#CFE4FF] bg-white/80 backdrop-blur px-4 py-1.5 text-xs sm:text-sm font-medium text-[#1E92FE]">
            All You Need In One Place
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0A2540] tracking-tight">
            Seamless for Drivers. Profitable for Owners.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5F6B7A] max-w-2xl mx-auto leading-relaxed">
            Whether you're looking for a spot or listing one, HalaPark makes the
            entire process simple, secure, and fully in your control.
          </p>
        </div>

        <BentoGrid>
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

function BentoGrid({ children, className }) {
  return (
    <div
      className={cn(
        " grid w-full auto-rows-[24rem] sm:auto-rows-[26rem] grid-cols-1 md:grid-cols-10 gap-4 sm:gap-5",
        className,
      )}
    >
      {children}
    </div>
  );
}

function BentoCard({ name, className, Icon, description, href, cta, image }) {
  return (
    <div
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl",
        "bg-white border border-[#E6EEF8] shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_0_0_1px_rgba(30,146,254,.08),0_12px_30px_rgba(30,146,254,.10)]",
        "transform-gpu transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_0_0_1px_rgba(30,146,254,.15),0_20px_44px_rgba(30,146,254,.22)]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-white" />
      <div className="pointer-events-none absolute -top-16 -right-10 h-36 w-36 rounded-full bg-white/65 blur-2xl opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="pointer-events-none relative z-10 flex h-full transform-gpu flex-col gap-2 p-4 sm:p-5 transition-all duration-500 group-hover:-translate-y-6">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/80 bg-white/70 shadow-sm">
          <Icon className="h-6 w-6 origin-left transform-gpu text-[#1E92FE] transition-all duration-500 ease-in-out group-hover:scale-90" />
        </div>
        <h3 className="text-[1.15rem] font-semibold text-[#0A2540] tracking-tight">
          {name}
        </h3>
        <p className="max-w-lg text-[#5F6B7A] leading-relaxed">{description}</p>
        <div className="mt-auto w-full h-44 sm:h-302 rounded-xl overflow-hidden border border-[#E6EEF8]">
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url("${image}")` }}
            aria-label={name}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 z-20 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <a
          href={href}
          className="pointer-events-auto inline-flex items-center rounded-full border border-[#CFE4FF] bg-white px-3.5 py-1.5 text-sm font-medium text-[#0A2540] hover:text-[#1E92FE] hover:border-[#9ECAFF] transition-colors"
        >
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </div>

      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-500 group-hover:bg-[#1E92FE]/[.05]" />
    </div>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 19V5h6a4 4 0 1 1 0 8H7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LockIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="5"
        y="11"
        width="14"
        height="9"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function BoltIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M13 2L5 13h6l-1 9 9-13h-6l0-7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CarIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 14l2-5h12l2 5v4h-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="8" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
      <path d="M6 14h12" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
