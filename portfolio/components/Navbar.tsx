"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { nav } from "@/lib/data";
import { setSoundEnabled, playClickSound } from "@/lib/soundEffects";
import { getInitialTheme, toggleSpiderTheme, applyTheme, SpiderTheme } from "@/lib/theme";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [soundOn, setSoundOn] = useState(false);
  const [theme, setTheme] = useState<SpiderTheme>("classic");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 30, mass: 0.3 });

  // Sound and Theme preference initialization
  useEffect(() => {
    const saved = localStorage.getItem("spider-sound-enabled");
    if (saved === "true") {
      setSoundOn(true);
      setSoundEnabled(true);
    }

    const currentTheme = getInitialTheme();
    setTheme(currentTheme);
    applyTheme(currentTheme);

    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ theme: SpiderTheme }>;
      if (customEvent.detail?.theme) {
        setTheme(customEvent.detail.theme);
      }
    };
    window.addEventListener("spider-theme-change", handleThemeChange);
    return () => window.removeEventListener("spider-theme-change", handleThemeChange);
  }, []);

  const toggleSound = () => {
    const nextState = !soundOn;
    setSoundOn(nextState);
    setSoundEnabled(nextState);
    localStorage.setItem("spider-sound-enabled", String(nextState));
    if (nextState) {
      setTimeout(() => playClickSound(), 50);
    }
  };

  const handleThemeToggle = () => {
    const nextTheme = toggleSpiderTheme(theme);
    setTheme(nextTheme);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    // Dispatch Spider-Sense easter egg
    window.dispatchEvent(new CustomEvent("spider-sense-trigger"));
    playClickSound();
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Active section detection
      const sections = ["work", "about", "skills", "experience", "certifications", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("top");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Spider-red scroll progress indicator */}
      <motion.div
        className="fixed left-0 top-0 z-[70] h-[3px] w-full origin-left bg-gradient-to-r from-[#a31515] via-red-500 to-[#a31515] shadow-[0_0_10px_rgba(220,38,38,0.8)]"
        style={{ scaleX: progress }}
      />

      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 ${
          scrolled || theme === "symbiote"
            ? "bg-black/90 backdrop-blur-md border-b border-red-900/50 py-3.5 shadow-[0_4px_30px_rgba(220,38,38,0.18)]"
            : "bg-transparent border-b border-transparent sm:bg-white/85 sm:backdrop-blur-sm sm:border-gray-200/70 py-4 sm:py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:px-12">
          {/* Logo with Spider-Sense Easter Egg trigger */}
          <div className="relative group">
            <button
              onClick={handleLogoClick}
              title="Click or press Alt+S for Spider-Sense!"
              className={`flex items-center text-xl sm:text-2xl font-black italic tracking-tighter uppercase transition-colors text-left cursor-pointer ${
                scrolled || theme === "symbiote" ? "text-white" : "text-gray-900"
              }`}
            >
              <span className="text-red-600 transition-transform duration-300 group-hover:scale-125">
                P
              </span>
              <span className="transition-colors group-hover:text-red-500">
                RINCE<span className="hidden sm:inline"> ALBERT</span>
                <span className="text-red-600">.</span>
              </span>
            </button>
            <span className="absolute -bottom-5 left-0 font-mono text-[9px] uppercase tracking-wider text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              ⚡ Click for Spider-Sense!
            </span>
          </div>

          {/* Desktop Nav Links with Active Indicator */}
          <ul className="hidden items-center gap-8 md:flex">
            {nav.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => playClickSound()}
                    className={`group relative text-xs font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${
                      isActive
                        ? "text-red-500 font-extrabold"
                        : scrolled
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-700 hover:text-[#a31515]"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)] transition-all duration-300 ease-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Action Buttons & Toggles (Desktop) */}
          <div className="hidden items-center gap-3 md:flex">
            {/* Symbiote (Black Suit) Theme Toggle Button */}
            <button
              onClick={handleThemeToggle}
              title={
                theme === "symbiote"
                  ? "Switch to Classic Red Suit (Light)"
                  : "Bond with Symbiote (Black Suit Mode)"
              }
              className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                theme === "symbiote"
                  ? "border-red-600/80 bg-red-950/50 text-red-200 shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:border-red-500"
                  : scrolled
                  ? "border-gray-700 text-gray-300 hover:text-white hover:border-gray-500"
                  : "border-gray-300 text-gray-700 hover:text-[#a31515] hover:border-[#a31515]"
              }`}
            >
              <span className="text-sm">{theme === "symbiote" ? "🕸️" : "🕷️"}</span>
              <span className="text-[10px] hidden lg:inline">
                {theme === "symbiote" ? "Symbiote" : "Classic Suit"}
              </span>
            </button>

            {/* Audio Toggle Button */}
            <button
              onClick={toggleSound}
              title={soundOn ? "Mute Spider-Man Audio" : "Enable Spider-Man Audio"}
              className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                soundOn
                  ? "border-[#a31515] bg-[#a31515]/10 text-red-500 shadow-[0_0_12px_rgba(220,38,38,0.3)] animate-pulse"
                  : scrolled
                  ? "border-gray-700 text-gray-400 hover:text-white hover:border-gray-500"
                  : "border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400"
              }`}
            >
              <span>{soundOn ? "🔊" : "🔇"}</span>
              <span className="text-[10px] hidden lg:inline">{soundOn ? "Audio ON" : "Audio OFF"}</span>
            </button>

            {/* Quick Resume Link */}
            <a
              href="/Prince_Albert_Resume.pdf"
              download="Prince_Albert_Resume.pdf"
              className={`hidden xl:inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                scrolled
                  ? "border-gray-700 text-gray-300 hover:text-white hover:border-gray-500"
                  : "border-gray-300 text-gray-700 hover:text-[#a31515] hover:border-[#a31515]"
              }`}
            >
              <span>Resume</span>
              <span className="text-red-500 font-black">↓</span>
            </a>

            {/* Get In Touch CTA */}
            <a
              href="#contact"
              onClick={() => playClickSound()}
              className="inline-flex items-center gap-2 rounded-lg border border-[#a31515] bg-[#a31515] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_15px_rgba(163,21,21,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7a0f0f] hover:shadow-[0_6px_20px_rgba(163,21,21,0.55)] cursor-pointer"
            >
              <Image
                src="/spiderman/spydy.png"
                alt="Spider"
                width={16}
                height={16}
                style={{ width: "auto", height: "auto" }}
                className="h-4 w-4 object-contain brightness-200"
              />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Mobile Clean Hamburger control (matches screenshot) */}
          <div className="flex items-center md:hidden">
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => {
                setMenuOpen((v) => !v);
                playClickSound();
              }}
              className="relative z-[80] flex h-10 w-10 flex-col items-end justify-center gap-[5px] p-2 focus:outline-none cursor-pointer"
            >
              <motion.span
                className={`h-[2.5px] w-6 rounded-full transition-all ${
                  menuOpen || scrolled || theme === "symbiote" ? "bg-slate-50" : "bg-gray-800"
                }`}
                animate={menuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className={`h-[2.5px] w-6 rounded-full transition-all ${
                  menuOpen || scrolled || theme === "symbiote" ? "bg-slate-50" : "bg-gray-800"
                }`}
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className={`h-[2.5px] w-6 rounded-full transition-all ${
                  menuOpen || scrolled || theme === "symbiote" ? "bg-slate-50" : "bg-gray-800"
                }`}
                animate={menuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] flex flex-col justify-between bg-black/95 px-6 sm:px-8 pb-8 pt-24 backdrop-blur-xl md:hidden overflow-y-auto gap-8"
          >
            {/* Background spider web decoration */}
            <div className="pointer-events-none absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 opacity-20">
              <Image
                src="/spiderman/web1.png"
                alt="Web"
                width={300}
                height={300}
                className="invert"
              />
            </div>

            <ul className="flex flex-col gap-6">
              {nav.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => {
                        setMenuOpen(false);
                        playClickSound();
                      }}
                      className={`flex items-center gap-3 text-2xl font-black italic tracking-tighter uppercase transition-colors ${
                        isActive ? "text-red-500" : "text-white hover:text-red-500"
                      }`}
                    >
                      <span className="text-[#a31515]">&gt;</span>
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-col gap-3.5 border-t border-gray-800 pt-5">
              {/* Symbiote / Classic Suit Mode */}
              <button
                onClick={handleThemeToggle}
                className={`flex items-center justify-center gap-2 rounded-lg border py-3 text-center font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                  theme === "symbiote"
                    ? "border-red-500/80 bg-red-950/40 text-red-200 shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                    : "border-gray-800 bg-gray-900/90 text-gray-300"
                }`}
              >
                <span>{theme === "symbiote" ? "🕸️ Suit: Symbiote Mode (Black)" : "🕷️ Suit: Classic Mode (Red)"}</span>
              </button>

              {/* Sound Toggle */}
              <button
                onClick={toggleSound}
                className="flex items-center justify-center gap-2 rounded-lg border border-gray-800 bg-gray-900/90 py-3 text-center font-mono text-xs font-bold uppercase tracking-wider text-gray-300"
              >
                <span>{soundOn ? "🔊 Spider-Man Audio: ON" : "🔇 Spider-Man Audio: OFF"}</span>
              </button>

              {/* Resume Download */}
              <a
                href="/Prince_Albert_Resume.pdf"
                download="Prince_Albert_Resume.pdf"
                className="flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-900/90 py-3 text-center font-mono text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-white"
              >
                <span>📄 Download Resume (PDF)</span>
              </a>

              {/* Spider-Sense trigger */}
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("spider-sense-trigger"));
                  setMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 rounded-lg border border-red-900/60 bg-gray-900 py-3 text-center font-mono text-xs font-bold uppercase tracking-wider text-red-400"
              >
                ⚡ Trigger Spider-Sense!
              </button>

              <a
                href="#contact"
                onClick={() => {
                  setMenuOpen(false);
                  playClickSound();
                }}
                className="flex items-center justify-center gap-2 rounded-lg bg-[#a31515] py-3.5 text-center font-mono text-sm font-bold uppercase tracking-wider text-white shadow-[0_4px_20px_rgba(163,21,21,0.5)]"
              >
                <Image
                  src="/spiderman/spydy.png"
                  alt="Spider"
                  width={18}
                  height={18}
                  style={{ width: "auto", height: "auto" }}
                  className="h-4 w-4 object-contain brightness-200"
                />
                Get In Touch
              </a>
              <p className="text-center font-mono text-[11px] text-gray-500 uppercase tracking-widest">
                📍 Salem, Tamil Nadu, India
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
