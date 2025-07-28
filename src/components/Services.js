
"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Smartphone, 
  Globe, 
  Palette, 
  Brain, 
  Bot,
  ArrowRight 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Smartphone,
    emoji: "📱",
    title: "Mobile App Development",
    description: "Native iOS and Android apps that users absolutely love! From concept to App Store success.",
    features: ["Native iOS & Android 🍎🤖", "Beautiful UI/UX Design 🎨", "App Store Optimization 📈", "Performance Monitoring 📊"],
    gradient: "from-sky-400 to-blue-500",
    bgColor: "bg-sky-50"
  },
  {
    icon: Globe,
    emoji: "🌐",
    title: "Web Applications",
    description: "Lightning-fast, responsive web apps that work beautifully on every device and browser.",
    features: ["React & Next.js ⚛️", "Cloud Deployment ☁️", "API Integrations 🔗", "Progressive Web Apps 🚀"],
    gradient: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: Palette,
    emoji: "🎨",
    title: "UX/UI Design",
    description: "Gorgeous, user-friendly designs that convert visitors into happy customers every time.",
    features: ["User Research 🔍", "Wireframing & Prototyping 📐", "Design Systems 🎯", "Usability Testing 👥"],
    gradient: "from-orange-400 to-red-500",
    bgColor: "bg-orange-50"
  },
  {
    icon: Brain,
    emoji: "🤖",
    title: "AI Web Applications",
    description: "Smart AI-powered solutions that automate tasks and create amazing user experiences.",
    features: ["AI Resume Builder 📄", "Smart Recruitment Tools 🎯", "Coding Platforms 💻", "Custom AI Magic ✨"],
    gradient: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50"
  },
  {
    icon: Bot,
    emoji: "🤖",
    title: "AI Agents",
    description: "Intelligent AI agents that work 24/7 to automate your workflows and boost productivity.",
    features: ["Custom AI Agents 🤖", "Workflow Automation ⚡", "Smart Chat Bots 💬", "Integration Ready 🔌"],
    gradient: "from-indigo-400 to-purple-500",
    bgColor: "bg-indigo-50"
  }
];

export default function Services() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-32 px-6 bg-gradient-to-br from-white to-sky-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800">
            Our Amazing <span className="gradient-text">Services</span> 🌟
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We bring your wildest tech dreams to life with creativity, passion, and a touch of Cape Town magic!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`${service.bgColor} border-white/50 hover-glow h-full shadow-lg overflow-hidden`}>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{service.emoji}</div>
                    <div className={`w-16 h-16 rounded-3xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-slate-800 text-center">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-center">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-600">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-orange-400 mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center">
                    <Button 
                      variant="ghost" 
                      className="text-sky-600 hover:text-sky-700 hover:bg-sky-100 font-semibold"
                      onClick={scrollToContact}
                    >
                      Let's Talk! 💬
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Fun CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center glass-morphism rounded-3xl p-12 border border-white/50 shadow-xl"
        >
          <div className="text-6xl mb-6">🎯</div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
            Ready to Build Something Incredible?
          </h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            From Table Mountain to global success - let's create your next big thing together! 
          </p>
          <Button
            size="lg"
            className="cape-town-gradient hover:opacity-90 text-white px-12 py-6 text-lg rounded-full hover-glow shadow-lg"
            onClick={scrollToContact}
          >
            Start Our Journey! 🚀
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}