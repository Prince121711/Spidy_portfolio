"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "8.3", label: "CGPA, B.Tech AI & Data Science" },
  { value: "79", label: "Lessons across 23 Lumen modules" },
  { value: "1", label: "Springer Nature Publication" },
];

const primaryTech = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma ORM",
  "FastAPI",
  "Python",
  "Docker",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden border-t border-gray-200 bg-white px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-28"
    >
      {/* Background Rotating Spider-Web Motifs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top-left spinning web hanging from ceiling */}
        <div className="hidden sm:flex absolute -top-12 left-4 md:left-12 flex-col items-center opacity-[0.12] mix-blend-multiply">
          <div className="h-16 w-[2px] bg-gradient-to-b from-transparent to-gray-400" />
          <div className="h-64 w-64 md:h-96 md:w-96 animate-spin-slow">
            <Image
              src="/spiderman/web1.png"
              alt="Hanging Web"
              width={384}
              height={384}
              className="object-contain"
            />
          </div>
        </div>

        {/* Top-right spinning web */}
        <div className="hidden sm:flex absolute -top-10 right-4 md:right-16 flex-col items-center opacity-[0.12] mix-blend-multiply">
          <div className="h-20 w-[2px] bg-gradient-to-b from-transparent to-gray-400" />
          <div className="h-56 w-56 md:h-80 md:w-80 animate-spin-slow-reverse">
            <Image
              src="/spiderman/web1.png"
              alt="Hanging Web"
              width={320}
              height={320}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:items-start lg:gap-16">
          {/* Left Column: Bio & Credentials */}
          <div className="flex-1 flex flex-col gap-5 sm:gap-6 mt-6 lg:mt-0 relative z-20 w-full">
            {/* Badge */}
            <div>
              <span className="inline-flex items-center gap-2 text-[#a31515] font-bold uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.18em] sm:tracking-[0.2em]">
                <Image
                  src="/spiderman/spydy.png"
                  alt="Spider"
                  width={20}
                  height={20}
                  className="h-4 w-4 sm:h-5 sm:w-5 object-contain drop-shadow-sm shrink-0"
                />
                Behind the Mask
              </span>
            </div>

            {/* Heading */}
            <div className="overflow-hidden py-1">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase italic text-gray-900 leading-none"
                style={{ textShadow: "2px 2px 0px #fca5a5" }}
              >
                Prince Albert.
              </h2>
            </div>

            {/* Bio Paragraphs */}
            <div className="flex flex-col gap-4 sm:gap-5 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>
                I&apos;m a full-stack engineer and AI/Data Science scholar based in Salem,
                Tamil Nadu, passionate about crafting resilient, high-speed web architectures
                and intelligent systems.
              </p>
              <p>
                As founder and lead developer of{" "}
                <span className="font-bold text-gray-950 underline decoration-[#a31515] decoration-2 underline-offset-4">
                  Lumen Academy
                </span>
                , I engineered an online NEET/JEE exam-prep platform spanning 23 modules and
                79 lessons end-to-end — architecting a unified Prisma &amp; PostgreSQL
                backend, automated Playwright E2E suites, and clean Next.js interfaces.
              </p>
              <p>
                I am also the corresponding author of{" "}
                <span className="font-bold text-gray-950 italic">Tax-Shield</span>,
                published in{" "}
                <span className="font-bold text-[#a31515] italic">
                  BMC Research Notes (Springer Nature)
                </span>
                , combining OCR with machine learning for automated micro-merchant tax compliance.
              </p>
            </div>

            {/* Primary Tech Stack Pills */}
            <div className="mt-2 sm:mt-4">
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3 sm:mb-4 font-bold border-b border-gray-200 pb-2 inline-block">
                Core Web &amp; AI Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {primaryTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 border border-[#a31515]/30 bg-white text-[#a31515] rounded-xl text-xs md:text-sm font-bold tracking-wider hover:bg-[#a31515] hover:text-white hover:border-[#a31515] shadow-sm hover:shadow-[0_6px_16px_rgba(163,21,21,0.25)] transition-all duration-300 cursor-default transform hover:-translate-y-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats Row */}
            <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 border-t border-gray-200 pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="group">
                  <dt className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-[#a31515]">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs md:text-sm font-medium text-gray-600">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Suspended Profile Photo Hanging on a Web String */}
          <div className="flex-1 relative flex justify-center items-start min-h-[300px] sm:min-h-[380px] md:min-h-[480px] w-full pt-0">
            <div className="flex flex-col items-center z-30 group animate-bob">
              {/* Hanging Web String with red gradient */}
              <div className="w-[2px] h-14 sm:h-20 md:h-[180px] lg:h-[220px] bg-gradient-to-b from-transparent via-[#a31515]/60 to-[#a31515]" />

              {/* Spider-red framed photo */}
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-[320px] lg:h-[320px] rounded-full border-[5px] sm:border-[6px] border-[#a31515] p-2 bg-white shadow-[0_20px_45px_rgba(163,21,21,0.3)] transition-transform duration-500 group-hover:scale-105">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/prince-albert.jpg"
                    alt="Prince Albert Profile"
                    fill
                    sizes="(max-width: 640px) 192px, (max-width: 1024px) 288px, 320px"
                    className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Floating spider emblem */}
                <div className="absolute -bottom-1.5 sm:-bottom-2 right-2 sm:right-4 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#111] border-2 border-[#a31515] shadow-lg">
                  <Image
                    src="/spiderman/spydy.png"
                    alt="Spider"
                    width={20}
                    height={20}
                    className="h-4 w-4 sm:h-5 sm:w-5 brightness-200"
                  />
                </div>
              </div>

              {/* Caption below hanging photo */}
              <p className="mt-3 sm:mt-4 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-gray-500 text-center">
                Prince Albert • Full Stack Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
