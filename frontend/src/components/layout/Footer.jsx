"use client";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "App", href: "/app" },
    { name: "Business", href: "/business" },
  ];

  const ContactLinks = [{ name: "Contact Us", href: "/contact" }];

  const socialLinks = [
    { name: "Facebook", icon: <FaFacebook />, href: "#" },
    { name: "Twitter", icon: <FaTwitter />, href: "#" },
    { name: "Linkedin", icon: <FaLinkedin />, href: "#" },
    { name: "Instagram", icon: <FaInstagram />, href: "#" },
  ];

  return (
    <footer className="bg-[#ffffff] text-black font-sans w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 border-b border-[#D3D3D3] pb-10">
          {/* Company Info */}
          <div className="sm:col-span-2 md:col-span-1 sm:w-2/5 w-full">
            <a href="/" className="flex items-center gap-1 flex-shrink-0">
              <img src="logo-blue-11.png" alt="" className="sm:h-16 h-6" />
            </a>
          </div>

          <div className="flex flex-row justify-evenly items-start sm:w-3/5 w-full gap-3 relative sm:pb-0 pb-20">
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
                      className="text-black transition-colors text-xs sm:text-sm underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* contact */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Support
              </h4>
              <ul className="space-y-2 sm:space-y-1">
                <li>
                  <Link
                    href={""}
                    className="text-black transition-colors text-xs sm:text-sm"
                  >
                    {"Mail : info@halapark.com"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="text-black transition-colors text-xs sm:text-sm"
                  >
                    {"Phone : +971 4 3782022"}
                  </Link>
                </li>
                {ContactLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-black transition-colors text-xs sm:text-sm underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* bottom menu */}
        <div className="w-full py-4 px-0 flex sm:flex-row flex-col sm:items-center justify-between gap-5 sm:gap-0  mt-2">
          <div className="flex items-center">
            <button className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-900 hover:shadow-sm transition">
              <span className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full">
                <img src="/Figure09mailicon.png" alt="" />
              </span>
              support@halapark.com
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-start justify-end gap-4">
            <span className="text-base text-black">Social media:</span>

            <div className="flex gap-3">
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    href={social.href}
                    className="w-9 h-9 text-black flex items-center justify-center hover:bg-white hover:border hover:border-gray-200 rounded-lg bg-gray-50"
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
