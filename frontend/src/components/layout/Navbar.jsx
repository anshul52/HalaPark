"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

const PhoneIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const HamburgerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const navLinks = [
  { href: "/", label: "Home" },
  // { href: "/how-it-works", label: "How It Works" },
  { href: "/app", label: "App" },
  { href: "#services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/business", label: "Business" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];
export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const pillRefs = useRef([]);
  const circleRefs = useRef([]);
  const labelRefs = useRef([]);
  const hoverLabelRefs = useRef([]);
  const timelineRefs = useRef([]);
  const activeTweenRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const hero = document.getElementById("hero-section");
    if (!hero) {
      const frameId = window.requestAnimationFrame(() => {
        setHeroVisible(false);
      });

      return () => window.cancelAnimationFrame(frameId);
    }

    const initialFrameId = window.requestAnimationFrame(() => {
      setHeroVisible(true);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.12 },
    );

    observer.observe(hero);
    return () => {
      window.cancelAnimationFrame(initialFrameId);
      observer.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    const activeTweens = activeTweenRefs.current;
    const timelines = timelineRefs.current;

    const layoutPills = () => {
      pillRefs.current.forEach((pill, index) => {
        const circle = circleRefs.current[index];
        const label = labelRefs.current[index];
        const hoverLabel = hoverLabelRefs.current[index];

        if (!pill || !circle || !label || !hoverLabel) {
          return;
        }

        const { width, height } = pill.getBoundingClientRect();
        const radius = ((width * width) / 4 + height * height) / (2 * height);
        const diameter = Math.ceil(radius * 2) + 2;
        const delta =
          Math.ceil(
            radius -
              Math.sqrt(Math.max(0, radius * radius - (width * width) / 4)),
          ) + 1;
        const originY = diameter - delta;

        circle.style.width = `${diameter}px`;
        circle.style.height = `${diameter}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });
        gsap.set(label, { y: 0 });
        gsap.set(hoverLabel, { y: height + 12, opacity: 0 });

        timelines[index]?.kill();

        const timeline = gsap.timeline({ paused: true });
        timeline
          .to(
            circle,
            {
              scale: 1.18,
              duration: 0.85,
              ease: "power3.out",
              overwrite: "auto",
            },
            0,
          )
          .to(
            label,
            {
              y: -(height + 8),
              duration: 0.85,
              ease: "power3.out",
              overwrite: "auto",
            },
            0,
          )
          .to(
            hoverLabel,
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power3.out",
              overwrite: "auto",
            },
            0,
          );

        timelines[index] = timeline;
      });
    };

    layoutPills();

    const handleResize = () => layoutPills();
    window.addEventListener("resize", handleResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layoutPills).catch(() => {});
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      activeTweens.forEach((tween) => tween?.kill());
      timelines.forEach((timeline) => timeline?.kill());
    };
  }, []);

  const handlePillEnter = (index) => {
    const timeline = timelineRefs.current[index];

    if (!timeline) {
      return;
    }

    activeTweenRefs.current[index]?.kill();
    activeTweenRefs.current[index] = timeline.tweenTo(timeline.duration(), {
      duration: 0.28,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handlePillLeave = (index) => {
    const timeline = timelineRefs.current[index];

    if (!timeline) {
      return;
    }

    activeTweenRefs.current[index]?.kill();
    activeTweenRefs.current[index] = timeline.tweenTo(0, {
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const showShadow = pathname === "/" ? scrolled && !heroVisible : scrolled;
  const resolveLinkHref = (href) => (href.startsWith("#") ? `/${href}` : href);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          showShadow ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[70px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 flex-shrink-0">
              <Image
                src="/logo-blue-11.png"
                alt="HalaPark"
                width={160}
                height={48}
                className="sm:h-10 h-6 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center rounded-full border border-slate-200 bg-white p-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.label}
                    href={resolveLinkHref(link.href)}
                    ref={(element) => {
                      pillRefs.current[index] = element;
                    }}
                    onMouseEnter={() => handlePillEnter(index)}
                    onMouseLeave={() => handlePillLeave(index)}
                    className="relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full px-5 text-sm font-medium text-slate-900"
                  >
                    <span
                      ref={(element) => {
                        circleRefs.current[index] = element;
                      }}
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 rounded-full bg-[#0088FF]"
                    />
                    <span className="relative inline-flex h-[1.1em] items-center overflow-hidden">
                      <span
                        ref={(element) => {
                          labelRefs.current[index] = element;
                        }}
                        className="relative block whitespace-nowrap"
                      >
                        {link.label}
                      </span>
                      <span
                        ref={(element) => {
                          hoverLabelRefs.current[index] = element;
                        }}
                        aria-hidden="true"
                        className="absolute left-0 top-0 block whitespace-nowrap text-white"
                      >
                        {link.label}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block flex-shrink-0">
              <Link
                href="/app"
                className="inline-flex items-center gap-2 bg-[#0088FF] hover:bg-blue-700 active:bg-blue-800 text-white text-sm sm:text-base font-light px-5 py-2.5 rounded-full transition-all duration-150 shadow-sm hover:shadow-md"
              >
                Download the App
                <PhoneIcon />
              </Link>
            </div>

            {/* Mobile: compact CTA + Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/app"
                className="inline-flex items-center gap-1.5 bg-[#0088FF] hover:bg-blue-700 text-white text-sm sm:text-base font-medium px-4 py-2 rounded-full transition-colors duration-150"
              >
                <span className="hidden sm:inline">Download the App</span>
                <span className="sm:hidden">Download</span>
                <PhoneIcon />
              </Link>
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100 px-4 pb-4 pt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={resolveLinkHref(link.href)}
                onClick={() => setMenuOpen(false)}
                className="flex items-center px-3 py-2.5 text-[0.9375rem] font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-[70px]" />
    </>
  );
}
