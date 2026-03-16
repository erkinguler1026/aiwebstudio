import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { Bot, Cpu, Zap, ChevronRight, MessageSquare, Send, Monitor, Globe } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      toast.success(response.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Bir hata oluştu!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-8 py-20 mb-20 lg:mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1 rounded-full text-xs font-medium text-indigo-300"
        >
          <Zap size={14} className="fill-indigo-300" />
          <span>Next-Gen Web Engineering</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-outfit font-bold text-white leading-tight"
        >
          Code Meets <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-indigo to-purple-400">Intelligence.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl text-lg text-slate-400 leading-relaxed"
        >
          Mühendislik disiplini ve AI entegrasyonu ile işinizi dijitalde bir 'akıllı asistana' dönüştürelim. 
          Geleceğin web deneyimini bugün inşa ediyoruz.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 pt-4"
        >
          <a href="#contact" className="group bg-white text-space-blue px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-100 transition-all cursor-pointer">
            Build My Project <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <Link to="/about" className="bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-3 rounded-xl font-bold transition-all text-white">
            Learn More
          </Link>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32 lg:mb-48">
        {[
          { icon: <Cpu className="w-10 h-10" />, title: "AI-Integrated Dev", desc: "OpenAI ve yerel modellerle akıllı iş akışları." },
          { icon: <Monitor className="w-10 h-10" />, title: "Premium Dashboards", desc: "Endüstriyel hız ve ISO standartlarında veri takibi." },
          { icon: <Globe className="w-10 h-10" />, title: "Smart Web Apps", desc: "Müşterileriniz için 7/24 aktif destek botları." }
        ].map((feature, idx) => (
          <Tilt key={idx} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02}>
            <div className="glass-card p-8 h-full group hover:border-electric-indigo/50 transition-all cursor-default">
              <div className="mb-6 text-electric-indigo group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-outfit font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              <div className="mt-6 w-full h-px bg-white/5 group-hover:bg-electric-indigo/20 transition-colors" />
              <div className="mt-4 shimmer h-1 w-0 group-hover:w-full transition-all duration-700 opacity-20" />
            </div>
          </Tilt>
        ))}
      </section>

      {/* AI Assistant Bubble Section */}
      <section className="flex flex-col items-center mb-48 text-center">
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }} 
          transition={{ repeat: Infinity, duration: 3 }}
          className="speech-bubble p-6 max-w-md text-white font-medium shadow-2xl shadow-indigo-500/30"
        >
          "Hocam, tüm sistemler hazır. İletişim formunu ve portfolyoyu entegre ettik. Sıradaki adım nedir?"
        </motion.div>
        <div className="mt-8 flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-full glass-card flex items-center justify-center border-electric-indigo overflow-hidden">
                  <Bot className="text-electric-indigo w-8 h-8" />
              </div>
              <div className="absolute top-0 right-0 w-4 h-4 bg-green-500 border-2 border-space-blue rounded-full animate-pulse" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold">Alpha AI Guide</p>
              <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {[1, 2, 3].map(i => (
                      <motion.div 
                        key={i}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                        className="w-1 h-1 bg-electric-indigo rounded-full"
                      />
                    ))}
                  </div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Active Processing</p>
              </div>
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-4xl mx-auto mb-16">
        <div className="glass-card p-6 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-electric-indigo/10 blur-[80px] rounded-full pointer-events-none" />
          <h2 className="text-4xl font-outfit font-bold text-white mb-8 text-center">Let's Build Together</h2>
          <form onSubmit={handleContactSubmit} className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-indigo transition-colors"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-indigo transition-colors"
              />
            </div>
            <textarea 
              rows="4" 
              placeholder="Tell us about your project" 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-indigo transition-colors"
            />
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-electric-indigo hover:bg-indigo-600 disabled:opacity-50 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all group cursor-pointer"
            >
              {isSubmitting ? 'Sending...' : (
                <>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
