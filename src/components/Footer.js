"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 px-6 py-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="text-sm font-bold text-white mb-3">Nivram Innovations</div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              A software studio building mobile, web, and AI products for businesses that want to grow.
              Based in Cape Town — working worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-4">Services</h4>
            <ul className="space-y-2.5 text-zinc-400 text-sm">
              {["Mobile Apps", "Web Applications", "UX/UI Design", "AI Solutions"].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-4">Company</h4>
            <ul className="space-y-2.5 text-zinc-400 text-sm">
              {[
                { label: "About", href: "#about" },
                { label: "Work", href: "#portfolio" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-500 text-xs">
            &copy; {new Date().getFullYear()} Nivram Innovations. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-5 text-zinc-500 text-xs">
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refunds</Link>
            <Link href="/cancellation-policy" className="hover:text-white transition-colors">Cancellations</Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookies</Link>
            <Link href="/contact-us" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
