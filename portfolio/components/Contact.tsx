"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { contactEmail, contactPhone, contactLocation, social } from "@/lib/data";
import { playClickSound, playSuccessSound } from "@/lib/soundEffects";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const copyEmail = async () => {
    playClickSound();
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = `mailto:${contactEmail}`;
    }
  };

  const copyPhone = async () => {
    playClickSound();
    try {
      await navigator.clipboard.writeText(contactPhone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      window.location.href = `tel:${contactPhone}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    playSuccessSound();
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4500);
  };

  return (
    <section
      id="contact"
      className="relative w-full border-t border-gray-200 bg-surface px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-28 overflow-hidden"
    >
      {/* Hanging Spider-Man from top right */}
      <div className="absolute top-0 right-2 sm:right-6 md:right-24 z-30 pointer-events-none flex flex-col items-center animate-swing origin-top">
        <div className="w-[2px] h-12 sm:h-20 md:h-28 bg-gradient-to-b from-transparent to-gray-400 opacity-50 sm:opacity-60" />
        <Image
          src="/spiderman/spydy_hang.png"
          alt="Hanging Spider-Man"
          width={180}
          height={240}
          className="w-24 sm:w-32 md:w-44 h-auto object-contain drop-shadow-2xl -mt-1 sm:-mt-2"
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 z-10">
          <span className="text-[#a31515] font-bold uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.18em] sm:tracking-[0.2em] mb-1.5 sm:mb-2 flex items-center gap-1.5">
            <Image
              src="/spiderman/spydy.png"
              alt="Spider"
              width={16}
              height={16}
              className="h-3.5 w-3.5 sm:h-4 sm:w-4 object-contain"
            />
            Get In Touch
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900"
            style={{ textShadow: "2px 2px 0px #fca5a5" }}
          >
            CONTACT.
          </h2>
          <div className="w-12 h-1 bg-[#a31515] mt-2 sm:mt-3 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 sm:gap-8 z-10">
          {/* Left Column: Form Card */}
          <div className="w-full bg-white/95 backdrop-blur-sm border border-gray-200 p-5 sm:p-7 md:p-8 rounded-2xl shadow-sm relative overflow-hidden">
            {submitted ? (
              <div className="py-12 sm:py-16 flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#a31515] text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-black mb-4 shadow-lg animate-bounce">
                  ✓
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-medium max-w-[36ch]">
                  Thanks for reaching out! Prince Albert will respond as soon as your spider-signal arrives.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="flex flex-col gap-1 sm:gap-1.5">
                    <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-600">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Peter Parker"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:border-[#a31515] focus:ring-1 focus:ring-[#a31515] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1 sm:gap-1.5">
                    <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-600">
                      Your Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="spidey@dailybugle.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:border-[#a31515] focus:ring-1 focus:ring-[#a31515] transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1 sm:gap-1.5">
                  <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-600">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, idea, or opportunity..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:border-[#a31515] focus:ring-1 focus:ring-[#a31515] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 sm:mt-2 w-full py-3 sm:py-3.5 bg-[#a31515] hover:bg-[#7a0f0f] text-white rounded-xl font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-300 shadow-[0_6px_20px_rgba(163,21,21,0.35)] hover:shadow-[0_10px_25px_rgba(163,21,21,0.5)] cursor-pointer hover:-translate-y-0.5 text-center"
                >
                  Shoot Web &amp; Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info & Social Cards */}
          <div className="flex flex-col gap-3.5 sm:gap-4">
            {/* Email Card */}
            <div className="bg-white/95 border border-gray-200 p-4 sm:p-5 rounded-2xl shadow-sm hover:border-[#a31515] transition-colors">
              <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-500">
                Direct Email
              </span>
              <div className="mt-1.5 sm:mt-2 flex items-center justify-between gap-2.5 sm:gap-3">
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-sm sm:text-base md:text-lg font-bold text-gray-900 hover:text-[#a31515] transition-colors truncate"
                >
                  {contactEmail}
                </a>
                <button
                  onClick={copyEmail}
                  className="rounded-lg bg-gray-100 hover:bg-[#a31515] hover:text-white px-2.5 sm:px-3 py-1 sm:py-1.5 font-mono text-[11px] sm:text-xs font-bold transition-all shrink-0 cursor-pointer"
                >
                  {copiedEmail ? "Copied! ✓" : "Copy"}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white/95 border border-gray-200 p-4 sm:p-5 rounded-2xl shadow-sm hover:border-[#a31515] transition-colors">
              <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-500">
                Phone / WhatsApp
              </span>
              <div className="mt-1.5 sm:mt-2 flex items-center justify-between gap-2.5 sm:gap-3">
                <a
                  href={`tel:${contactPhone}`}
                  className="text-sm sm:text-base md:text-lg font-bold text-gray-900 hover:text-[#a31515] transition-colors"
                >
                  {contactPhone}
                </a>
                <button
                  onClick={copyPhone}
                  className="rounded-lg bg-gray-100 hover:bg-[#a31515] hover:text-white px-2.5 sm:px-3 py-1 sm:py-1.5 font-mono text-[11px] sm:text-xs font-bold transition-all shrink-0 cursor-pointer"
                >
                  {copiedPhone ? "Copied! ✓" : "Copy"}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white/95 border border-gray-200 p-4 sm:p-5 rounded-2xl shadow-sm">
              <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-500">
                Base Headquarters
              </span>
              <p className="mt-1.5 sm:mt-2 text-sm sm:text-base font-bold text-gray-900">
                📍 {contactLocation}
              </p>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3 pt-1 sm:pt-2">
              <a
                href="https://github.com/Prince121711"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-gray-900 hover:bg-black text-white py-3 sm:py-3.5 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm transition-all hover:-translate-y-0.5"
              >
                <span>GitHub</span>
                <span>↗</span>
              </a>
              <a
                href="https://linkedin.com/in/prince-albert1217"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-gray-300 bg-white hover:border-[#a31515] hover:text-[#a31515] text-gray-800 py-3 sm:py-3.5 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm transition-all hover:-translate-y-0.5"
              >
                <span>LinkedIn</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
