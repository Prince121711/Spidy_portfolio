"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { playClickSound } from "@/lib/soundEffects";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Databases",
  "Languages & AI",
  "QA & DevOps",
];

const skillsMatrix = [
  { name: "React.js & Next.js", category: "Frontend", level: "Advanced", type: "Frontend" },
  { name: "JavaScript (ES6+) & TypeScript", category: "Languages", level: "Advanced", type: "Frontend" },
  { name: "Tailwind CSS & Framer Motion", category: "UI/UX", level: "Advanced", type: "Frontend" },
  { name: "Node.js & Express.js", category: "Backend", level: "Advanced", type: "Backend" },
  { name: "Java & Spring Boot", category: "Enterprise", level: "Proficient", type: "Backend" },
  { name: "RESTful APIs & Microservices", category: "Architecture", level: "Advanced", type: "Backend" },
  { name: "PostgreSQL & MySQL", category: "Relational DB", level: "Advanced", type: "Databases" },
  { name: "Prisma ORM & Supabase", category: "Data Layer", level: "Advanced", type: "Databases" },
  { name: "Python & FastAPI", category: "AI / Backend", level: "Proficient", type: "Languages & AI" },
  { name: "Machine Learning & OCR", category: "Research", level: "Proficient", type: "Languages & AI" },
  { name: "Playwright E2E Testing", category: "Automation", level: "Advanced", type: "QA & DevOps" },
  { name: "Docker & Containerization", category: "DevOps", level: "Proficient", type: "QA & DevOps" },
  { name: "Git, GitHub & CI/CD", category: "Workflow", level: "Advanced", type: "QA & DevOps" },
  { name: "Data Structures & Algorithms", category: "Computer Science", level: "Advanced", type: "Languages & AI" },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkills =
    activeFilter === "All"
      ? skillsMatrix
      : skillsMatrix.filter(
          (s) => s.type === activeFilter || s.category.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <section
      id="skills"
      className="relative w-full border-t border-gray-200 bg-surface px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-28 overflow-hidden"
    >
      {/* Hanging Spider-Man from ceiling web */}
      <div className="absolute top-0 right-2 sm:right-6 md:right-20 z-30 pointer-events-none flex flex-col items-center animate-swing origin-top">
        {/* Subtle web thread */}
        <div className="w-[2px] h-10 sm:h-16 md:h-24 bg-gradient-to-b from-transparent via-gray-400/80 to-gray-500 opacity-60 sm:opacity-70" />
        <Image
          src="/spiderman/spydy_hang.png"
          alt="Hanging Spider-Man"
          width={160}
          height={200}
          className="w-20 sm:w-28 md:w-36 h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.3)] -mt-1 sm:-mt-2"
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8 z-10">
          <span className="text-[#a31515] font-bold uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.18em] sm:tracking-[0.2em] mb-1.5 sm:mb-2 flex items-center gap-1.5">
            <Image
              src="/spiderman/spydy.png"
              alt="Spider"
              width={16}
              height={16}
              style={{ width: "auto", height: "auto" }}
              className="h-3.5 w-3.5 sm:h-4 sm:w-4 object-contain"
            />
            Arsenal &amp; Expertise
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900"
            style={{ textShadow: "2px 2px 0px #fca5a5" }}
          >
            TECHNICAL SKILLS.
          </h2>
          <div className="w-12 h-1 bg-[#a31515] mt-2 sm:mt-3 rounded-full" />
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 z-10 max-w-2xl px-2">
          {categories.map((cat) => {
            const isSelected = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  playClickSound();
                }}
                className={`rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#a31515] text-white shadow-[0_4px_15px_rgba(163,21,21,0.35)] scale-105"
                    : "bg-white/80 text-gray-700 border border-gray-200 hover:border-[#a31515] hover:text-[#a31515]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Matrix Grid */}
        <motion.div
          layout
          className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 md:gap-4 z-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/95 backdrop-blur-sm border border-gray-200 hover:border-[#a31515] px-4 sm:px-5 py-3 sm:py-4 rounded-xl transition-all duration-300 flex items-center justify-between cursor-pointer overflow-hidden shadow-sm hover:shadow-[0_8px_20px_rgba(163,21,21,0.2)] transform hover:-translate-y-0.5"
              >
                {/* Red sliding reveal background */}
                <div className="absolute inset-0 bg-[#a31515] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out z-0" />

                {/* Skill Info */}
                <div className="relative z-10 flex items-center gap-2.5 sm:gap-3">
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#a31515] group-hover:bg-white transition-colors duration-300 shrink-0 shadow-sm" />
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm md:text-base text-gray-900 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                    <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-gray-500 group-hover:text-gray-200 transition-colors duration-300">
                      {skill.category}
                    </span>
                  </div>
                </div>

                {/* Level Badge */}
                <div className="relative z-10 font-mono text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-gray-50 border border-gray-200 text-gray-700 group-hover:bg-black group-hover:border-black group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                  {skill.level}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
