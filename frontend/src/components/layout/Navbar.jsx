'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#service', label: 'Service' },
    { href: '#app', label: 'App' },
    { href: '#about-us', label: 'About Us' },
  ];

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.includes(href.replace('#', ''));
  };

  return (
    <nav className="sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Rounded Navigation Bar */}
        <div className="bg-black rounded-full px-4 md:px-8 py-3 md:py-4 shadow-lg">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              {/* Blue Circular Icon with P/Location Pin */}
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 md:w-7 md:h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {/* Brand Name */}
              <Link href="/" className="text-xl md:text-2xl font-bold text-white hover:opacity-80 transition-opacity">
                HalaPark
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative text-sm md:text-base font-medium text-white hover:text-blue-300 transition-colors"
                  >
                    {link.label}
                    {/* Active Indicator - Blue Line */}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded-full"></span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Contact Us Button */}
            <div className="hidden lg:block">
              <Link
                href="#contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium text-sm md:text-base transition-colors shadow-md"
              >
                Contact us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white focus:outline-none p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-700 space-y-3">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-2 text-base font-medium transition-colors ${
                      active ? 'text-blue-400' : 'text-white hover:text-blue-300'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      {link.label}
                      {active && (
                        <span className="ml-2 w-1 h-1 bg-blue-500 rounded-full"></span>
                      )}
                    </div>
                  </Link>
                );
              })}
              <Link
                href="#contact"
                className="block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium text-center transition-colors mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact us
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
