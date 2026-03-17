import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Zap, ChevronRight, Send, Monitor, Globe, Settings, LifeBuoy } from 'lucide-react';
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
      {/* Business Focused Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center max-w-6xl mx-auto py-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-12"
        >
          Yapay Zeka Destekli Web Çözümleri
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-bold tracking-tighter leading-[1.1] mb-12 text-gradient"
        >
          YENİ NESİL <br /> AI WEB SİTELERİ.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-3xl text-lg md:text-2xl text-white/60 leading-relaxed mb-16"
        >
          İşletmeniz için yapay zeka destekli web siteleri <span className="text-white">hazırlıyor</span>, 
          AI araçları ile <span className="text-white">donatıyor</span> ve 
          7/24 kesintisiz <span className="text-white">teknik destek & bakım</span> hizmeti veriyoruz.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a href="#contact" className="px-12 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-white/10">
            Sitenizi Bugün Başlatın
          </a>
          <Link to="/pricing" className="px-12 py-5 glass-morphism rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
            Paketleri İncele
          </Link>
        </motion.div>
      </section>

      {/* Services Re-Focused for Core Business */}
      <section id="services" className="max-w-7xl mx-auto mb-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-gradient">Hizmet Alanlarımız</h2>
            <p className="text-white/40 text-lg leading-relaxed">Web dünyasını AI ile yeniden tanımlıyoruz. Hazırlamadan bakıma, her adımda yanınızdayız.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service: Preparation & Sales */}
          <div className="md:col-span-2 premium-card p-12 rounded-[40px] flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full -mr-20 -mt-20" />
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                <Globe className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">AI Web Sitesi Hazırlama & Satış</h3>
              <p className="text-white/50 text-lg max-w-md leading-relaxed">
                İşinize özel tasarlanmış, SEO uyumlu ve içinde yapay zeka asistanları barındıran modern web siteleri üretiyoruz. Statik siteleri değil, yaşayan akıllı sistemleri satıyoruz.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-2 text-primary font-bold">
              <span>Hemen Teklif Al</span> <ChevronRight size={18} />
            </div>
          </div>

          {/* Service: Maintenance & Support */}
          <div className="premium-card p-10 rounded-[40px] flex flex-col justify-between group">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 border border-accent/20">
              <LifeBuoy className="text-accent w-7 h-7" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Teknik Destek & Bakım</h3>
              <p className="text-white/40 text-sm leading-relaxed">Sitenizin güncel kalması, güvenliği ve performans takibi bizim sorumluluğumuzda. 7/24 teknik servis desteği ile işiniz asla aksamaz.</p>
            </div>
          </div>

          {/* Service: AI Integration */}
          <div className="premium-card p-10 rounded-[40px] flex flex-col justify-between group">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 border border-secondary/20">
              <Bot className="text-secondary w-7 h-7" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">AI Entegrasyonu</h3>
              <p className="text-white/40 text-sm leading-relaxed">Mevcut web sitelerinize ChatGPT, Claude veya özel LLM tabanlı müşteri destek botları ve veri analiz araçları entegre ediyoruz.</p>
            </div>
          </div>

          {/* Service: Hosting & Infrastructure */}
          <div className="md:col-span-2 premium-card p-12 rounded-[40px] flex flex-row items-center justify-between group overflow-hidden relative">
             <div className="max-w-md">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 text-white">
                  <Settings className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-2 tracking-tight">Altyapı & Servis</h3>
                <p className="text-white/40 text-sm leading-relaxed">Dünya standartlarında Cloudflare altyapısı ile yıldırım hızında ve %99.9 uptime garantili servis sağlıyoruz.</p>
             </div>
             <div className="hidden lg:block">
                <div className="w-32 h-32 bg-primary/20 blur-[60px] rounded-full animate-pulse" />
             </div>
          </div>
        </div>
      </section>

      {/* AI Guide Interactive Section - Updated Message */}
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
              "Bakım modülü aktif. <span className="text-primary">Tüm AI Web Sitelerimiz</span> %100 
              performansla çalışıyor. Sizin işletmenize hangisini kuralım?"
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-primary via-secondary to-accent">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center border-4 border-background overflow-hidden relative">
                  <Bot className="text-primary w-12 h-12" />
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="absolute inset-0 border border-primary/20 rounded-full"
                  />
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
                <span className="text-[10px] text-white/30 font-bold tracking-[0.2em] uppercase">Canlı Destek Hattı Aktif</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section - Updated for Direct Enquiry */}
      <section id="contact" className="max-w-7xl mx-auto mb-32">
        <div className="premium-card rounded-[50px] p-12 md:p-24 overflow-hidden relative border-white/5">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full -mb-64 -mr-64 pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Hemen <br /> Başlayalım.</h2>
              <p className="text-white/40 text-lg leading-relaxed mb-12">
                Hayalinizdeki akıllı web sitesini projelendirmek ve yıllık servis planlarımızı öğrenmek için formu doldurun. Uzman ekibimiz 24 saat içinde demo ile dönecektir.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white/60 font-semibold">
                   <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center bg-primary/5 text-primary"><Zap size={18}/></div>
                   <span>Hızlı Kurulum (15-30 Gün)</span>
                </div>
                <div className="flex items-center gap-4 text-white/60 font-semibold">
                   <div className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center bg-accent/5 text-accent"><LifeBuoy size={18}/></div>
                   <span>Ömür Boyu Teknik Servis</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="flex flex-col gap-6">
              <input 
                type="text" 
                placeholder="İsim" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-lg focus:outline-none focus:border-primary transition-colors hover:bg-white/10"
              />
              <input 
                type="email" 
                placeholder="E-posta" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-lg focus:outline-none focus:border-primary transition-colors hover:bg-white/10"
              />
              <textarea 
                rows="4" 
                placeholder="Projeniz veya istediğiniz servis türü (AI Web Sitesi, Bakım vb.)" 
                required
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
                  <>Hemen Teklif Al <ChevronRight size={24} /></>
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
