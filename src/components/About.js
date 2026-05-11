"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Shield, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Outcome-focused",
    description: "We measure success by the impact our software creates — not just by shipping features.",
  },
  {
    icon: Users,
    title: "True partnership",
    description: "We work as an extension of your team with full transparency at every stage.",
  },
  {
    icon: Shield,
    title: "Quality by default",
    description: "Every codebase, interface, and deployment is held to the same high standard.",
  },
  {
    icon: Zap,
    title: "Fast iteration",
    description: "Lean processes that keep projects moving without cutting corners.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-zinc-50 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400">About us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mt-3 mb-8 tracking-tight">
              Built in Cape Town.<br />Working globally.
            </h2>

            <div className="space-y-4 text-zinc-500 text-sm leading-relaxed">
              <p>
                Nivram Innovations is a software development studio based in Cape Town, South Africa.
                We partner with startups and established businesses to design, build, and scale
                digital products that solve real problems.
              </p>
              <p>
                Our team brings together expertise across mobile, web, design, and AI — giving
                clients a single, accountable partner across the full product lifecycle.
              </p>
              <p>
                We believe the best software comes from close collaboration, honest communication,
                and a genuine investment in understanding our clients&apos; goals.
              </p>
            </div>

            <div className="grid grid-cols-2 divide-x divide-zinc-100 border border-zinc-100 rounded-xl overflow-hidden mt-12">
              {[
                { value: "12+", label: "Projects delivered" },
                { value: "9+", label: "Client engagements" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white px-8 py-7">
                  <div className="text-3xl font-bold text-zinc-900">{stat.value}</div>
                  <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="bg-white border border-zinc-100 rounded-xl p-6 hover:border-zinc-300 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center mb-4">
                  <v.icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-zinc-900 mb-1.5">{v.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
