"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { roles } from "@/lib/data";

const marqueeItems = [
  "FULL STACK DEVELOPER",
  "REACT.JS & NEXT.JS",
  "NODE.JS & EXPRESS",
  "SQL & POSTGRESQL",
  "FOUNDER, LUMEN ACADEMY",
  "AI & DATA SCIENCE (8.3 CGPA)",
  "SPRINGER NATURE AUTHOR",
  "REST APIS & FASTAPI",
];

function RoleCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-0 whitespace-nowrap text-[#a31515] drop-shadow-sm font-mono"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 800, y: 380 });
  const [targetPos, setTargetPos] = useState({ x: 800, y: 380 });
  const [maskSize, setMaskSize] = useState(200);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth mouse/touch interpolation loop for fluid spotlight motion
  useEffect(() => {
    let animId: number;
    const updateMotion = () => {
      setMousePos((prev) => {
        const dx = targetPos.x - prev.x;
        const dy = targetPos.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animId = requestAnimationFrame(updateMotion);
    };
    animId = requestAnimationFrame(updateMotion);
    return () => cancelAnimationFrame(animId);
  }, [targetPos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTargetPos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setMaskSize(320);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMaskSize(200);
  };

  // Touch event handlers for mobile unmasking
  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    if (!sectionRef.current || !e.touches[0]) return;
    setIsHovered(true);
    setMaskSize(220);
    const rect = sectionRef.current.getBoundingClientRect();
    setTargetPos({
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    if (!sectionRef.current || !e.touches[0]) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setTargetPos({
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    });
  };

  const maskStyle = {
    WebkitMaskImage: `radial-gradient(circle ${maskSize}px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, transparent 40%, black 72%)`,
    maskImage: `radial-gradient(circle ${maskSize}px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, transparent 40%, black 72%)`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
  };

  return (
    <div className="relative w-full flex flex-col bg-white overflow-hidden">
      {/* Hero Canvas Section */}
      <section
        id="top"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className="relative w-full min-h-[90vh] sm:min-h-[92vh] lg:min-h-screen overflow-hidden flex items-center cursor-crosshair pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 lg:px-20"
      >
        {/* Layer 1 (Bottom): Prince Albert Unmasked in Spider-Man Suit */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <Image
            src="/spiderman/prince-hero-suit.png"
            alt="Prince Albert in Spider-Man Suit"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_30%] sm:object-[64%_34%] lg:object-[66%_38%]"
          />
        </div>

        {/* Layer 2 (Top): Spider-Man Mask with Cursor/Touch Spotlight Reveal */}
        <div
          style={maskStyle}
          className="absolute inset-0 pointer-events-none z-20 overflow-hidden"
        >
          <Image
            src="/spiderman/image-1.png"
            alt="Spider-Man Masked"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_30%] sm:object-[64%_34%] lg:object-[66%_38%]"
          />
        </div>

        {/* Soft protective gradient on tablet/mobile so text is effortlessly readable */}
        <div className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-r from-white/95 via-white/85 to-transparent sm:via-white/75 lg:hidden" />

        {/* Spider Web Corner Overlays */}
        <div className="absolute inset-0 pointer-events-none z-[25] overflow-hidden">
          <div className="absolute top-0 left-0 w-36 h-36 sm:w-56 sm:h-56 md:w-[420px] md:h-[420px] -translate-x-1/4 -translate-y-1/4 opacity-30 sm:opacity-40 mix-blend-multiply animate-spin-slow">
            <Image
              src="/spiderman/web1.png"
              alt="Spider Web Top"
              fill
              sizes="(max-width: 768px) 220px, 420px"
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-60 sm:h-60 md:w-[500px] md:h-[500px] translate-x-1/4 translate-y-1/4 opacity-30 sm:opacity-40 mix-blend-multiply animate-spin-slow-reverse">
            <Image
              src="/spiderman/web1.png"
              alt="Spider Web Bottom"
              fill
              sizes="(max-width: 768px) 240px, 500px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Hero Content Container (Left-aligned, leaving the center-right character clearly visible) */}
        <div className="relative z-30 max-w-xl lg:max-w-2xl w-full flex flex-col gap-3 sm:gap-4 drop-shadow-sm">
          {/* Friendly Neighborhood Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[#a31515] font-bold uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.16em] sm:tracking-[0.2em]"
          >
            <Image
              src="/spiderman/spydy.png"
              alt="Spider"
              width={20}
              height={20}
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain drop-shadow-sm brightness-95 shrink-0"
            />
            <span className="truncate">Your Friendly Neighborhood Engineer</span>
          </motion.div>

          {/* Comic Header Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black tracking-tighter leading-[0.92] uppercase italic"
            style={{
              textShadow: "3px 3px 0px #ef4444, 6px 6px 0px #a31515",
            }}
          >
            PRINCE
            <br />
            ALBERT.
          </motion.h1>

          {/* Animated Role Cycler */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-1 sm:mt-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-800"
          >
            <span className="text-gray-500 mr-2">&gt;</span>
            <RoleCycler />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-1 sm:mt-2 max-w-[48ch] text-sm sm:text-base md:text-lg leading-relaxed text-gray-800 font-medium"
          >
            Full-stack developer with production experience across React.js,
            Node.js/Express, and SQL architectures. Founder of{" "}
            <span className="font-bold text-gray-950 underline decoration-[#a31515] decoration-2 underline-offset-4">
              Lumen Academy
            </span>{" "}
            and published author in{" "}
            <span className="font-bold text-gray-950 italic">
              BMC Research Notes (Springer Nature)
            </span>
            .
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-4 sm:mt-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-lg border border-[#a31515] bg-[#a31515] px-6 sm:px-8 py-3 sm:py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_6px_20px_rgba(163,21,21,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#7a0f0f] hover:shadow-[0_10px_25px_rgba(163,21,21,0.6)] cursor-pointer text-center"
            >
              Explore Projects
            </a>

            <a
              href="/Prince_Albert_Resume.pdf"
              download="Prince_Albert_Resume.pdf"
              className="group inline-flex items-center justify-center gap-2.5 rounded-lg border border-gray-900 bg-gray-900 px-5 sm:px-6 py-3 sm:py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-xl cursor-pointer text-center"
            >
              <svg
                className="h-4 w-4 fill-current transition-transform group-hover:scale-110 shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              <span>Resume.pdf</span>
            </a>

            <a
              href="https://github.com/Prince121711"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white/90 backdrop-blur-sm px-4 sm:px-5 py-3 sm:py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-[#a31515] hover:text-[#a31515] hover:shadow-md cursor-pointer text-center"
            >
              <span>GitHub ↗</span>
            </a>
          </motion.div>

          {/* Location & Hint */}
          <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-mono tracking-wider text-gray-600 uppercase">
            <span>📍 Salem, Tamil Nadu, India</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[#a31515] font-semibold animate-pulse">
              <span className="hidden sm:inline">⚡ Hover mouse over hero to unmask</span>
              <span className="sm:hidden">⚡ Drag finger to unmask</span>
            </span>
          </div>
        </div>

        {/* Floating Developer Badge at Bottom Right */}
        <div className="hidden xl:flex absolute bottom-8 right-12 z-30 items-center gap-3 rounded-2xl bg-gray-900/90 backdrop-blur-md border border-red-900/50 px-5 py-3 text-white shadow-[0_8px_25px_rgba(0,0,0,0.35)]">
          <Image
            src="/spiderman/spydy.png"
            alt="Spider badge"
            width={20}
            height={20}
            className="h-5 w-5 object-contain brightness-200"
          />
          <div>
            <p className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider">
              Prince Albert • Full Stack Dev
            </p>
            <p className="font-mono text-[11px] text-gray-300">
              React.js • Node.js • PostgreSQL • AI
            </p>
          </div>
        </div>
      </section>

      {/* Dual Crossed Slanted Marquee Banners */}
      <section className="relative w-full h-32 sm:h-40 md:h-48 bg-white overflow-hidden flex items-center justify-center z-40 my-0 sm:my-2">
        {/* Ribbon 1: Red Ribbon (rotated 3.5deg) */}
        <div className="absolute w-[130vw] -left-[15vw] h-10 sm:h-12 md:h-16 bg-[#a31515] text-white border-y-[3px] border-black rotate-[3.5deg] -translate-y-3 sm:-translate-y-4 md:-translate-y-5 shadow-[0_10px_20px_rgba(0,0,0,0.35)] z-20 flex items-center overflow-hidden">
          <div className="flex items-center h-full w-max animate-marquee">
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div key={idx} className="flex items-center h-full shrink-0">
                <span className="mx-3 sm:mx-6 text-xs sm:text-sm md:text-base lg:text-lg font-black uppercase italic tracking-widest whitespace-nowrap drop-shadow-sm">
                  {item}
                </span>
                <Image
                  src={idx % 2 === 0 ? "/spiderman/spydy.png" : "/spiderman/web1.png"}
                  alt="Separator"
                  width={24}
                  height={24}
                  className="mx-2 sm:mx-4 h-3.5 sm:h-5 md:h-6 w-auto object-contain shrink-0 brightness-200"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Ribbon 2: Dark Ribbon (rotated -3.5deg) */}
        <div className="absolute w-[130vw] -left-[15vw] h-10 sm:h-12 md:h-16 bg-[#111111] text-[#a31515] border-y-[3px] border-[#a31515] rotate-[-3.5deg] translate-y-3 sm:translate-y-4 md:translate-y-5 shadow-[0_5px_15px_rgba(0,0,0,0.45)] z-10 flex items-center overflow-hidden">
          <div className="flex items-center h-full w-max animate-marquee-reverse">
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div key={idx} className="flex items-center h-full shrink-0">
                <span className="mx-3 sm:mx-6 text-xs sm:text-sm md:text-base lg:text-lg font-black uppercase italic tracking-widest whitespace-nowrap drop-shadow-[0_0_8px_rgba(220,38,38,0.6)]">
                  {item}
                </span>
                <Image
                  src={idx % 2 === 0 ? "/spiderman/web1.png" : "/spiderman/spydy.png"}
                  alt="Separator"
                  width={24}
                  height={24}
                  className="mx-2 sm:mx-4 h-3.5 sm:h-5 md:h-6 w-auto object-contain shrink-0 opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
