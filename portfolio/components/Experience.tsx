"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { experience } from "@/lib/data";

const milestones: Record<string, string> = {
  "Developer Intern (Founder)": "Core Platform Architecture",
  "Data Science Intern": "Data Engineering & Pipelines",
  "Corresponding Author & Researcher": "Springer Nature Publication",
  "B.Tech, Artificial Intelligence and Data Science": "Academic CGPA: 8.3 / 10",
  "Higher Secondary (XII & X)": "Foundational Academics",
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full border-t border-gray-200 bg-surface px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-28 overflow-hidden"
    >
      <div className="container relative z-10 mx-auto max-w-4xl flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 z-10">
          <span className="text-[#a31515] font-bold uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.18em] sm:tracking-[0.2em] mb-1.5 sm:mb-2 flex items-center gap-1.5">
            <Image
              src="/spiderman/spydy.png"
              alt="Spider"
              width={16}
              height={16}
              className="h-3.5 w-3.5 sm:h-4 sm:w-4 object-contain"
            />
            The Journey
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900"
            style={{ textShadow: "2px 2px 0px #fca5a5" }}
          >
            EXPERIENCE &amp; PATH.
          </h2>
          <div className="w-12 h-1 bg-[#a31515] mt-2 sm:mt-3 rounded-full" />
        </div>

        {/* Robust, Pixel-Perfect Timeline Container with Zero Horizontal Overflow */}
        <div className="w-[calc(100%-1rem)] sm:w-full max-w-3xl relative border-l-2 border-[#a31515]/30 ml-2 sm:ml-6 pl-5 sm:pl-8 space-y-8 md:space-y-10">
          {experience.map((item, i) => (
            <motion.div
              key={item.title + item.org}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative"
            >
              {/* Timeline Spider-Red Node (mathematically centered on border-l-2 across all breakpoints) */}
              <span className="absolute -left-[29px] sm:-left-[41px] top-6 h-4 w-4 rounded-full border-[3px] border-[#a31515] bg-white transition-all duration-300 group-hover:scale-125 group-hover:bg-[#a31515] shadow-sm" />

              {/* Card Container */}
              <div className="rounded-2xl border border-gray-200/90 bg-white/95 p-5 sm:p-6 md:p-7 transition-all duration-300 hover:border-[#a31515] hover:shadow-[0_10px_25px_rgba(163,21,21,0.12)]">
                <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#a31515]/10 px-3 py-0.5 sm:px-3.5 sm:py-1 font-mono text-[10px] sm:text-[11px] font-bold text-[#a31515] border border-[#a31515]/20">
                      {item.date}
                    </span>
                    {milestones[item.title] && (
                      <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 sm:px-2.5 py-0.5 rounded-md">
                        {milestones[item.title]}
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-[11px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {item.org}
                  </span>
                </div>

                <h3 className="mt-2.5 sm:mt-3 text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#a31515] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm leading-relaxed text-gray-700">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
