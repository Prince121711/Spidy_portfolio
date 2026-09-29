"use client";

import { playSymbioteSound } from "./soundEffects";

export type SpiderTheme = "classic" | "symbiote";

export function getInitialTheme(): SpiderTheme {
  if (typeof window === "undefined") return "classic";
  try {
    const saved = localStorage.getItem("spider-theme") as SpiderTheme | null;
    if (saved === "classic" || saved === "symbiote") {
      return saved;
    }
    // Check system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "symbiote";
    }
  } catch {
    // fallback
  }
  return "classic";
}

export function applyTheme(theme: SpiderTheme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (theme === "symbiote") {
    root.classList.add("dark", "symbiote");
  } else {
    root.classList.remove("dark", "symbiote");
  }
  try {
    localStorage.setItem("spider-theme", theme);
  } catch {}

  window.dispatchEvent(new CustomEvent("spider-theme-change", { detail: { theme } }));
}

export function toggleSpiderTheme(currentTheme: SpiderTheme): SpiderTheme {
  const nextTheme: SpiderTheme = currentTheme === "classic" ? "symbiote" : "classic";
  applyTheme(nextTheme);
  playSymbioteSound(nextTheme === "symbiote");
  return nextTheme;
}
