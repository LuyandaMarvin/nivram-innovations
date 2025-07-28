"use client";


import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MapPin, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-100 via-white to-orange-100">
      {/* Fun animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sky-300/20 rounded-full blur-xl animate-pulse fun-bounce"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-300/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-pink-300/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-emerald-300/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        {/* Cape Town mountain silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sky-200/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-morphism mb-8 border border-sky-200">
            <MapPin className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-medium text-slate-700">Proudly Based in Cape Town, South Africa</span>
            <Sun className="w-5 h-5 text-yellow-500" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-slate-800">
            Build Amazing
            <span className="gradient-text block">Tech Solutions</span>
            Together! 🚀
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            From the Mother City to the world! We create stunning mobile apps, web applications, 
            and AI-powered solutions that make businesses shine ✨
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <Button
            size="lg"
            className="cape-town-gradient hover:opacity-90 text-white px-10 py-6 text-lg rounded-full hover-glow shadow-lg"
            onClick={() => scrollToSection('contact')}
          >
            Let&apos;s Create Magic! ✨
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-sky-300 text-slate-700 hover:bg-sky-50 bg-white/70 px-10 py-6 text-lg rounded-full hover-glow shadow-lg"
            onClick={() => scrollToSection('services')}
          >
            Explore Our Services 🎯
            <Sparkles className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        {/* Fun stats with emojis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="glass-morphism rounded-3xl p-8 hover-glow border border-white/50">
            <div className="text-4xl mb-2">🎉</div>
            <div className="text-3xl font-bold gradient-text mb-2">500+</div>
            <div className="text-slate-600 font-medium">Happy Projects</div>
          </div>
          <div className="glass-morphism rounded-3xl p-8 hover-glow border border-white/50">
            <div className="text-4xl mb-2">🤝</div>
            <div className="text-3xl font-bold gradient-text mb-2">150+</div>
            <div className="text-slate-600 font-medium">Amazing Clients</div>
          </div>
          <div className="glass-morphism rounded-3xl p-8 hover-glow border border-white/50">
            <div className="text-4xl mb-2">🏔️</div>
            <div className="text-3xl font-bold gradient-text mb-2">5+</div>
            <div className="text-slate-600 font-medium">Years from Cape Town</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}