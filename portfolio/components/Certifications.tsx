"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative w-full border-t border-gray-200 bg-white px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-28 overflow-hidden"
    >
      <div className="container relative z-10 mx-auto max-w-7xl flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12 z-10">
          <span className="text-[#a31515] font-bold uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.18em] sm:tracking-[0.2em] mb-1.5 sm:mb-2 flex items-center gap-1.5">
            <Image
              src="/spiderman/spydy.png"
              alt="Spider"
              width={16}
              height={16}
              style={{ width: "auto", height: "auto" }}
              className="h-3.5 w-3.5 sm:h-4 sm:w-4 object-contain"
            />
            Credentials &amp; Honors
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900"
            style={{ textShadow: "2px 2px 0px #fca5a5" }}
          >
            CERTIFICATIONS.
          </h2>
          <div className="w-12 h-1 bg-[#a31515] mt-2 sm:mt-3 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 z-10">
          {certifications.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50/80 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#a31515] hover:bg-white hover:shadow-[0_10px_25px_rgba(163,21,21,0.15)] overflow-hidden"
            >
              {/* Accent hover bar */}
              <span className="absolute top-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[#a31515] transition-transform duration-300 ease-out group-hover:scale-x-100" />

              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md bg-[#a31515]/10 px-2.5 py-0.5 sm:py-1 font-mono text-[10px] sm:text-[11px] font-bold text-[#a31515] border border-[#a31515]/20">
                    {item.badge}
                  </span>
                  <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                    {item.issuer}
                  </span>
                </div>

                <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-gray-900 transition-colors group-hover:text-[#a31515]">
                  {item.title}
                </h3>

                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                  {item.subtitle}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 flex items-center justify-between border-t border-gray-200/80 pt-3.5 sm:pt-4 font-mono text-[10px] sm:text-[11px] text-gray-500 transition-colors group-hover:text-[#a31515]">
                <span>Verified Credential</span>
                <span className="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
