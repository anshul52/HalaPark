"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

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
  { href: "#solutions", label: "Solutions" },
  { href: "/business", label: "Business" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const pathname = usePathname();

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
      setHeroVisible(false);
      return;
    }

    const hero = document.getElementById("hero-section");
    if (!hero) {
      setHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.12 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  const showShadow = pathname === "/" ? !heroVisible : scrolled;

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
            <a href="/" className="flex items-center gap-1 flex-shrink-0">
              <img src="logo-blue-11.png" alt="" className="sm:h-10 h-6" />
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm sm:text-base font-medium text-black hover:text-[#0088FF] rounded-lg transition-colors duration-150 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block flex-shrink-0">
              <a
                href="/app"
                className="inline-flex items-center gap-2 bg-[#0088FF] hover:bg-blue-700 active:bg-blue-800 text-white text-sm sm:text-base font-light px-5 py-2.5 rounded-full transition-all duration-150 shadow-sm hover:shadow-md"
              >
                Download the App
                <PhoneIcon />
              </a>
            </div>

            {/* Mobile: compact CTA + Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="/app"
                className="inline-flex items-center gap-1.5 bg-[#0088FF] hover:bg-blue-700 text-white text-sm sm:text-base font-medium px-4 py-2 rounded-full transition-colors duration-150"
              >
                <span className="hidden sm:inline">Download the App</span>
                <span className="sm:hidden">Download</span>
                <PhoneIcon />
              </a>
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
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center px-3 py-2.5 text-[0.9375rem] font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-[70px]" />
    </>
  );
}
