"use client";

import { useState, useEffect, useRef } from "react";

export default function TrustedUsers() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate when section enters viewport
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      // Start animation when section bottom enters viewport
      // End animation when section center reaches viewport center
      const sectionBottom = sectionTop + sectionHeight;
      const sectionCenter = sectionTop + sectionHeight / 2;
      const viewportCenter = windowHeight / 2;

      let progress = 0;

      // Animation triggers when section bottom enters viewport
      // and completes when section center aligns with viewport center
      if (sectionBottom > 0 && sectionTop < windowHeight) {
        // Section is in viewport
        if (sectionCenter <= viewportCenter) {
          // Section center has passed viewport center - fully animated
          progress = 1;
        } else {
          // Calculate progress based on how close section center is to viewport center
          const distanceToCenter = sectionCenter - viewportCenter;
          const animationRange = windowHeight * 0.5; // Animation happens over half viewport height
          progress = Math.max(0, 1 - distanceToCenter / animationRange);
        }
      } else {
        // Section is not in viewport
        progress = 0;
      }

      // Clamp progress between 0 and 1
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    // Initial check
    handleScroll();

    // Throttle scroll events for better performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Calculate the movement towards center based on scroll progress
  const getAnimatedTransform = (position, progress) => {
    const centerX = 50;
    const centerY = 50;

    let currentX = 50;
    let currentY = 50;

    if (position.left) {
      currentX = parseFloat(position.left);
    } else if (position.right) {
      currentX = 100 - parseFloat(position.right);
    }

    if (position.top) {
      currentY = parseFloat(position.top);
    } else if (position.bottom) {
      currentY = 100 - parseFloat(position.bottom);
    }

    // distance from center
    const deltaX = centerX - currentX;
    const deltaY = centerY - currentY;

    // how much they move (0 → 1 based on scroll)
    const moveFactor = 1;

    const moveX = deltaX * progress * moveFactor;
    const moveY = deltaY * progress * moveFactor;

    let transforms = [];

    if (position.transform && position.transform !== "none") {
      transforms.push(position.transform);
    }

    transforms.push(`translate3d(${moveX}%, ${moveY}%, 0)`);

    return transforms.join(" ");
  };

  // Avatar positions - arranged around the central text
  const avatarPositions = [
    {
      top: "8.5%",
      left: "12%",
      size: "w-16 h-16 md:w-20 md:h-20",
      image: "/imgi_52_jrKxnhujFruOStY7hW7O5YxmU.jpg",
      transform: "none",
    }, // Top-left
    {
      top: "8.5%",
      left: "46.7%",
      size: "w-16 h-16 md:w-20 md:h-20 lg:w-22 lg:h-22",
      image: "/imgi_27_J43YEwKdcm8Se3yO2hv6heQUr0.jpg",
      transform: "translateX(-50%)",
    }, // Top-center
    {
      top: "10%",
      right: "11%",
      size: "w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32",
      image: "/imgi_26_kizUz1tXR7Z3c1Li33hw1dmhjk.jpg",
      transform: "none",
    }, // Top-right
    {
      top: "52%",
      left: "7%",
      size: "w-16 h-16 md:w-20 md:h-20",
      image: "/imgi_28_VtGsyJs2affVK3ADnnlSoxNph30.jpg",
      transform: "translateY(-50%)",
    }, // Middle-left
    {
      top: "59%",
      right: "10%",
      size: "w-16 h-16 md:w-20 md:h-20",
      image: "/imgi_30_8nsi4FFv3MDWMqrJo5thcG02qBk.jpg",
      transform: "translateY(-50%)",
    }, // Middle-right
    {
      bottom: "18.5%",
      left: "30%",
      size: "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
      image: "/imgi_105_cllTWXdcEdBHC7srBdSgfwmuDwE.jpg",
      transform: "translateX(-50%)",
    }, // Bottom-center
    {
      bottom: "14%",
      right: "28%",
      size: "w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28",
      image: "/imgi_6_4VlzVCyG6C8Z7yJCDs0BHRpzck.jpg",
      transform: "translateX(-50%)",
    }, // Bottom-center
  ];

  // Avatar background colors matching the design
  const avatarStyles = [
    "bg-gray-300", // Light gray - Top-left
    "bg-blue-200", // Light blue - Top-center
    "bg-blue-200", // Light blue - Top-right
    "bg-gray-200", // Light gray - Middle-left
    "bg-blue-200", // Light blue - Middle-right
    "bg-blue-200", // Light blue - Bottom-center
  ];

  return (
    <section
      ref={sectionRef}
      className="h-screen relative overflow-hidden font-sans bg-white flex items-center justify-center"
    >
      {/* Scattered User Avatars - Organic Arrangement */}
      {avatarPositions.map((position, index) => {
        const animatedTransform = getAnimatedTransform(
          position,
          scrollProgress
        );
        return (
          <div
            key={index}
            className={`absolute ${position.size} ${avatarStyles[index]} rounded-full flex items-center justify-center shadow-lg z-10 will-change-transform transition-transform duration-300 ease-out`}
            style={{
              ...(position.top && { top: position.top }),
              ...(position.bottom && { bottom: position.bottom }),
              ...(position.left && { left: position.left }),
              ...(position.right && { right: position.right }),
              transform: animatedTransform,
            }}
          >
            {/* Avatar image */}
            <img
              src={position.image}
              alt={`User avatar ${index + 1}`}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        );
      })}

      {/* Central Text Block */}
      <div className="relative z-20 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-semibold tracking-tight text-[#292929] mb-6 leading-17">
          Trusted by 50,000+
          <br />
          <span className="inline-block ml-4 md:ml-8 lg:ml-12">Users</span>
        </h2>
        <p className="text-base  text-[#828282] max-w-2xl mx-auto leading-relaxed">
          Join the growing community of Payer trusted <br /> for its reliability
          and security.
        </p>
      </div>
    </section>
  );
}
