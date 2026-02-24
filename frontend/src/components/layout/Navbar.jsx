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
    { href: "#how-it-works", label: "How It Works" },
    { href: "#service", label: "Service" },
    { href: "#app", label: "App" },
    { href: "#about-us", label: "About Us" },
  ];

  // Track hash changes for active indicator
  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash);
    };

    // Set initial hash
    updateHash();

    // Listen for hash changes
    window.addEventListener("hashchange", updateHash);

    // Also check on scroll (for smooth scroll behavior)
    const handleScroll = () => {
      // Small delay to allow scroll to complete
      setTimeout(updateHash, 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (href) => {
    if (href === "/") {
      // Home is active when pathname is "/" and no hash is present
      return pathname === "/" && !currentHash;
    }
    // For hash links, check if current hash matches (case-insensitive)
    if (href.startsWith("#")) {
      const normalizedHash = currentHash.toLowerCase();
      const normalizedHref = href.toLowerCase();
      return normalizedHash === normalizedHref;
    }
    return pathname?.includes(href.replace("#", ""));
  };

  return (
    <nav className="sticky top-4 z-50 font-sans px-4 py-0 h-0">
      <div className="max-w-7xl md:max-w-[830px] mx-auto bg-transparent">
        {/* Rounded Navigation Bar */}
        <div className="bg-black rounded-full shadow-lg flex flex-row justify-between h-full items-center relative">
          {/* Logo Section */}
          <div className="flex items-center space-x-1 ml-3">
            {/* Blue Circular Icon with P/Location Pin */}
            <div className="w-10 h-10 md:w-7 md:h-7 rounded-full flex items-center justify-center shrink-0">
              <img
                src="/imgi_32_rRwo7mUtZ89fOzQy5lvrDQHYjo.png"
                alt="Location pin"
                className="w-6 h-6 md:w-7 md:h-7 object-contain"
              />
            </div>
            {/* Brand Name */}
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
                    className="relative text-sm md:text-[14px] font-medium text-white transition-colors h-full "
                    onClick={() => {
                      // Update hash immediately for instant feedback
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
                    {/* Active Indicator - Blue Bar */}
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-[5px] rounded-t-2xl bg-blue-500 "></span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Contact Us Button */}
          <div className="bg-cyan-900 h-full flex flex-row items-center relative">
            <Link
              href="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white absolute h-full flex flex-row items-center text-center text-nowrap right-1.5 px-6 py-5 rounded-full font-medium text-sm md:text-[14px] transition-colors shadow-md"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
