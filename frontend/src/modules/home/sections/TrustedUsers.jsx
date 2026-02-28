"use client";

import { useState, useEffect, useRef } from "react";

export default function TrustedUsers() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [screenSize, setScreenSize] = useState("mobile");

  /* -----------------------------
     Detect Screen Size
  ------------------------------*/
  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setScreenSize("lg");
      else if (width >= 768) setScreenSize("md");
      else if (width >= 640) setScreenSize("sm");
      else setScreenSize("mobile");
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  /* -----------------------------
     Scroll Animation Logic
  ------------------------------*/
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      const sectionBottom = sectionTop + sectionHeight;
      const sectionCenter = sectionTop + sectionHeight / 2;
      const viewportCenter = windowHeight / 2;

      let progress = 0;

      if (sectionBottom > 0 && sectionTop < windowHeight) {
        if (sectionCenter <= viewportCenter) {
          progress = 1;
        } else {
          const distanceToCenter = sectionCenter - viewportCenter;
          const animationRange = windowHeight * 0.5;
          progress = Math.max(0, 1 - distanceToCenter / animationRange);
        }
      }

      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    handleScroll();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
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

  /* -----------------------------
     Transform Toward Center
  ------------------------------*/
  const getAnimatedTransform = (position, progress) => {
    const centerX = 50;
    const centerY = 50;

    let currentX = 50;
    let currentY = 50;

    if (position.left) currentX = parseFloat(position.left);
    else if (position.right) currentX = 100 - parseFloat(position.right);

    if (position.top) currentY = parseFloat(position.top);
    else if (position.bottom) currentY = 100 - parseFloat(position.bottom);

    const deltaX = centerX - currentX;
    const deltaY = centerY - currentY;

    const moveX = deltaX * progress;
    const moveY = deltaY * progress;

    let transforms = [];
    if (position.transform && position.transform !== "none") {
      transforms.push(position.transform);
    }

    transforms.push(`translate3d(${moveX}%, ${moveY}%, 0)`);

    return transforms.join(" ");
  };

  /* -----------------------------
     Avatar Positions (Responsive)
  ------------------------------*/
  const avatarPositions = [
    {
      position: {
        mobile: { top: "15%", left: "5%" },
        sm: { top: "8%", left: "12%" },
        md: { top: "8.5%", left: "12%" },
        lg: { top: "8.5%", left: "12%" },
      },
      size: "w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20",
      image: "/imgi_52_jrKxnhujFruOStY7hW7O5YxmU.jpg",
      transform: "none",
    }, // Top-left
    {
      position: {
        mobile: { top: "5%", left: "40%" },
        sm: { top: "8%", left: "46.7%" },
        md: { top: "8.5%", left: "46.7%" },
        lg: { top: "8.5%", left: "46.7%" },
      },
      size: "w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-22 lg:h-22",
      image: "/imgi_27_J43YEwKdcm8Se3yO2hv6heQUr0.jpg",
      transform: "translateX(-50%)",
    }, // Top-center
    {
      position: {
        mobile: { top: "18%", right: "5%" },
        sm: { top: "10%", right: "11%" },
        md: { top: "10%", right: "11%" },
        lg: { top: "10%", right: "11%" },
      },
      size: "w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-28 lg:h-28",
      image: "/imgi_26_kizUz1tXR7Z3c1Li33hw1dmhjk.jpg",
      transform: "none",
    }, // Top-right
    {
      position: {
        mobile: { top: "45%", left: "2%" },
        sm: { top: "52%", left: "7%" },
        md: { top: "52%", left: "7%" },
        lg: { top: "52%", left: "7%" },
      },
      size: "w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20",
      image: "/imgi_28_VtGsyJs2affVK3ADnnlSoxNph30.jpg",
      transform: "translateY(-50%)",
    }, // Middle-left
    {
      position: {
        mobile: { top: "65%", right: "5%" },
        sm: { top: "59%", right: "10%" },
        md: { top: "59%", right: "10%" },
        lg: { top: "59%", right: "10%" },
      },
      size: "w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20",
      image: "/imgi_30_8nsi4FFv3MDWMqrJo5thcG02qBk.jpg",
      transform: "translateY(-50%)",
    }, // Middle-right
    {
      position: {
        mobile: { bottom: "18%", left: "25%" },
        sm: { bottom: "18%", left: "30%" },
        md: { bottom: "18.5%", left: "30%" },
        lg: { bottom: "18.5%", left: "30%" },
      },
      size: "w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-24",
      image: "/imgi_105_cllTWXdcEdBHC7srBdSgfwmuDwE.jpg",
      transform: "translateX(-50%)",
    }, // Bottom-center-left
    {
      position: {
        mobile: { bottom: "12%", right: "25%" },
        sm: { bottom: "13%", right: "27%" },
        md: { bottom: "14%", right: "28%" },
        lg: { bottom: "14%", right: "28%" },
      },
      size: "w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-28 lg:h-28",
      image: "/imgi_6_4VlzVCyG6C8Z7yJCDs0BHRpzck.jpg",
      transform: "translateX(-50%)",
    }, // Bottom-center-right
  ];

  /* -----------------------------
     Render
  ------------------------------*/
  return (
    <section
      ref={sectionRef}
      className="min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:h-screen relative overflow-hidden font-sans bg-white flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-0"
    >
      {avatarPositions.map((item, index) => {
        const currentPosition =
          item.position[screenSize] || item.position.mobile;

        const animatedTransform = getAnimatedTransform(
          { ...currentPosition, transform: item.transform },
          scrollProgress
        );

        return (
          <div
            key={index}
            className={`absolute ${item.size} rounded-full flex items-center justify-center shadow-lg z-10`}
            style={{
              ...(currentPosition.top && { top: currentPosition.top }),
              ...(currentPosition.bottom && { bottom: currentPosition.bottom }),
              ...(currentPosition.left && { left: currentPosition.left }),
              ...(currentPosition.right && { right: currentPosition.right }),
              transform: animatedTransform,
            }}
          >
            <img
              src={item.image}
              alt={`User avatar ${index + 1}`}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        );
      })}

      <div className="relative z-20 text-center max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-[64px] font-semibold tracking-tight text-[#292929] mb-6">
          Trusted by 50,000+
          <br />
          <span className="inline-block ml-2 sm:ml-6 lg:ml-12">Users</span>
        </h2>
        <p className="text-sm sm:text-base text-[#828282] max-w-2xl mx-auto">
          Join the growing community of Payer trusted
          <br className="hidden sm:block" /> for its reliability and security.
        </p>
      </div>
    </section>
  );
}
