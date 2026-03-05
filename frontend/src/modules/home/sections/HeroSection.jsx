"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TOTAL_CARDS = 12;
const MAX_SCROLL = 2200;
const CARD_WIDTH = 66;
const CARD_HEIGHT = 96;

const CARD_IMAGES = [
  "/banner1.png",
  "/banner2.png",
  "/Frame9991171276918.png",
  "/Frame78901171276870.png",
  "/aboutherophoneimg.png",
  "/imgi_30_8nsi4FFv3MDWMqrJo5thcG02qBk.jpg",
  "/imgi_29_reP9x3qZdQloSNzp8Jjaq0XDiyg.jpg",
  "/imgi_28_VtGsyJs2affVK3ADnnlSoxNph30.jpg",
  "/imgi_27_J43YEwKdcm8Se3yO2hv6heQUr0.jpg",
  "/imgi_26_kizUz1tXR7Z3c1Li33hw1dmhjk.jpg",
];

const lerp = (start, end, t) => start * (1 - t) + end * t;
const seeded = (value) => {
  const raw = Math.sin(value * 9999.91) * 43758.5453;
  return raw - Math.floor(raw);
};

function MorphCard({ src, index, target }) {
  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{ type: "spring", stiffness: 45, damping: 16 }}
      style={{
        position: "absolute",
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      }}
      className="group pointer-events-auto"
    >
      <div className="relative h-full w-full transition-transform duration-200 group-hover:scale-[1.03]">
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-xl border border-white/15 shadow-[0_8px_18px_rgba(0,0,0,0.22)]"
        >
          <img
            src={src}
            alt={`card-${index}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/16 transition-colors group-hover:bg-black/6" />
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const [phase, setPhase] = useState("scatter");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const scrollRef = useRef(0);

  const virtualScroll = useMotionValue(0);

  const morphProgress = useTransform(virtualScroll, [0, 650], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 45, damping: 20 });

  const scrollRotate = useTransform(virtualScroll, [650, MAX_SCROLL], [0, 300]);
  const smoothScrollRotate = useSpring(scrollRotate, {
    stiffness: 45,
    damping: 20,
  });

  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    observer.observe(node);
    setContainerSize({ width: node.offsetWidth, height: node.offsetHeight });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const onWheel = (event) => {
      const delta = event.deltaY;
      const atTopAndGoingUp = scrollRef.current <= 0 && delta < 0;
      const atBottomAndGoingDown = scrollRef.current >= MAX_SCROLL && delta > 0;

      if (atTopAndGoingUp || atBottomAndGoingDown) {
        return;
      }

      event.preventDefault();
      const next = Math.min(Math.max(scrollRef.current + delta, 0), MAX_SCROLL);
      scrollRef.current = next;
      virtualScroll.set(next);
    };

    let touchY = 0;

    const onTouchStart = (event) => {
      touchY = event.touches[0].clientY;
    };

    const onTouchMove = (event) => {
      const currentY = event.touches[0].clientY;
      const delta = touchY - currentY;
      touchY = currentY;

      const atTopAndPullingDown = scrollRef.current <= 0 && delta < 0;
      const atBottomAndPushingUp = scrollRef.current >= MAX_SCROLL && delta > 0;

      if (atTopAndPullingDown || atBottomAndPushingUp) {
        return;
      }

      event.preventDefault();
      const next = Math.min(Math.max(scrollRef.current + delta, 0), MAX_SCROLL);
      scrollRef.current = next;
      virtualScroll.set(next);
    };

    node.addEventListener("wheel", onWheel, { passive: false });
    node.addEventListener("touchstart", onTouchStart, { passive: false });
    node.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      node.removeEventListener("wheel", onWheel);
      node.removeEventListener("touchstart", onTouchStart);
      node.removeEventListener("touchmove", onTouchMove);
    };
  }, [virtualScroll]);

  useEffect(() => {
    const unsubMorph = smoothMorph.on("change", setMorphValue);
    const unsubRotate = smoothScrollRotate.on("change", setRotateValue);

    return () => {
      unsubMorph();
      unsubRotate();
    };
  }, [smoothMorph, smoothScrollRotate]);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("line"), 450);
    const t2 = setTimeout(() => setPhase("circle"), 1900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const scatterPositions = useMemo(
    () =>
      Array.from({ length: TOTAL_CARDS }).map((_, i) => ({
        x: (seeded(i + 1) - 0.5) * 1500,
        y: (seeded(i + 101) - 0.5) * 1000,
        rotation: (seeded(i + 1001) - 0.5) * 180,
        scale: 0.6,
        opacity: 0,
      })),
    [],
  );

  const contentOpacity = useTransform(smoothMorph, [0.72, 1], [0, 1]);
  const contentY = useTransform(smoothMorph, [0.72, 1], [24, 0]);
  const scrollHintOpacity = useTransform(smoothMorph, [0, 0.6, 1], [1, 0.7, 0]);

  return (
    <section
      id="hero-section"
      ref={containerRef}
      className="relative h-screen min-h-[680px] w-full overflow-hidden bg-white font-sans"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.12)_0%,transparent_35%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1)_0%,transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-white/35" />

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        {Array.from({ length: TOTAL_CARDS }).map((_, i) => {
          let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

          if (phase === "scatter") {
            target = scatterPositions[i];
          } else if (phase === "line") {
            const lineSpacing = 72;
            const totalWidth = TOTAL_CARDS * lineSpacing;
            target = {
              x: i * lineSpacing - totalWidth / 2,
              y: 0,
              rotation: 0,
              scale: 1,
              opacity: 1,
            };
          } else {
            const isMobile = containerSize.width < 768;
            const minDimension = Math.min(
              containerSize.width,
              containerSize.height,
            );

            const circleRadius = Math.min(minDimension * 0.33, 330);
            const circleAngle = (i / TOTAL_CARDS) * 360;
            const circleRad = (circleAngle * Math.PI) / 180;
            const circlePos = {
              x: Math.cos(circleRad) * circleRadius,
              y: Math.sin(circleRad) * circleRadius,
              rotation: circleAngle + 90,
            };

            const baseRadius = Math.min(
              containerSize.width,
              containerSize.height * 1.5,
            );
            const arcRadius = baseRadius * (isMobile ? 1.45 : 1.15);
            const arcApexY = containerSize.height * (isMobile ? 0.36 : 0.26);
            const arcCenterY = arcApexY + arcRadius;

            const spread = isMobile ? 100 : 130;
            const startAngle = -90 - spread / 2;
            const step = spread / (TOTAL_CARDS - 1);

            const progress = Math.min(Math.max(rotateValue / 360, 0), 1);
            const boundedRotation = -progress * spread * 0.82;

            const arcAngle = startAngle + i * step + boundedRotation;
            const arcRad = (arcAngle * Math.PI) / 180;

            const arcPos = {
              x: Math.cos(arcRad) * arcRadius,
              y: Math.sin(arcRad) * arcRadius + arcCenterY,
              rotation: arcAngle + 90,
              scale: isMobile ? 1.35 : 1.7,
            };

            target = {
              x: lerp(circlePos.x, arcPos.x, morphValue),
              y: lerp(circlePos.y, arcPos.y, morphValue),
              rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
              scale: lerp(1, arcPos.scale, morphValue),
              opacity: 1,
            };
          }

          return (
            <MorphCard
              key={i}
              index={i}
              src={CARD_IMAGES[i % CARD_IMAGES.length]}
              target={target}
            />
          );
        })}
      </div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="pointer-events-none absolute inset-0 z-20 flex items-center"
      >
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="w-full max-w-3xl text-left">
            <div className="mb-4 flex items-center sm:mb-5 md:mb-6">
              <div className="flex items-center gap-2 rounded-full border border-black/20 bg-white/80 px-2 py-2 shadow-xl backdrop-blur-md sm:gap-3 sm:px-2.5 sm:py-2.5 md:gap-4 md:px-3 md:py-3 lg:gap-6">
                <div className="flex -space-x-2 sm:-space-x-3 md:-space-x-4">
                  <img
                    src="RatingPill1.png"
                    alt=""
                    className="h-5 w-5 rounded-full object-cover sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
                  />
                  <img
                    src="RatingPill2.png"
                    alt=""
                    className="h-5 w-5 rounded-full object-cover sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
                  />
                  <img
                    src="RatingPill3.png"
                    alt=""
                    className="h-5 w-5 rounded-full object-cover sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
                  />
                </div>
                <p className="whitespace-nowrap text-[10px] font-normal text-black sm:text-xs md:text-sm lg:text-[14px]">
                  <span className="font-semibold">4.9/5</span>{" "}
                  <span className="hidden sm:inline">from 4268 customers</span>
                  <span className="sm:hidden">from 4268</span>
                </p>
                <div className="mr-1 text-lg text-yellow-400 sm:mr-1.5 sm:text-xl md:mr-2 md:text-2xl">
                  *
                </div>
              </div>
            </div>

            <h1 className="mb-4 text-3xl font-bold leading-tight text-black sm:mb-5 sm:text-4xl md:mb-6 md:text-5xl lg:text-[54px]">
              Innovating Smarter <br className="hidden sm:block" /> Parking
              Experiences
            </h1>
            <p className="mb-4 max-w-2xl text-sm leading-relaxed text-black sm:mb-5 sm:text-base md:mb-6 md:text-lg lg:text-[18px]">
              We transform your parking into a fully automated, high-performing{" "}
              <br className="hidden md:block" />
              asset with smart systems, valet on demand, and digital operations.
            </p>
            <h4 className="mb-4 text-sm font-bold text-black sm:mb-5 sm:text-base md:mb-6 md:text-lg lg:text-[18px]">
              Smart Parking. Real Revenue. Zero Stress.
            </h4>
            <button className="pointer-events-auto w-full cursor-pointer rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98] sm:w-auto sm:px-7 sm:text-[15px] md:px-8 md:py-3 md:text-[16px]">
              Book A Call
            </button>
          </div>
        </div>
      </motion.div>

      <motion.p
        style={{ opacity: scrollHintOpacity }}
        className="pointer-events-none absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-xs font-semibold tracking-[0.24em] text-black/60"
      >
        SCROLL TO EXPLORE
      </motion.p>
    </section>
  );
}
