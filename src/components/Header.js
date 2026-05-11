"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { title: "Services", href: "#services" },
  { title: "Work", href: "#portfolio" },
  { title: "About", href: "#about" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? "bg-white border-b border-zinc-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center"
        >
          <Image
            src="/logo.svg"
            alt="Nivram Innovations"
            width={230}
            height={60}
            className="h-10 w-auto"
            style={{ width: "auto" }}
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection("#contact"); }}
            className="inline-flex items-center px-4 py-2 bg-zinc-900 hover:bg-zinc-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-zinc-700 hover:text-zinc-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 px-6 py-6">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
              >
                {link.title}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection("#contact"); }}
              className="inline-flex justify-center items-center px-4 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-lg mt-2"
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
