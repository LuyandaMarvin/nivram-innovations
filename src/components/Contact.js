"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Contact as ContactEntity } from "@/entities/Contact.schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service_interest: '',
    project_budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await ContactEntity.create(formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service_interest: '',
        project_budget: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-32 px-6 bg-gradient-to-br from-emerald-50 to-sky-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-morphism rounded-3xl p-12 border border-white/50 shadow-xl"
          >
            <div className="text-8xl mb-6">🎉</div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-slate-800">Awesome! We Got Your Message! 🚀</h3>
            <p className="text-xl text-slate-600 mb-6">
              Thanks for reaching out! We'll get back to you faster than you can say "Table Mountain" - within 24 hours! ⏰
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="cape-town-gradient hover:opacity-90 text-white px-8 py-4 rounded-full shadow-lg"
            >
              Send Another Message 💌
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-br from-emerald-50 to-sky-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-6xl mb-6">💬</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800">
            Let's <span className="gradient-text">Connect</span>!
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to bring your amazing ideas to life? Let's chat over some rooibos tea and create something incredible together! ☕
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-8 text-slate-800">Get in Touch 📞</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 flex items-center justify-center shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Email Us! 📧</div>
                  <div className="text-slate-600">hello@nivraminnovations.co.za</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Call Us! 📱</div>
                  <div className="text-slate-600">+27 21 123 4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-400 to-green-500 flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Visit Us! 🏔️</div>
                  <div className="text-slate-600">Cape Town, South Africa</div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 glass-morphism rounded-2xl border border-white/50 shadow-lg">
              <h4 className="font-bold mb-4 text-slate-800">Why Choose Nivram? 🌟</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-orange-400 mr-3"></div>
                  Free consultation & project estimate 💰
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-orange-400 mr-3"></div>
                  24/7 support & maintenance 🛠️
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-orange-400 mr-3"></div>
                  Agile development process ⚡
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-orange-400 mr-3"></div>
                  100% satisfaction guarantee ✅
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/70 border-white/50 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">✨</div>
                  <h3 className="text-2xl font-bold text-slate-800">Let's Start Something Amazing!</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Your Name ✨
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="bg-white/80 border-slate-200 text-slate-800 focus:border-sky-400"
                        placeholder="What should we call you?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address 📧
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-white/80 border-slate-200 text-slate-800 focus:border-sky-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Company 🏢
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="bg-white/80 border-slate-200 text-slate-800 focus:border-sky-400"
                        placeholder="Your awesome company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number 📱
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-white/80 border-slate-200 text-slate-800 focus:border-sky-400"
                        placeholder="+27 21 123 4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        What Can We Build? 🛠️
                      </label>
                      <Select value={formData.service_interest} onValueChange={(value) => handleInputChange('service_interest', value)}>
                        <SelectTrigger className="bg-white/80 border-slate-200 text-slate-800">
                          <SelectValue placeholder="Pick your adventure!" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mobile_apps">📱 Mobile Apps</SelectItem>
                          <SelectItem value="web_applications">🌐 Web Applications</SelectItem>
                          <SelectItem value="ux_design">🎨 UX/UI Design</SelectItem>
                          <SelectItem value="ai_web_apps">🤖 AI Web Apps</SelectItem>
                          <SelectItem value="ai_agents">🤖 AI Agents</SelectItem>
                          <SelectItem value="consultation">💬 Let's Chat First</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Budget Range 💰
                      </label>
                      <Select value={formData.project_budget} onValueChange={(value) => handleInputChange('project_budget', value)}>
                        <SelectTrigger className="bg-white/80 border-slate-200 text-slate-800">
                          <SelectValue placeholder="What's your budget?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under_10k">Under R150,000</SelectItem>
                          <SelectItem value="10k_25k">R150k - R400k</SelectItem>
                          <SelectItem value="25k_50k">R400k - R800k</SelectItem>
                          <SelectItem value="50k_100k">R800k - R1.5M</SelectItem>
                          <SelectItem value="over_100k">Over R1.5M</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Tell Us About Your Dream Project! 💭
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="bg-white/80 border-slate-200 text-slate-800 h-32 focus:border-sky-400"
                      placeholder="Share your vision, goals, and any exciting ideas you have! The more details, the better we can help you! ✨"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cape-town-gradient hover:opacity-90 text-white py-6 text-lg rounded-full hover-glow shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending Your Message... 🚀
                      </>
                    ) : (
                      <>
                        Let's Make Magic Happen! ✨
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
