"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { roles } from "@/lib/data";
import { getInitialTheme, type SpiderTheme } from "@/lib/theme";

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

function RoleCycler({ isSymbiote }: { isSymbiote: boolean }) {
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
          className={`absolute left-0 top-0 whitespace-nowrap font-mono ${
            isSymbiote
              ? "text-red-400 drop-shadow-[0_0_8px_rgba(220,38,38,0.7)]"
              : "text-[#a31515] drop-shadow-sm"
          }`}
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
  const [theme, setTheme] = useState<SpiderTheme>("classic");

  useEffect(() => {
    setTheme(getInitialTheme());

    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ theme: SpiderTheme }>;
      if (customEvent.detail?.theme) {
        setTheme(customEvent.detail.theme);
      }
    };
    window.addEventListener("spider-theme-change", handleThemeChange);
    return () => window.removeEventListener("spider-theme-change", handleThemeChange);
  }, []);

  const isSymbiote = theme === "symbiote";

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

  // Spotlight mask cutout when user is hovering/touching to unmask
  const maskStyle = isHovered
    ? {
        WebkitMaskImage: `radial-gradient(circle ${maskSize}px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, transparent 35%, black 65%, black 100%)`,
        maskImage: `radial-gradient(circle ${maskSize}px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, transparent 35%, black 65%, black 100%)`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
      }
    : undefined;

  return (
    <div
      className={`relative w-full flex flex-col overflow-hidden transition-colors duration-500 ${
        isSymbiote ? "bg-[#07080c]" : "bg-[#fafafa]"
      }`}
    >
      {/* Hero Canvas Section */}
      <section
        id="top"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsHovered(false)}
        className={`relative w-full min-h-[100dvh] sm:min-h-[92vh] lg:min-h-screen overflow-hidden flex items-center justify-center sm:justify-start cursor-crosshair pt-20 sm:pt-28 pb-10 sm:pb-16 px-4 sm:px-6 md:px-12 lg:px-20 transition-colors duration-500 ${
          isSymbiote ? "bg-[#07080c]" : "bg-[#fafafa]"
        }`}
      >
        {/* Layer 1 (Bottom): Prince Albert Unmasked in Suit */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <Image
            src={
              isSymbiote
                ? "/spiderman/prince-symbiote-suit.png"
                : "/spiderman/prince-hero-suit.png"
            }
            alt="Prince Albert in Spider-Man Suit"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_14%] sm:object-[55%_25%] md:object-[60%_30%] lg:object-[66%_38%] scale-[1.08] sm:scale-100 origin-[50%_18%]"
          />
        </div>

        {/* Layer 2 (Top): Spider-Man Mask with Cursor/Touch Spotlight Reveal */}
        <div
          style={maskStyle}
          className="absolute inset-0 pointer-events-none z-20 overflow-hidden"
        >
          <Image
            src={
              isSymbiote
                ? "/spiderman/symbiote-spiderman.png"
                : "/spiderman/image-1.png"
            }
            alt={isSymbiote ? "Black Suit Symbiote Spider-Man" : "Spider-Man Masked"}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_14%] sm:object-[55%_25%] md:object-[60%_30%] lg:object-[66%_38%] scale-[1.08] sm:scale-100 origin-[50%_18%]"
          />
        </div>

        {/* Spotlight Ring in Symbiote mode */}
        {isHovered && isSymbiote && (
          <div
            className="absolute inset-0 pointer-events-none z-[22]"
            style={{
              background: `radial-gradient(circle ${maskSize}px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, transparent 70%, rgba(220, 38, 38, 0.4) 85%, transparent 100%)`,
            }}
          />
        )}

        {/* Spider Web Corner Overlays */}
        <div className="absolute inset-0 pointer-events-none z-[25] overflow-hidden">
          {/* Top-left web (anchored behind logo) */}
          <div
            className={`absolute top-0 left-0 w-44 h-44 sm:w-56 sm:h-56 md:w-[420px] md:h-[420px] -translate-x-[14%] -translate-y-[14%] transition-all duration-500 ${
              isSymbiote
                ? "opacity-30 mix-blend-screen invert brightness-125"
                : "opacity-50 sm:opacity-40 mix-blend-multiply"
            }`}
          >
            <Image
              src="/spiderman/web1.png"
              alt="Spider Web Top"
              fill
              sizes="(max-width: 768px) 220px, 420px"
              className="object-contain"
            />
          </div>
          {/* Bottom-right web */}
          <div
            className={`absolute bottom-0 right-0 w-48 h-48 sm:w-60 sm:h-60 md:w-[500px] md:h-[500px] translate-x-[12%] translate-y-[12%] transition-all duration-500 ${
              isSymbiote
                ? "opacity-30 mix-blend-screen invert brightness-125"
                : "opacity-35 sm:opacity-40 mix-blend-multiply"
            }`}
          >
            <Image
              src="/spiderman/web1.png"
              alt="Spider Web Bottom"
              fill
              sizes="(max-width: 768px) 240px, 500px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-30 max-w-xl lg:max-w-2xl w-full flex flex-col items-center text-center sm:items-start sm:text-left gap-2 sm:gap-4 drop-shadow-sm">
          {/* Friendly Neighborhood Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center justify-center gap-2 font-bold uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.16em] sm:tracking-[0.2em] transition-colors ${
              isSymbiote
                ? "text-red-400 drop-shadow-[0_0_8px_rgba(220,38,38,0.6)]"
                : "text-[#b91c1c]"
            }`}
          >
            <Image
              src="/spiderman/spydy.png"
              alt="Spider"
              width={20}
              height={20}
              style={{ width: "auto", height: "auto" }}
              className={`hidden sm:inline-block w-4 h-4 sm:w-5 sm:h-5 object-contain drop-shadow-sm shrink-0 ${
                isSymbiote ? "brightness-200" : "brightness-95"
              }`}
            />
            <span>Your Friendly Neighborhood Engineer</span>
          </motion.div>

          {/* Comic Header Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={`text-[3.15rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black tracking-tighter leading-[0.88] uppercase italic transition-colors ${
              isSymbiote ? "text-white" : "text-gray-950"
            }`}
            style={{
              textShadow: isSymbiote
                ? "3px 3px 0px #dc2626, 6px 6px 0px #7f1d1d, 0 0 25px rgba(220,38,38,0.35)"
                : "3px 3px 0px #ef4444, 6px 6px 0px #a31515",
            }}
          >
            PRINCE
            <br />
            ALBERT.
          </motion.h1>

          {/* Animated Role Cycler (Desktop / Tablet) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`hidden sm:block mt-1 sm:mt-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-colors ${
              isSymbiote ? "text-gray-200" : "text-gray-800"
            }`}
          >
            <span className={isSymbiote ? "text-red-500 mr-2" : "text-gray-500 mr-2"}>
              &gt;
            </span>
            <RoleCycler isSymbiote={isSymbiote} />
          </motion.div>

          {/* Description (Desktop / Tablet) */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`hidden sm:block mt-1 sm:mt-2 max-w-[48ch] text-sm sm:text-base md:text-lg leading-relaxed font-medium transition-colors ${
              isSymbiote ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Full-stack developer with production experience across React.js,
            Node.js/Express, and SQL architectures. Founder of{" "}
            <span
              className={`font-bold underline decoration-2 underline-offset-4 ${
                isSymbiote
                  ? "text-white decoration-red-500"
                  : "text-gray-950 decoration-[#a31515]"
              }`}
            >
              Lumen Academy
            </span>{" "}
            and published author in{" "}
            <span
              className={`font-bold italic ${
                isSymbiote ? "text-white" : "text-gray-950"
              }`}
            >
              BMC Research Notes (Springer Nature)
            </span>
            .
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 sm:mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <a
              href="#work"
              className={`w-full max-w-[260px] sm:w-auto inline-flex items-center justify-center rounded-lg border px-6 sm:px-8 py-3.5 font-sans sm:font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-1 cursor-pointer text-center ${
                isSymbiote
                  ? "border-red-600 bg-red-600 hover:bg-red-700 shadow-[0_0_20px_rgba(220,38,38,0.45)] hover:shadow-[0_0_25px_rgba(220,38,38,0.7)]"
                  : "border-[#a31515] bg-[#991414] sm:bg-[#a31515] hover:bg-[#7a0f0f] shadow-[0_6px_20px_rgba(163,21,21,0.35)] hover:shadow-[0_10px_25px_rgba(163,21,21,0.6)]"
              }`}
            >
              Explore Projects
            </a>

            <a
              href="/Prince_Albert_Resume.pdf"
              download="Prince_Albert_Resume.pdf"
              className={`group w-full max-w-[260px] sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-lg border px-5 sm:px-6 py-3.5 font-sans sm:font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer text-center ${
                isSymbiote
                  ? "border-gray-700/80 bg-[#121420] hover:bg-[#1b1f32] hover:border-gray-500 shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
                  : "border-slate-800/80 bg-[#0e1626] sm:bg-gray-900 hover:bg-black hover:shadow-xl"
              }`}
            >
              <svg
                className="h-4 w-4 fill-current transition-transform group-hover:scale-110 shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-7 2v2h14v-2H5z" />
              </svg>
              <span>SDE_Resume.pdf</span>
            </a>

            <a
              href="https://github.com/Prince121711"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex items-center justify-center gap-2 rounded-lg border px-4 sm:px-5 py-3 sm:py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer text-center ${
                isSymbiote
                  ? "border-gray-700/80 bg-[#151825] text-white hover:text-red-400 hover:border-red-500 shadow-sm"
                  : "border-gray-300 bg-white/90 backdrop-blur-sm text-gray-800 hover:border-[#a31515] hover:text-[#a31515]"
              }`}
            >
              <span>GitHub ↗</span>
            </a>
          </motion.div>

          {/* Location & Hint (Desktop / Tablet) */}
          <div className="hidden sm:flex mt-3 sm:mt-4 flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-mono tracking-wider uppercase">
            <span className={isSymbiote ? "text-gray-400" : "text-gray-600"}>
              📍 Salem, Tamil Nadu, India
            </span>
            <span className={isSymbiote ? "text-gray-600" : "text-gray-400"}>•</span>
            <span
              className={
                isSymbiote
                  ? "text-red-400 font-semibold animate-pulse drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]"
                  : "text-[#a31515] font-semibold animate-pulse"
              }
            >
              ⚡ Hover mouse over hero to unmask
            </span>
          </div>
        </div>

        {/* Floating Developer Badge at Bottom Right */}
        <div
          className={`hidden xl:flex absolute bottom-8 right-12 z-30 items-center gap-3 rounded-2xl backdrop-blur-md px-5 py-3 text-white transition-all duration-300 ${
            isSymbiote
              ? "bg-black/90 border border-red-600/50 shadow-[0_0_20px_rgba(220,38,38,0.3)]"
              : "bg-gray-900/90 border border-red-900/50 shadow-[0_8px_25px_rgba(0,0,0,0.35)]"
          }`}
        >
          <Image
            src="/spiderman/spydy.png"
            alt="Spider badge"
            width={20}
            height={20}
            style={{ width: "auto", height: "auto" }}
            className={`h-5 w-5 object-contain ${
              isSymbiote ? "brightness-200" : "brightness-150"
            }`}
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
      <section
        className={`relative w-full h-32 sm:h-40 md:h-48 overflow-hidden flex items-center justify-center z-40 my-0 sm:my-2 transition-colors duration-500 ${
          isSymbiote ? "bg-[#07080c]" : "bg-white"
        }`}
      >
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
                  style={{ width: "auto", height: "auto" }}
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
                  style={{ width: "auto", height: "auto" }}
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
