"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playThwipSound, playSpiderSenseSound } from "@/lib/soundEffects";

interface WebBurst {
  id: number;
  x: number;
  y: number;
}

export default function SpiderInteractions() {
  const [bursts, setBursts] = useState<WebBurst[]>([]);
  const [spiderSenseActive, setSpiderSenseActive] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const burstIdRef = useRef(0);

  // Trigger Spider-Sense tingle
  const triggerSpiderSense = useCallback(() => {
    setSpiderSenseActive(true);
    playSpiderSenseSound();
    setTimeout(() => {
      setSpiderSenseActive(false);
    }, 1800);
  }, []);

  // Keyboard shortcut: Alt + S or Option + S
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.altKey || e.metaKey) && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
        triggerSpiderSense();
      }
    };

    const handleCustomTrigger = () => {
      triggerSpiderSense();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("spider-sense-trigger", handleCustomTrigger);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("spider-sense-trigger", handleCustomTrigger);
    };
  }, [triggerSpiderSense]);

  // Global Click -> Spawn Web Burst
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Don't trigger on input typing
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;

      const newId = ++burstIdRef.current;
      setBursts((prev) => [...prev.slice(-6), { id: newId, x: e.clientX, y: e.clientY }]);
      playThwipSound();

      setTimeout(() => {
        setBursts((prev) => prev.filter((b) => b.id !== newId));
      }, 380);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  // Custom Cursor Mouse Tracker (Desktop only, passive & fast query)
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      if (!cursorVisible) setCursorVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        setIsHoveringClickable(
          Boolean(target.closest("a, button, input, textarea, [role='button'], .cursor-pointer"))
        );
      }
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorVisible]);

  return (
    <>
      {/* 1. Spider-Man Custom Web Cursor (Desktop Only) */}
      <div className="hidden lg:block pointer-events-none fixed inset-0 z-[100] overflow-hidden">
        {cursorVisible && (
          <div
            className="fixed top-0 left-0 transition-transform duration-75 ease-out"
            style={{
              transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`,
              willChange: "transform",
            }}
          >
            {/* Center dot */}
            <div
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ${
                isHoveringClickable
                  ? "w-2.5 h-2.5 bg-[#a31515] shadow-[0_0_8px_rgba(220,38,38,0.9)]"
                  : "w-1.5 h-1.5 bg-[#111111]"
              }`}
            />

            {/* Outer Web Reticle */}
            <div
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 ${
                isHoveringClickable
                  ? "w-8 h-8 border-[#a31515] rotate-45 scale-110 shadow-[0_0_12px_rgba(163,21,21,0.4)]"
                  : "w-6 h-6 border-gray-400/60 rotate-0 scale-100"
              }`}
            >
              {/* 4 Web Ticks */}
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-1.5 bg-[#a31515]" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1px] h-1.5 bg-[#a31515]" />
              <span className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-[1px] bg-[#a31515]" />
              <span className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-[1px] bg-[#a31515]" />
            </div>
          </div>
        )}
      </div>

      {/* 2. Web-Shooter Click Bursts ("THWIP!") */}
      <div className="pointer-events-none fixed inset-0 z-[90] overflow-hidden">
        {bursts.map((b) => (
          <div
            key={b.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: b.x, top: b.y }}
          >
            <motion.svg
              initial={{ scale: 0.2, opacity: 1, rotate: 0 }}
              animate={{ scale: 1.25, opacity: 0, rotate: 25 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              width="90"
              height="90"
              viewBox="0 0 100 100"
              className="overflow-visible"
            >
              {/* Radial Web Strands */}
              <line x1="50" y1="50" x2="50" y2="10" stroke="#a31515" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="50" y1="50" x2="90" y2="50" stroke="#a31515" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="50" y1="50" x2="50" y2="90" stroke="#a31515" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="50" y1="50" x2="10" y2="50" stroke="#a31515" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="50" y1="50" x2="78" y2="22" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="50" y1="50" x2="78" y2="78" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="50" y1="50" x2="22" y2="78" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="50" y1="50" x2="22" y2="22" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />

              {/* Connecting Web Arcs */}
              <circle cx="50" cy="50" r="16" fill="none" stroke="#a31515" strokeWidth="1.2" strokeDasharray="3 2" />
              <circle cx="50" cy="50" r="32" fill="none" stroke="#dc2626" strokeWidth="1" strokeDasharray="4 3" opacity="0.8" />

              {/* Center Web Node */}
              <circle cx="50" cy="50" r="3" fill="#a31515" />
            </motion.svg>
          </div>
        ))}
      </div>

      {/* 3. Spider-Sense Comic Tingle Easter Egg Overlay */}
      <AnimatePresence>
        {spiderSenseActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none fixed inset-0 z-[110] flex flex-col items-center justify-start pt-16 sm:pt-20 overflow-hidden"
          >
            {/* Comic Speedline Vignette */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background:
                  "radial-gradient(circle at center, transparent 40%, rgba(220, 38, 38, 0.4) 80%, rgba(163, 21, 21, 0.8) 100%)",
              }}
            />

            {/* Radiant Spider-Sense Zigzag Tingles (Top) */}
            <motion.div
              initial={{ scale: 0.7, y: -20, opacity: 0 }}
              animate={{ scale: [1, 1.15, 1], y: 0, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, repeat: 2 }}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Comic Tingle Waves SVG */}
              <svg viewBox="0 0 240 90" className="w-48 sm:w-56 md:w-60 h-auto overflow-visible filter drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]">
                {/* Yellow & Red Iconic Comic Tingles */}
                <path
                  d="M20 70 L45 20 L70 55 L95 10 L120 50 L145 10 L170 55 L195 20 L220 70"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 75 L55 25 L80 60 L105 15 L120 45 L135 15 L160 60 L185 25 L210 75"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Comic Sound Badge */}
              <motion.div
                initial={{ scale: 0.8, rotate: -3 }}
                animate={{ scale: 1, rotate: [ -3, 3, -2 ] }}
                className="mt-2 rounded-2xl bg-black/90 border-2 border-red-500 px-4 sm:px-6 py-2 sm:py-2.5 shadow-[0_0_30px_rgba(220,38,38,0.8)] backdrop-blur-md flex items-center gap-2 sm:gap-3"
              >
                <span className="text-base sm:text-xl">⚡</span>
                <span className="font-black italic uppercase tracking-wider text-white text-xs sm:text-sm md:text-base font-mono whitespace-nowrap">
                  SPIDER-SENSE TINGLING!
                </span>
                <span className="text-base sm:text-xl">⚡</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
