"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";

const EMPTY = { name: "", email: "", company: "", phone: "", service: "", budget: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const set = (field, value) => setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nPhone: ${form.phone}\nService: ${form.service}\nBudget: ${form.budget}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:hello@nivraminnovations.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm(EMPTY);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-28 px-6 bg-white border-b border-zinc-100">
        <div className="max-w-lg mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-3">Message sent</h3>
            <p className="text-zinc-500 text-sm mb-8">
              Your email client should have opened. We typically reply within one business day.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-sm font-medium text-zinc-500 hover:text-zinc-900 underline underline-offset-4"
            >
              Send another message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-28 px-6 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400">Contact</span>
            <h2 className="text-4xl font-bold text-zinc-900 mt-3 mb-4 tracking-tight">Let&apos;s talk.</h2>
            <p className="text-zinc-500 text-sm leading-relaxed mb-10">
              Tell us about your project and we&apos;ll come back to you with a clear plan and timeline.
            </p>

            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "hello@nivraminnovations.com" },
                { icon: MapPin, label: "Location", value: "Cape Town, South Africa" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-zinc-600" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 uppercase tracking-wide">{label}</div>
                    <div className="text-sm text-zinc-700 mt-0.5">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border border-zinc-100 rounded-xl p-6 bg-zinc-50">
              <h4 className="text-sm font-semibold text-zinc-900 mb-3">Why work with us</h4>
              <ul className="space-y-2">
                {[
                  "Free consultation and project estimate",
                  "Ongoing support and maintenance",
                  "Agile, transparent process",
                  "Satisfaction guaranteed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-zinc-500">
                    <span className="w-1 h-1 rounded-full bg-[#e11d48] flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-zinc-600 mb-1.5">Full name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Jane Smith"
                    className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-600 mb-1.5">Email address *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-zinc-600 mb-1.5">Company</label>
                  <input
                    value={form.company}
                    onChange={(e) => set("company", e.target.value)}
                    placeholder="Your company"
                    className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-600 mb-1.5">Phone</label>
                  <input
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="Your phone number"
                    className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-zinc-600 mb-1.5">Service needed</label>
                  <select
                    value={form.service}
                    onChange={(e) => set("service", e.target.value)}
                    className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-sm text-zinc-900 bg-white focus:outline-none focus:border-zinc-400 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="mobile_apps">Mobile Apps</option>
                    <option value="web_applications">Web Applications</option>
                    <option value="ux_design">UX/UI Design</option>
                    <option value="ai_web_apps">AI Web Apps</option>
                    <option value="ai_agents">AI Agents</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-600 mb-1.5">Budget range</label>
                  <select
                    value={form.budget}
                    onChange={(e) => set("budget", e.target.value)}
                    className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-sm text-zinc-900 bg-white focus:outline-none focus:border-zinc-400 transition-colors"
                  >
                    <option value="">Select a range</option>
                    <option value="under_150k">Under R150,000</option>
                    <option value="150k_400k">R150k – R400k</option>
                    <option value="400k_800k">R400k – R800k</option>
                    <option value="800k_1_5m">R800k – R1.5M</option>
                    <option value="over_1_5m">Over R1.5M</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-600 mb-1.5">Message *</label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  placeholder="Tell us about your project, goals, and timeline..."
                  rows={5}
                  className="w-full border border-zinc-200 rounded-lg px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3 bg-zinc-900 hover:bg-zinc-700 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Send message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
