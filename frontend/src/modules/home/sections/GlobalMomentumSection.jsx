"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import GlobalMomentumGlobe from "./GlobalMomentumGlobe";

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 400;
const DEFAULT_GLOW_COLOR = "14, 165, 233";
const MOBILE_BREAKPOINT = 768;

const insightCards = [
  {
    title: "Why Now",
    description:
      "Urbanisation and digital-first mobility are rapidly reshaping parking demand across high-growth markets.",
  },
  {
    title: "Why HalaPark",
    description:
      "Enterprise-grade technology built for properties and cities moving toward connected parking operations.",
  },
];

const stats = [
  {
    value: "24%",
    label: "Regional growth momentum",
  },
  {
    value: "$11B+",
    label: "Projected global smart parking market",
  },
  {
    value: "UAE",
    label: "Leading digital-first urban mobility adoption",
  },
];

function createParticleElement(x, y, glowColor = DEFAULT_GLOW_COLOR) {
  const particle = document.createElement("div");
  particle.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 9999px;
    background: rgba(${glowColor}, 1);
    box-shadow: 0 0 10px rgba(${glowColor}, 0.55);
    pointer-events: none;
    z-index: 20;
    left: ${x}px;
    top: ${y}px;
  `;
  return particle;
}

function updateCardGlowProperties(card, mouseX, mouseY, intensity, radius) {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty("--gm-glow-x", `${relativeX}%`);
  card.style.setProperty("--gm-glow-y", `${relativeY}%`);
  card.style.setProperty("--gm-glow-intensity", intensity.toString());
  card.style.setProperty("--gm-glow-radius", `${radius}px`);
}

function useMobileDetection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

function MomentumMagicCard({
  children,
  className,
  disableAnimations = false,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
}) {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);
  const timeoutsRef = useRef([]);
  const templatesRef = useRef([]);
  const particlesReadyRef = useRef(false);
  const hoveredRef = useRef(false);

  useEffect(() => {
    const element = cardRef.current;

    if (!element || disableAnimations) {
      return undefined;
    }

    const initializeParticles = () => {
      if (particlesReadyRef.current) {
        return;
      }

      const { width, height } = element.getBoundingClientRect();
      templatesRef.current = Array.from({ length: particleCount }, () =>
        createParticleElement(
          Math.random() * width,
          Math.random() * height,
          glowColor,
        ),
      );
      particlesReadyRef.current = true;
    };

    const clearAllParticles = () => {
      timeoutsRef.current.forEach((timeout) => window.clearTimeout(timeout));
      timeoutsRef.current = [];

      particlesRef.current.forEach((particle) => {
        gsap.to(particle, {
          scale: 0,
          opacity: 0,
          duration: 0.25,
          ease: "back.in(1.7)",
          onComplete: () => particle.remove(),
        });
      });

      particlesRef.current = [];
    };

    const animateParticles = () => {
      initializeParticles();

      templatesRef.current.forEach((template, index) => {
        const timeoutId = window.setTimeout(() => {
          if (!hoveredRef.current || !cardRef.current) {
            return;
          }

          const particle = template.cloneNode(true);
          cardRef.current.appendChild(particle);
          particlesRef.current.push(particle);

          gsap.fromTo(
            particle,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.3,
              ease: "back.out(1.7)",
            },
          );

          gsap.to(particle, {
            x: (Math.random() - 0.5) * 90,
            y: (Math.random() - 0.5) * 90,
            rotation: Math.random() * 360,
            duration: 2 + Math.random() * 2,
            ease: "none",
            repeat: -1,
            yoyo: true,
          });

          gsap.to(particle, {
            opacity: 0.25,
            duration: 1.3,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
          });
        }, index * 90);

        timeoutsRef.current.push(timeoutId);
      });
    };

    const handleMouseEnter = () => {
      hoveredRef.current = true;
      animateParticles();
    };

    const handleMouseMove = (event) => {
      updateCardGlowProperties(
        element,
        event.clientX,
        event.clientY,
        1,
        DEFAULT_SPOTLIGHT_RADIUS * 0.82,
      );
    };

    const handleMouseLeave = () => {
      hoveredRef.current = false;
      clearAllParticles();
      element.style.setProperty("--gm-glow-intensity", "0");
    };

    const handleClick = (event) => {
      if (!clickEffect) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height),
      );

      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        border-radius: 9999px;
        pointer-events: none;
        z-index: 15;
        background: radial-gradient(circle, rgba(${glowColor}, 0.34) 0%, rgba(${glowColor}, 0.16) 34%, transparent 72%);
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 1,
          opacity: 0,
          duration: 0.75,
          ease: "power2.out",
          onComplete: () => ripple.remove(),
        },
      );
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("click", handleClick);

    return () => {
      hoveredRef.current = false;
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("click", handleClick);
      clearAllParticles();
    };
  }, [clickEffect, disableAnimations, glowColor, particleCount]);

  return (
    <article
      ref={cardRef}
      data-magic-card="true"
      className={`group relative overflow-hidden transition-[transform,box-shadow] duration-300 hover:-translate-y-[2px] ${className}`}
      style={{
        "--gm-glow-x": "50%",
        "--gm-glow-y": "50%",
        "--gm-glow-intensity": 0,
        "--gm-glow-radius": `${DEFAULT_SPOTLIGHT_RADIUS}px`,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          background: `radial-gradient(var(--gm-glow-radius) circle at var(--gm-glow-x) var(--gm-glow-y), rgba(${glowColor}, 0.12) 0%, transparent 68%)`,
          opacity: "var(--gm-glow-intensity)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] p-px"
        style={{
          background: `radial-gradient(var(--gm-glow-radius) circle at var(--gm-glow-x) var(--gm-glow-y), rgba(${glowColor}, calc(var(--gm-glow-intensity) * 0.92)) 0%, rgba(${glowColor}, calc(var(--gm-glow-intensity) * 0.4)) 32%, transparent 68%)`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </article>
  );
}

function GlobalMomentumSpotlight({
  sectionRef,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
}) {
  useEffect(() => {
    const section = sectionRef.current;

    if (!section || disableAnimations) {
      return undefined;
    }

    const spotlight = document.createElement("div");
    spotlight.style.cssText = `
      position: fixed;
      width: 820px;
      height: 820px;
      left: 0;
      top: 0;
      border-radius: 50%;
      pointer-events: none;
      transform: translate(-50%, -50%);
      opacity: 0;
      z-index: 60;
      mix-blend-mode: screen;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.14) 0%,
        rgba(${glowColor}, 0.08) 18%,
        rgba(${glowColor}, 0.04) 32%,
        rgba(${glowColor}, 0.015) 48%,
        transparent 72%
      );
    `;
    document.body.appendChild(spotlight);

    const resetCards = () => {
      section.querySelectorAll("[data-magic-card='true']").forEach((card) => {
        card.style.setProperty("--gm-glow-intensity", "0");
      });
    };

    const handleMouseMove = (event) => {
      const rect = section.getBoundingClientRect();
      const mouseInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      const cards = section.querySelectorAll("[data-magic-card='true']");

      if (!mouseInside) {
        resetCards();
        gsap.to(spotlight, {
          opacity: 0,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
        return;
      }

      let strongestGlow = 0;

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const distanceX = Math.max(
          cardRect.left - event.clientX,
          0,
          event.clientX - cardRect.right,
        );
        const distanceY = Math.max(
          cardRect.top - event.clientY,
          0,
          event.clientY - cardRect.bottom,
        );
        const distance = Math.hypot(distanceX, distanceY);
        const intensity =
          distance <= spotlightRadius ? 1 - distance / spotlightRadius : 0;

        strongestGlow = Math.max(strongestGlow, intensity);
        updateCardGlowProperties(
          card,
          event.clientX,
          event.clientY,
          intensity,
          spotlightRadius,
        );
      });

      gsap.to(spotlight, {
        left: event.clientX,
        top: event.clientY,
        opacity: strongestGlow > 0 ? strongestGlow * 0.78 : 0,
        duration: 0.16,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const handleDocumentLeave = () => {
      resetCards();
      gsap.to(spotlight, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleDocumentLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleDocumentLeave);
      resetCards();
      spotlight.remove();
    };
  }, [disableAnimations, glowColor, sectionRef, spotlightRadius]);

  return null;
}

export default function GlobalMomentumSection() {
  const panelRef = useRef(null);
  const isMobile = useMobileDetection();
  const disableAnimations = isMobile;

  return (
    <section className="bg-white py-10 sm:py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={panelRef}
          className="relative overflow-hidden rounded-[2rem] border border-sky-100  p-5 shadow-[0_24px_54px_rgba(148,163,184,0.16)] sm:p-7 md:p-8"
        >
          <GlobalMomentumSpotlight
            sectionRef={panelRef}
            disableAnimations={disableAnimations}
          />

          <div className="absolute -top-16 right-10 h-44 w-44 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute -bottom-20 left-8 h-52 w-52 rounded-full bg-cyan-100/70 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />

          <div className="relative grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-sky-200 bg-white/90 px-4 py-2 text-sm font-medium text-sky-700 shadow-[0_10px_24px_rgba(148,163,184,0.12)]">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-500 shadow-[0_0_18px_rgba(14,165,233,0.45)]" />
                <span>Global Momentum</span>
              </div>

              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-[3.1rem]">
                Smart Parking Is the Future and the UAE Is Leading It
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                The global smart parking market is growing rapidly, driven by
                urbanisation and digital-first mobility. HalaPark is at the
                forefront, bringing enterprise-grade technology to the
                UAE&apos;s fastest-growing properties and cities.
              </p>

              <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-2">
                {insightCards.map((item) => (
                  <MomentumMagicCard
                    key={item.title}
                    disableAnimations={disableAnimations}
                    className="rounded-[1.5rem] border border-white bg-white/85 p-4 shadow-[0_16px_35px_rgba(148,163,184,0.12)] backdrop-blur-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </MomentumMagicCard>
                ))}
              </div>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Learn About Our Platform
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-4">
              <MomentumMagicCard
                disableAnimations={disableAnimations}
                className="rounded-[1.75rem] border border-sky-100 bg-[radial-gradient(circle_at_50%_18%,rgba(186,230,253,0.95),rgba(255,255,255,0.96)_40%,rgba(240,249,255,0.96)_100%)] p-6 shadow-[0_20px_40px_rgba(148,163,184,0.14)]"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                      Momentum Map
                    </p>
                    <p className="mt-3 text-xl font-semibold leading-8 text-slate-900">
                      Market demand is moving toward connected, low-friction
                      parking ecosystems.
                    </p>
                  </div>

                  <GlobalMomentumGlobe />
                </div>
              </MomentumMagicCard>

              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((item, index) => (
                  <MomentumMagicCard
                    key={item.label}
                    disableAnimations={disableAnimations}
                    className={`rounded-[1.5rem] border border-sky-100 p-5 shadow-[0_16px_32px_rgba(148,163,184,0.12)] sm:p-6 ${
                      index === 1
                        ? "bg-[linear-gradient(135deg,#dff4ff_0%,#f9fdff_100%)]"
                        : "bg-white/90"
                    }`}
                  >
                    <p className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                      {item.label}
                    </p>
                  </MomentumMagicCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
