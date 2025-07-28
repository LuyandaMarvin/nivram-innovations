"use client";


import React from "react";
import { Heart, ExternalLink, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Nivram Innovations</h3>
            <p className="text-slate-300 mb-6 max-w-md">
              Creating amazing tech solutions with love from Cape Town! 🏔️ 
              Let&apos;s build the future together, one line of code at a time! ✨
            </p>
            <div className="flex items-center text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>in Cape Town</span>
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>🇿🇦</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Our Services 🛠️</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#services" className="hover:text-sky-400 transition-colors">📱 Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">🌐 Web Applications</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">🎨 UX/UI Design</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">🤖 AI Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company 🏢</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#about" className="hover:text-sky-400 transition-colors">🏔️ About Us</a></li>
              <li><a href="#portfolio" className="hover:text-sky-400 transition-colors">🎨 Our Work</a></li>
              <li><a href="#contact" className="hover:text-sky-400 transition-colors">💬 Get in Touch</a></li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors flex items-center">
                  📝 Blog <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2024 Nivram Innovations. Built with ❤️ in Cape Town, South Africa 🇿🇦
          </div>
          <div className="flex gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}