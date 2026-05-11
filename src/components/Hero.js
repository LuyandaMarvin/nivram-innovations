"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects" },
  { value: "25+", label: "Clients" },
  { value: "98%", label: "Retention" },
];

const tags = ["Mobile Apps", "Web Platforms", "AI Products", "UX / UI", "AI Agents"];

export default function Hero() {
  const scroll = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="min-h-screen bg-white border-b border-zinc-100 flex flex-col">
      {/* Thin top bar */}
      <div className="border-b border-zinc-100 h-px w-full" />

      <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-6">
        {/* Upper row */}
        <div className="flex-1 grid grid-cols-12 gap-0 border-b border-zinc-100">

          {/* Giant number — left accent column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="col-span-4 border-r border-zinc-100 flex items-end pb-10 pt-32"
          >
            <div>
              <span className="block text-[11rem] font-black text-zinc-900 leading-none tracking-tighter select-none">
                NI
              </span>
              <span className="block text-xs font-semibold tracking-[0.3em] uppercase text-zinc-400 mt-2 ml-1">
                Cape Town · Est. 2023
              </span>
            </div>
          </motion.div>

          {/* Main headline — center */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="col-span-8 flex flex-col justify-end pb-10 pt-32 pl-12"
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-400 mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-zinc-300 inline-block" />
              Software Studio
            </p>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-zinc-900 tracking-tight leading-[1.04] mb-8 max-w-2xl">
              We engineer products
              {" "}
              <span className="text-[#e11d48]">people actually use.</span>
            </h1>

            <p className="text-base text-zinc-500 max-w-md leading-relaxed mb-10">
              Mobile apps, web platforms, and AI tools — built with precision
              for startups and teams that care about quality.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scroll("contact")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-700 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Start a project <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("portfolio")}
                className="text-sm font-semibold text-zinc-400 hover:text-zinc-900 transition-colors underline underline-offset-4 decoration-zinc-200 hover:decoration-zinc-900"
              >
                See our work
              </button>
            </div>
          </motion.div>
        </div>

        {/* Lower row — stats + tags */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-12 gap-0"
        >
          {/* Stats */}
          <div className="col-span-4 border-r border-zinc-100 flex items-center gap-8 py-6 pr-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-xl font-bold text-zinc-900">{s.value}</div>
                <div className="text-xs text-zinc-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Capability tags */}
          <div className="col-span-8 flex items-center gap-2.5 py-6 pl-12 flex-wrap">
            <span className="text-xs text-zinc-400 mr-2 font-medium">What we build →</span>
            {tags.map((t) => (
              <span
                key={t}
                className="text-xs font-medium text-zinc-600 bg-zinc-50 border border-zinc-100 rounded-full px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
