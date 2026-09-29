"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Image from "next/image";
import { playThwipSound } from "@/lib/soundEffects";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > 380);

      // Compute scroll percentage
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(1, Math.max(0, scrollY / docHeight)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    playThwipSound();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circumference for circular progress indicator (r = 21, circumference = 2 * PI * 21 ≈ 132)
  const strokeDashoffset = 132 - scrollProgress * 132;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-center group"
        >
          {/* Subtle hanging web thread stretching up */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 18 }}
            className="w-[1.5px] bg-gradient-to-t from-[#a31515] to-transparent pointer-events-none opacity-80"
          />

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Thwip! Back to top"
            className="relative flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-white/95 dark:bg-[#0f1018]/95 backdrop-blur-md border border-[#a31515]/30 dark:border-red-600/40 text-gray-900 dark:text-white shadow-[0_6px_25px_rgba(163,21,21,0.28)] transition-all duration-300 hover:scale-110 hover:border-[#a31515] hover:shadow-[0_8px_30px_rgba(220,38,38,0.5)] cursor-pointer"
          >
            {/* Circular Progress Ring */}
            <svg
              className="absolute inset-0 h-full w-full -rotate-90 pointer-events-none p-[2px]"
              viewBox="0 0 48 48"
            >
              <circle
                cx="24"
                cy="24"
                r="21"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-gray-200 dark:text-zinc-800"
              />
              <circle
                cx="24"
                cy="24"
                r="21"
                fill="none"
                stroke="#a31515"
                strokeWidth="2.5"
                strokeDasharray="132"
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-150"
              />
            </svg>

            {/* Spider Emblem + Up Arrow */}
            <div className="relative flex flex-col items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5">
              <span className="text-[10px] sm:text-xs font-black text-[#a31515] leading-none mb-0.5">
                ▲
              </span>
              <Image
                src="/spiderman/spydy.png"
                alt="Spider"
                width={16}
                height={16}
                style={{ width: "auto", height: "auto" }}
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 object-contain brightness-105 group-hover:scale-110 transition-transform"
              />
            </div>
          </button>

          {/* Micro Tooltip */}
          <span className="pointer-events-none mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-md bg-black/90 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white shadow-md whitespace-nowrap">
            Thwip! Top
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
