"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    // { href: "#how-it-works", label: "How It Works" },
    { href: "/service", label: "Service" },
    { href: "#app", label: "App" },
    { href: "/business", label: "Business" },
    { href: "/about", label: "About Us" },
  ];

  // Track hash changes for active indicator
  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash);
    };

    updateHash();

    window.addEventListener("hashchange", updateHash);

    const handleScroll = () => {
      setTimeout(updateHash, 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu on route/hash change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, currentHash]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/" && !currentHash;
    }
    if (href.startsWith("#")) {
      const normalizedHash = currentHash.toLowerCase();
      const normalizedHref = href.toLowerCase();
      return normalizedHash === normalizedHref;
    }
    return pathname?.includes(href.replace("#", ""));
  };

  return (
    <>
      <nav className="sticky top-4 z-50 font-sans px-4 py-0 h-0">
        <div className="max-w-7xl md:max-w-[830px] mx-auto bg-transparent">
          {/* Rounded Navigation Bar */}
          <div className="bg-black rounded-full shadow-lg flex flex-row justify-between h-full items-center relative">
            {/* Logo Section */}
            <div className="flex items-center space-x-1 ml-3">
              <div className="w-10 h-10 md:w-7 md:h-7 rounded-full flex items-center justify-center shrink-0">
                <img
                  src="/imgi_32_rRwo7mUtZ89fOzQy5lvrDQHYjo.png"
                  alt="Location pin"
                  className="w-6 h-6 md:w-7 md:h-7 object-contain"
                />
              </div>
              <Link
                href="/"
                className="text-xl md:text-xl font-normal text-white hover:opacity-80 transition-opacity tracking-wider"
              >
                HalaPark
              </Link>
            </div>

            <div className="flex flex-row justify-between h-13 items-center mr-25">
              {/* Desktop Navigation Links */}
              <div className="hidden h-full lg:flex flex-row items-center gap-6">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="relative text-sm md:text-[14px] font-medium text-white transition-colors h-full"
                      onClick={() => {
                        if (link.href.startsWith("#")) {
                          setCurrentHash(link.href);
                        } else if (link.href === "/") {
                          setCurrentHash("");
                        }
                      }}
                    >
                      <div className="flex items-center gap-2 h-full px-4 sm:px-0 lg:px-3 py-3">
                        {link.label}
                      </div>
                      {active && (
                        <span className="absolute bottom-0 left-0 right-0 h-[5px] rounded-t-2xl bg-blue-500"></span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Contact Us Button — desktop */}
            <div className="bg-cyan-900 h-full hidden lg:flex flex-row items-center relative">
              <Link
                href="/contact"
                className="bg-blue-500 hover:bg-blue-600 text-white absolute h-full flex flex-row items-center text-center text-nowrap right-1.5 px-6 py-5 rounded-full font-medium text-sm md:text-[14px] transition-colors shadow-md"
              >
                Contact us
              </Link>
            </div>

            {/* Mobile / Tablet right side: Contact + Hamburger */}
            <div className="flex lg:hidden items-center gap-2 mr-2">
              {/* Hamburger Button */}
              <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                {isMenuOpen ? (
                  /* X icon */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  /* Hamburger icon */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile / Tablet Dropdown Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed top-20 left-4 right-4 z-50 lg:hidden bg-black rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
            <ul className="flex flex-col py-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        if (link.href.startsWith("#")) {
                          setCurrentHash(link.href);
                        } else if (link.href === "/") {
                          setCurrentHash("");
                        }
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 px-6 py-4 text-sm font-medium transition-colors ${
                        active
                          ? "text-blue-400 bg-white/5"
                          : "text-white hover:bg-white/5 hover:text-blue-300"
                      }`}
                    >
                      {active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      )}
                      <span className={active ? "" : "ml-[18px]"}>
                        {link.label}
                      </span>
                    </Link>
                  </li>
                );
              })}

              {/* Divider + Contact */}
              <li className="border-t border-white/10 mt-2 pt-2 px-4 pb-4">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full font-medium text-sm transition-colors shadow-md"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}

      {/* Fade-in animation */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.18s ease-out both;
        }
      `}</style>
    </>
  );
}
