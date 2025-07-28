"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Zap, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    emoji: "🎯",
    title: "Innovation First",
    description: "We're always exploring the latest tech trends and bringing fresh, creative solutions to every project!"
  },
  {
    icon: Users,
    emoji: "🤝",
    title: "Client Love",
    description: "Your success makes us happy! We build lasting partnerships based on trust, transparency, and amazing results."
  },
  {
    icon: Heart,
    emoji: "❤️",
    title: "Quality with Love",
    description: "Every line of code, every design element is crafted with care, attention to detail, and genuine passion."
  },
  {
    icon: Zap,
    emoji: "⚡",
    title: "Cape Town Speed",
    description: "Fast, efficient delivery without compromising quality. We move as fast as the Cape Doctor wind!"
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-gradient-to-br from-sky-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6">🏔️</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-800">
              About <span className="gradient-text">Nivram</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                🌟 Based in the beautiful Mother City of Cape Town, we're a team of passionate 
                tech enthusiasts who believe that great software should be both powerful and 
                delightful to use!
              </p>
              
              <p>
                🚀 From the slopes of Table Mountain to screens around the world, we create 
                digital experiences that not only solve real problems but also bring joy 
                to the people who use them. Every project is an adventure!
              </p>
              
              <p>
                🎨 We combine South African creativity with world-class technical expertise, 
                delivering solutions that are as beautiful as a Cape Town sunset and as 
                reliable as the Atlantic Ocean breeze.
              </p>
              
              <p>
                🤝 Whether you're a startup with big dreams or an established business ready 
                to innovate, we're here to turn your vision into reality with enthusiasm, 
                expertise, and a touch of Cape Town magic!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center glass-morphism rounded-2xl p-6 border border-white/50">
                <div className="text-3xl mb-2">🎉</div>
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-slate-600 font-medium">Happy Projects</div>
              </div>
              <div className="text-center glass-morphism rounded-2xl p-6 border border-white/50">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-3xl font-bold gradient-text mb-2">98%</div>
                <div className="text-slate-600 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/70 border-white/50 hover-glow h-full shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{value.emoji}</div>
                    <div className="w-12 h-12 rounded-xl cape-town-gradient flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-slate-800">{value.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}