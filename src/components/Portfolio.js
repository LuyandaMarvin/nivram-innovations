"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Anotly",
    description:
      "Proof-first hiring prep for tech roles: structured projects, evidence-backed claims, hiring-readiness guidance, and resumes and cover letters derived from real work—not generic AI fluff.",
    image: "/anotly-portfolio.png",
    tags: ["Next.js", "SaaS", "Career tools", "Evidence & proof"],
    category: "Web product",
    url: "https://www.anotly.com/",
  },
  {
    title: "Hospiflow",
    description:
      "Rails SaaS for clinics and pharmacies: recurring compliance checks, evidence on completion, and exportable audit trails—so sites stay inspection-ready without paper or spreadsheets. Multi-tenant; focused on operations and compliance, not EMR or billing.",
    image: "/hospiflow-portfolio.png",
    tags: ["Ruby on Rails", "PostgreSQL", "Solid Queue", "Multi-tenant", "Healthcare compliance"],
    category: "SaaS",
    url: "",
  },
  {
    title: "iKambi Health",
    description:
      "Practice management for South African private clinics: patient records, appointments, consultations, invoicing, payments, team roles, and medical-aid workflow readiness in one secure cloud system.",
    image: "/dashboard-portfolio.png",
    tags: ["Healthcare SaaS", "Practice management", "Patient records", "Billing workflows", "POPIA-aware"],
    category: "Live SaaS",
    url: "https://ikambihealth.com/",
  },
  {
    title: "Beka",
    description:
      "Invite-only squads for real-world accountability: visible commitments, check-ins, and a squad feed—built for showing up with people you trust, not leaderboard hype. Expo (React Native), NestJS + Prisma, Clerk; local-first sync with push, reactions, and comments.",
    image: "/beka-portfolio.png",
    tags: ["Expo", "React Native", "NestJS", "Prisma", "Clerk"],
    category: "Mobile app",
    url: "",
  },
  {
    title: "VibeCode Platform",
    description: "An AI-powered code builder that lets anyone create web apps through a natural, vibe-driven interface.",
    image: "/vibecode-portfolio.png",
    tags: ["AI", "Next.js", "Tailwind", "Code Builder"],
    category: "SaaS Platform",
    url: "http://vibe-build-gamma.vercel.app/",
  },
  {
    title: "Smart Recruitment Platform",
    description: "AI-powered hiring platform connecting talent with companies through intelligent matching.",
    image: "/recruitment-portfolio.png",
    tags: ["AI", "Python", "React", "Machine Learning"],
    category: "AI Agent",
    url: "",
  },
  {
    title: "Asenati",
    description:
      "South African legal marketplace that routes urgent client issues to verified lawyers for secure payment, live chat, video consultations, reviews, disputes, and payout tracking.",
    image: "/recruitment-portfolio.png",
    tags: ["Legal marketplace", "Realtime chat", "Video consultations", "Payments", "Lawyer dispatch"],
    category: "Live SaaS",
    url: "https://asenati.com/",
  },
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with seamless checkout and local delivery integrations.",
    image: "/ecommerce-portfolio.png",
    tags: ["Next.js", "Stripe", "Tailwind", "PWA"],
    category: "Web Application",
    url: "",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 px-6 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400">Selected work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mt-3 mb-3 tracking-tight">Projects</h2>
          <p className="text-zinc-500 max-w-lg">
            Our own products and selected work we have designed and shipped.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="group border border-zinc-100 rounded-xl overflow-hidden bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-200"
            >
              <div className="relative overflow-hidden bg-zinc-50 h-44">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 text-xs font-semibold bg-white text-zinc-700 px-2.5 py-1 rounded-full border border-zinc-100">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-base font-semibold text-zinc-900 mb-2">{project.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-zinc-500 bg-zinc-50 border border-zinc-100 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e11d48] hover:underline"
                  >
                    View project <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
