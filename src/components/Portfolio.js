"use client";


import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "AI Resume Builder",
    description: "A smart resume builder that helps job seekers create stunning CVs with AI-powered suggestions! 🎯",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop",
    tags: ["AI/ML", "React", "Node.js", "OpenAI"],
    category: "AI Web App",
    emoji: "📄"
  },
  {
    title: "Cape Town Tourism App",
    description: "Beautiful mobile app showcasing the best of Cape Town with AR features and local recommendations! 🏔️",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&h=500&fit=crop",
    tags: ["React Native", "AR", "Maps", "Tourism"],
    category: "Mobile App",
    emoji: "🏖️"
  },
  {
    title: "Smart Recruitment Platform",
    description: "AI-powered hiring platform that connects amazing talent with great companies using smart matching! 🤝",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop",
    tags: ["AI", "Python", "React", "Machine Learning"],
    category: "AI Agent",
    emoji: "🎯"
  },
  {
    title: "Local Business Dashboard",
    description: "Comprehensive business management system built for South African SMEs with local payment integration! 💼",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    category: "Web Application",
    emoji: "📊"
  },
  {
    title: "E-Commerce Paradise",
    description: "Stunning online store with seamless shopping experience and local delivery integration! 🛍️",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    tags: ["Next.js", "Stripe", "Tailwind", "PWA"],
    category: "Web Application",
    emoji: "🛒"
  },
  {
    title: "Coding Learning Platform",
    description: "Interactive coding platform that makes learning programming fun and engaging for everyone! 💻",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    tags: ["AI", "TypeScript", "Monaco Editor", "Docker"],
    category: "AI Web App",
    emoji: "💻"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800">
            Our Amazing <span className="gradient-text">Work</span> 🎨
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Check out some of the incredible projects we've built with love from Cape Town! Each one tells a unique story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/80 border-white/50 hover-glow overflow-hidden group shadow-lg">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 text-3xl">{project.emoji}</div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-sky-100 text-sky-700 border-sky-200 font-medium">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-slate-800">{project.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-slate-300 text-slate-600 bg-white">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" variant="ghost" className="text-sky-600 hover:text-sky-700 hover:bg-sky-50 p-0 font-semibold">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button size="sm" variant="ghost" className="text-slate-500 hover:text-slate-600 hover:bg-slate-50 p-0">
                      <Heart className="w-4 h-4 mr-2" />
                      Love it
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}