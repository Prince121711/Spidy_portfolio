"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";

const projectHighlights: Record<string, string> = {
  "Lumen Academy": "23 Modules • 79 Lessons • Production Platform",
  "Tax-Shield: AI Tax Compliance Assistant": "Peer-Reviewed • BMC Research Notes (Springer Nature)",
  "AI Policy & Compliance Intelligence System": "Sentence-Transformers • TCS iON Industry Capstone",
  "Loan Management System": "Full-Stack MVC • Java Spring Boot & SQL",
  "Data Pipeline & Analytics Engine": "Automated ETL • Pandas/NumPy & Predictive EDA",
};

export default function Work() {
  return (
    <section
      id="work"
      className="relative w-full border-t border-gray-200 bg-white px-4 sm:px-6 md:px-12 pt-16 sm:pt-20 md:pt-28 pb-24 sm:pb-28 md:pb-36 overflow-hidden"
    >
      {/* Standing Spider-Man in bottom corner */}
      <div className="absolute bottom-0 left-1 sm:left-4 md:left-8 z-20 pointer-events-none">
        <Image
          src="/spiderman/spydy_stand.png"
          alt="Standing Spider-Man"
          width={220}
          height={300}
          className="w-20 sm:w-28 md:w-36 lg:w-44 h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.35)] opacity-40 sm:opacity-90 md:opacity-100"
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 z-10">
          <span className="text-[#a31515] font-bold uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.18em] sm:tracking-[0.2em] mb-1.5 sm:mb-2 flex items-center gap-1.5">
            <Image
              src="/spiderman/spydy.png"
              alt="Spider"
              width={16}
              height={16}
              style={{ width: "auto", height: "auto" }}
              className="h-3.5 w-3.5 sm:h-4 sm:w-4 object-contain"
            />
            Featured Works
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900"
            style={{ textShadow: "2px 2px 0px #fca5a5" }}
          >
            PROJECTS.
          </h2>
          <div className="w-12 h-1 bg-[#a31515] mt-2 sm:mt-3 rounded-full" />
        </div>

        {/* Projects Grid: 5 Projects */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 z-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group relative bg-gray-50/90 backdrop-blur-sm border border-gray-200 hover:border-[#a31515] p-5 sm:p-6 md:p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden shadow-sm hover:shadow-[0_12px_30px_rgba(163,21,21,0.2)] transform hover:-translate-y-1 ${
                idx === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Top red accent line on hover */}
              <span className="absolute top-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[#a31515] transition-transform duration-300 ease-out group-hover:scale-x-100" />

              <div>
                {/* Project Screenshot / Visual Preview */}
                {project.image && (
                  <div
                    className={`relative w-full overflow-hidden rounded-xl border border-gray-200/80 bg-gray-900/5 mb-4 sm:mb-5 shadow-inner ${
                      idx === 0
                        ? "h-44 sm:h-60 md:h-80 lg:h-96"
                        : "h-44 sm:h-52 md:h-64"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} Preview`}
                      fill
                      sizes={idx === 0 ? "(max-width: 768px) 100vw, 896px" : "(max-width: 768px) 100vw, 440px"}
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}

                {/* Header row with Index, Year, and Special Highlight Badge */}
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-md bg-[#a31515]/10 px-2.5 sm:px-3 py-0.5 sm:py-1 font-mono text-[11px] sm:text-xs font-bold text-[#a31515] border border-[#a31515]/20">
                    {project.index}
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {project.year}
                  </span>
                </div>

                {/* Highlight banner if available */}
                {projectHighlights[project.title] && (
                  <div className="mt-2.5 sm:mt-3 inline-flex items-center gap-1.5 rounded-md bg-red-50 border border-red-100 px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-mono font-bold text-[#a31515]">
                    <span>⚡</span>
                    <span className="truncate">{projectHighlights[project.title]}</span>
                  </div>
                )}

                {/* Project Title */}
                <h3 className="mt-2.5 sm:mt-3 text-xl sm:text-2xl font-black tracking-tight text-gray-950 transition-colors group-hover:text-[#a31515]">
                  {project.title}
                </h3>

                {/* Role badge */}
                <p className="mt-1 font-mono text-[11px] sm:text-xs font-medium text-[#a31515]">
                  {project.role}
                </p>

                {/* Description */}
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-gray-700">
                  {project.description}
                </p>
              </div>

              {/* Tags and Link */}
              <div className="mt-5 sm:mt-6 border-t border-gray-200/80 pt-4">
                <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white border border-gray-200 px-2 sm:px-2.5 py-0.5 sm:py-1 font-mono text-[10px] sm:text-[11px] font-medium text-gray-600 transition-colors group-hover:border-[#a31515]/30 group-hover:text-gray-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#a31515] transition-transform group-hover:translate-x-1"
                  >
                    <span>View Repository</span>
                    <span>↗</span>
                  </a>

                  <span className="font-mono text-[10px] sm:text-[11px] text-gray-400">
                    Production Architecture
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
