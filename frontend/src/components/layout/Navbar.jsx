// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [currentHash, setCurrentHash] = useState("");
//   const pathname = usePathname();

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/how-it-works", label: "How It Works" },
//     { href: "/app", label: "App" },
//     { href: "/business", label: "Business" },
//     { href: "/about", label: "About Us" },
//   ];

//   // Track hash changes for active indicator
//   useEffect(() => {
//     const updateHash = () => {
//       setCurrentHash(window.location.hash);
//     };

//     updateHash();

//     window.addEventListener("hashchange", updateHash);

//     const handleScroll = () => {
//       setTimeout(updateHash, 100);
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("hashchange", updateHash);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Close menu on route/hash change
//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [pathname, currentHash]);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isMenuOpen]);

//   const isActive = (href) => {
//     if (href === "/") {
//       return pathname === "/" && !currentHash;
//     }
//     if (href.startsWith("#")) {
//       const normalizedHash = currentHash.toLowerCase();
//       const normalizedHref = href.toLowerCase();
//       return normalizedHash === normalizedHref;
//     }
//     return pathname?.includes(href.replace("#", ""));
//   };

//   return (
//     <>
//       <nav className="sticky top-4 z-50 font-sans px-4 py-0 h-0">
//         <div className="max-w-7xl md:max-w-[830px] mx-auto bg-transparent">
//           {/* Rounded Navigation Bar */}
//           <div className="bg-black rounded-full shadow-lg flex flex-row justify-between h-full items-center relative">
//             {/* Logo Section */}
//             <div className="flex items-center space-x-1 ml-3">
//               <div className="w-10 h-10 md:w-7 md:h-7 rounded-full flex items-center justify-center shrink-0">
//                 <img
//                   src="/imgi_32_rRwo7mUtZ89fOzQy5lvrDQHYjo.png"
//                   alt="Location pin"
//                   className="w-6 h-6 md:w-7 md:h-7 object-contain"
//                 />
//               </div>
//               <Link
//                 href="/"
//                 className="text-xl md:text-xl font-normal text-white hover:opacity-80 transition-opacity tracking-wider"
//               >
//                 HalaPark
//               </Link>
//             </div>

//             <div className="flex flex-row justify-between h-13 items-center mr-25">
//               {/* Desktop Navigation Links */}
//               <div className="hidden h-full lg:flex flex-row items-center gap-6">
//                 {navLinks.map((link) => {
//                   const active = isActive(link.href);
//                   return (
//                     <Link
//                       key={link.href}
//                       href={link.href}
//                       className="relative text-sm md:text-[14px] font-medium text-white transition-colors h-full"
//                       onClick={() => {
//                         if (link.href.startsWith("#")) {
//                           setCurrentHash(link.href);
//                         } else if (link.href === "/") {
//                           setCurrentHash("");
//                         }
//                       }}
//                     >
//                       <div className="flex items-center gap-2 h-full px-4 sm:px-0 lg:px-3 py-3">
//                         {link.label}
//                       </div>
//                       {active && (
//                         <span className="absolute bottom-0 left-0 right-0 h-[5px] rounded-t-2xl bg-blue-500"></span>
//                       )}
//                     </Link>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Contact Us Button — desktop */}
//             <div className="bg-cyan-900 h-full hidden lg:flex flex-row items-center relative">
//               <Link
//                 href="/contact"
//                 className="bg-blue-500 hover:bg-blue-600 text-white absolute h-full flex flex-row items-center text-center text-nowrap right-1.5 px-6 py-5 rounded-full font-medium text-sm md:text-[14px] transition-colors shadow-md"
//               >
//                 Contact us
//               </Link>
//             </div>

//             {/* Mobile / Tablet right side: Contact + Hamburger */}
//             <div className="flex lg:hidden items-center gap-2 mr-2">
//               {/* Hamburger Button */}
//               <button
//                 onClick={() => setIsMenuOpen((prev) => !prev)}
//                 aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//                 aria-expanded={isMenuOpen}
//                 className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
//               >
//                 {isMenuOpen ? (
//                   /* X icon */
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-5 h-5 text-white"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 ) : (
//                   /* Hamburger icon */
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-5 h-5 text-white"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile / Tablet Dropdown Menu */}
//       {isMenuOpen && (
//         <>
//           {/* Backdrop */}
//           <div
//             className="fixed inset-0 z-40 bg-black/50 lg:hidden"
//             onClick={() => setIsMenuOpen(false)}
//           />

//           {/* Menu Panel */}
//           <div className="fixed top-20 left-4 right-4 z-50 lg:hidden bg-black rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
//             <ul className="flex flex-col py-2">
//               {navLinks.map((link) => {
//                 const active = isActive(link.href);
//                 return (
//                   <li key={link.href}>
//                     <Link
//                       href={link.href}
//                       onClick={() => {
//                         if (link.href.startsWith("#")) {
//                           setCurrentHash(link.href);
//                         } else if (link.href === "/") {
//                           setCurrentHash("");
//                         }
//                         setIsMenuOpen(false);
//                       }}
//                       className={`flex items-center gap-3 px-6 py-4 text-sm font-medium transition-colors ${
//                         active
//                           ? "text-blue-400 bg-white/5"
//                           : "text-white hover:bg-white/5 hover:text-blue-300"
//                       }`}
//                     >
//                       {active && (
//                         <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
//                       )}
//                       <span className={active ? "" : "ml-[18px]"}>
//                         {link.label}
//                       </span>
//                     </Link>
//                   </li>
//                 );
//               })}

//               {/* Divider + Contact */}
//               <li className="border-t border-white/10 mt-2 pt-2 px-4 pb-4">
//                 <Link
//                   href="/contact"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full font-medium text-sm transition-colors shadow-md"
//                 >
//                   Contact us
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </>
//       )}

//       {/* Fade-in animation */}
//       <style jsx global>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(-8px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.18s ease-out both;
//         }
//       `}</style>
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";

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
  { href: "/how-it-works", label: "How It Works" },
  { href: "/app", label: "App" },
  { href: "/business", label: "Business" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
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
