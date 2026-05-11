"use client";
import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Globe, Palette, Brain, Bot, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native iOS and Android apps built for reliability, speed, and a polished user experience on every device.",
    features: ["Native iOS & Android", "App Store Deployment", "Performance Optimization", "Ongoing Maintenance"],
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Scalable web platforms — from early MVPs to complex enterprise products — built with modern frameworks.",
    features: ["React & Next.js", "Cloud Infrastructure", "API Design", "Progressive Web Apps"],
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    description: "Research-led design that reduces friction and drives conversion. From wireframes to production-ready interfaces.",
    features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"],
  },
  {
    icon: Brain,
    title: "AI-Powered Applications",
    description: "Intelligent software that automates workflows, surfaces insights, and creates differentiated product experiences.",
    features: ["LLM Integration", "Smart Recruitment Tools", "Custom AI Pipelines", "AI Resume Builder"],
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Autonomous agents that run your business logic — integrating with existing tools to eliminate repetitive work.",
    features: ["Custom Agent Design", "Workflow Automation", "Conversational Interfaces", "Third-party Integrations"],
  },
];

export default function Services() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="py-28 px-6 bg-zinc-50 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400">What we do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mt-3 mb-3 tracking-tight">Services</h2>
          <p className="text-zinc-500 max-w-lg">
            End-to-end product development — strategy, design, engineering, and deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="bg-white border border-zinc-100 rounded-xl p-7 hover:border-zinc-300 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center mb-5">
                <s.icon className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-base font-semibold text-zinc-900 mb-2">{s.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-5">{s.description}</p>
              <ul className="space-y-1.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="w-1 h-1 rounded-full bg-[#e11d48] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-zinc-900 rounded-xl px-10 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Have a project in mind?</h3>
            <p className="text-zinc-400 text-sm max-w-sm">
              Tell us what you're building and we'll scope it together — no commitment required.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-zinc-100 text-zinc-900 text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
          >
            Get in touch <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
