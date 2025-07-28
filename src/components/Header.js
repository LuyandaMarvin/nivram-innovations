"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { title: "Services", href: "#services" },
  { title: "Our Work", href: "#portfolio" },
  { title: "About Us", href: "#about" },
];

const logoUrl = "/logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
        // Adjust for header height
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-white shadow-md" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" onClick={scrollToTop} className="flex items-center gap-3 cursor-pointer">
          <Image src='/logo.png' alt="Nivram Innovations Logo" className="h-10 w-auto" />
          <span className="font-bold text-xl text-slate-800 hidden sm:block">Nivram Innovations</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              className="text-slate-600 font-medium hover:text-sky-600 transition-colors"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <Button
            className="cape-town-gradient text-white rounded-full px-6 shadow-lg"
            onClick={() => scrollToSection('#contact')}
          >
            Let&apos;s Talk
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-slate-800" /> : <Menu className="h-6 w-6 text-slate-800" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mt-4 p-6 bg-white/95 backdrop-blur-lg rounded-b-2xl shadow-lg"
        >
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-slate-700 font-semibold text-lg hover:text-sky-600 transition-colors"
              >
                {link.title}
              </a>
            ))}
             <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection("#contact"); }}
                className="text-slate-700 font-semibold text-lg hover:text-sky-600 transition-colors"
              >
                Contact
              </a>
            <Button
              className="cape-town-gradient text-white rounded-full px-8 py-3 w-full mt-4"
              onClick={() => scrollToSection('#contact')}
            >
              Let&apos;s Talk
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}