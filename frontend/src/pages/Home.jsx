import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Zap, ChevronRight, Send, Monitor, Globe, BarChart3, ShieldCheck } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

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
    <div className="px-6">
      {/* Fineart Style Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center max-w-6xl mx-auto py-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-12"
        >
          Intelligence & Engineering
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-12 text-gradient"
        >
          KOD ZEKA İLE <br /> BULUŞUYOR.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl text-lg md:text-xl text-white/50 leading-relaxed mb-16"
        >
          Mühendislik disiplini ve yapay zekayı birleştirerek, işletmenizi geleceğin dijital dünyasına taşıyoruz. 
          Sadece web sitesi değil, akıllı dijital ekosistemler inşa ediyoruz.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a href="#contact" className="px-12 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform active:scale-95">
            Projeye Başla
          </a>
          <Link to="/portfolio" className="px-12 py-5 glass-morphism rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
            Portfolyoyu İncele
          </Link>
        </motion.div>
      </section>

      {/* Bento Grid Services Section */}
      <section id="services" className="max-w-7xl mx-auto mb-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-gradient">Hizmetlerimiz</h2>
            <p className="text-white/40 text-lg">Geleceği şekillendiren teknolojiler.</p>
          </div>
          <Link to="/portfolio" className="text-primary font-bold flex items-center gap-2 group underline decoration-primary/20 underline-offset-8">
            Hepsini Gör <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:h-[700px]">
          {/* Main Bento Card */}
          <div className="md:col-span-2 md:row-span-2 premium-card p-12 rounded-[40px] flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -mr-20 -mt-20 group-hover:bg-primary/30 transition-colors" />
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                <Cpu className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">AI Entegrasyonlu <br /> Geliştirme</h3>
              <p className="text-white/50 text-xl max-w-md leading-relaxed">
                OpenAI, Anthropic ve yerel LLM modellerini kullanarak iş süreçlerinizi otomatize eden akıllı web uygulamaları.
              </p>
            </div>
            <div className="flex gap-4 mt-12">
              <span className="px-5 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest bg-white/5">LLM</span>
              <span className="px-5 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest bg-white/5">Automation</span>
            </div>
          </div>

          {/* Small Bento Cards */}
          <div className="premium-card p-10 rounded-[40px] flex flex-col justify-between group">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 border border-accent/20">
              <Monitor className="text-accent w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Premium Dashboard</h3>
              <p className="text-white/40 text-sm leading-relaxed">Endüstriyel hız ve ISO standartlarında veri görselleştirme panelleri.</p>
            </div>
          </div>

          <div className="premium-card p-10 rounded-[40px] flex flex-col justify-between group">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 border border-secondary/20">
              <ShieldCheck className="text-secondary w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Güvenli Altyapı</h3>
              <p className="text-white/40 text-sm leading-relaxed">En yüksek güvenlik protokolleri ile korunan, ölçeklenebilir bulut mimarileri.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Guide Interactive Section */}
      <section className="max-w-4xl mx-auto mb-48 text-center relative">
        <div className="absolute -inset-40 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="relative z-10"
        >
          <div className="inline-block p-8 glass-morphism rounded-[32px] mb-12 shadow-2xl relative">
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rotate-45 glass-morphism border-t-0 border-l-0" />
            <p className="text-xl md:text-2xl font-medium tracking-tight">
              "Tüm sistemler hazır. <span className="text-primary">aiwebstudio.dev</span> üzerinden 
              dünyaya açıldık. Sıradaki büyük projenizi planlayalım mı?"
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-primary via-secondary to-accent group-hover:scale-110 transition-transform duration-500">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center border-4 border-background overflow-hidden">
                  <Bot className="text-primary w-12 h-12" />
                </div>
              </div>
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-background rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-white tracking-widest uppercase text-xs mb-2">Alpha AI Guide</span>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3].map(i => (
                    <motion.div 
                      key={i}
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                      className="w-1.5 h-1.5 bg-primary rounded-full"
                    />
                  ))}
                </div>
                <span className="text-[10px] text-white/30 font-bold tracking-[0.2em] uppercase">Sistem Aktif</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Fineart Style Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto mb-32">
        <div className="premium-card rounded-[50px] p-12 md:p-24 overflow-hidden relative border-white/5">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full -mb-64 -mr-64 pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Birlikte <br /> İnşa Edelim.</h2>
              <p className="text-white/40 text-lg leading-relaxed mb-12">
                Fikrinizi bir mühendislik harikasına dönüştürmek için hazırız. 
                Mesajınızı bırakın, 24 saat içinde strateji planımızla size dönelim.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white/60">
                   <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center"><Globe size={18}/></div>
                   <span>Global & Remote</span>
                </div>
                <div className="flex items-center gap-4 text-white/60">
                   <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center"><BarChart3 size={18}/></div>
                   <span>Data-Driven Strategy</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="flex flex-col gap-6">
              <input 
                type="text" 
                placeholder="İsim" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-lg focus:outline-none focus:border-primary transition-colors hover:bg-white/10"
              />
              <input 
                type="email" 
                placeholder="E-posta" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-lg focus:outline-none focus:border-primary transition-colors hover:bg-white/10"
              />
              <textarea 
                rows="4" 
                placeholder="Projenizden bahsedin" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-lg focus:outline-none focus:border-primary transition-colors hover:bg-white/10"
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-white text-black font-bold py-6 rounded-3xl text-xl flex items-center justify-center gap-3 hover:scale-[0.98] transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Gönderiliyor...' : (
                  <>Mesaj Gönder <Send size={24} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
