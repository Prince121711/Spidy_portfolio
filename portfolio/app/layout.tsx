import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Primary sans — Outfit
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

// Monospace — JetBrains Mono
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#a31515",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Prince Albert — Full Stack Developer & AI Researcher",
  description:
    "Portfolio of Prince Albert — full-stack developer with production experience across React.js, Node.js/Express, and SQL. Founder of Lumen Academy and published author in BMC Research Notes (Springer Nature).",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Prince Albert — Full Stack Developer",
    description:
      "Full-stack developer across React.js, Node.js, Express, and SQL. Founder of Lumen Academy, published author in BMC Research Notes (Springer Nature).",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Albert — Full Stack Developer",
    description:
      "Full-stack developer across React.js, Node.js, Express, and SQL. Founder of Lumen Academy, published author in BMC Research Notes (Springer Nature).",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-sans antialiased selection:bg-[#a31515] selection:text-white">
        {children}
      </body>
    </html>
  );
}
