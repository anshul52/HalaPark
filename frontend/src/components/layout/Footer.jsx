"use client";

import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#what-we-do" },
    { name: "Blog", href: "#blog" },
    { name: "Contact Us", href: "#contact" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  const resourcesLinks = [
    { name: "Case Studies", href: "#" },
    { name: "Whitepapers", href: "#" },
    { name: "Webinars", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Careers", href: "#" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "/download (8).svg", href: "#" },
    { name: "Twitter", icon: "/download (6).svg", href: "#" },
    { name: "LinkedIn", icon: "/download (7).svg", href: "#" },
    { name: "Instagram", icon: "/download (5).svg", href: "#" },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-white font-sans w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 md:col-span-1 sm:w-2/5 w-full">
            <div className="flex flex-row justify-start items-center gap-2 mb-4">
              <img
                src="/imgi_32_rRwo7mUtZ89fOzQy5lvrDQHYjo.png"
                alt="HalaPark Logo"
                className="w-7 h-7 object-contain"
              />
              <h3 className="text-xl sm:text-xl font-normal">HalaPark</h3>
            </div>
            <p className="text-white text-xs sm:text-[16px] mb-4 sm:mb-5 md:mb-6 leading-relaxed">
              Send me the halapark newsletter. I expressly agree <br /> to
              receive the newsletter and know that I can easily <br />
              unsubscribe at any time.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-5 md:h-5 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-4 h-4 object-contain"
                  />
                </a>
              ))}
            </div>
            <p className="text-gray-300 text-xs font-semibold sm:text-[12px] mt-10">
              © 2026 HalaPark. All right reserved.
            </p>
          </div>

          <div className="flex flex-row justify-evenly items-center sm:w-3/5 w-full gap-3">
            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-1">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white transition-colors text-xs sm:text-sm underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Support
              </h4>
              <ul className="space-y-2 sm:space-y-1">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white transition-colors text-xs sm:text-sm underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Resources
              </h4>
              <ul className="space-y-2 sm:space-y-1">
                {resourcesLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white transition-colors text-xs sm:text-sm underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors z-50"
        aria-label="Scroll to top"
      >
        <svg
          className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
}
