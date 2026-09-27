import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme palette inspired by spydyy-portfolio
        surface: {
          DEFAULT: "#FAFAFA", // page background
          raised: "#FFFFFF", // card surface
          alt: "#F5F5F5",    // alternate section bg
        },
        ink: {
          DEFAULT: "#111111", // primary text
          dim: "#4B5563",     // secondary text (gray-600)
          faint: "#9CA3AF",   // tertiary text (gray-400)
          line: "#E5E7EB",    // borders (gray-200)
          muted: "#D1D5DB",   // muted borders (gray-300)
        },
        accent: {
          DEFAULT: "#a31515", // primary accent
          dark: "#7a0f0f",    // hover state
          light: "#dc2626",   // lighter accent for glows
          glow: "rgba(163, 21, 21, 0.15)", // subtle glow bg
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "20px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-slow-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        "swing": {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
        "bob": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(10px)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 70s linear infinite",
        "spin-slow-reverse": "spin-slow-reverse 90s linear infinite",
        "swing": "swing 3.5s ease-in-out infinite",
        "bob": "bob 4s ease-in-out infinite",
        "marquee": "marquee 22s linear infinite",
        "marquee-reverse": "marquee-reverse 26s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
