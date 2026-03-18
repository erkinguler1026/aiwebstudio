import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, ChevronRight, Globe, Shield, CheckCircle2, 
  Rocket, Wrench, Settings, BarChart3, Headphones,
  Activity, Cpu, Lock, ShieldCheck, ShieldAlert
} from 'lucide-react';
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
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/api/contact`, formData);
      toast.success(response.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Bir hata oluştu!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: <Rocket className="text-primary w-10 h-10" />,
      title: "Işık Hızında Çalışan Web Sitesi",
      desc: "Google'ın sevdiği, anında açılan ve müşterinizi bekletmeyen modern altyapı.",
      outcome: "Yüksek SEO Sıralaması"
    },
    {
      icon: <Headphones className="text-accent w-10 h-10" />,
      title: "7/24 Akıllı Asistan",
      desc: "Siz uyurken müşterilerinizin sorularını yanıtlayan, randevu alan akıllı yapay zeka.",
      outcome: "Kesintisiz Müşteri İlişkisi"
    },
    {
      icon: <Wrench className="text-secondary w-10 h-10" />,
      title: "Bizden, Full Servis",
      desc: "Bakım, güvenlik, güncelleme... Siz işinizle ilgilenin, teknik dertleri biz çözelim.",
      outcome: "Sıfır Teknik Sorun"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] text-white selection:bg-primary/30 overflow-x-hidden">
      <div className="bg-mesh" />
      
      {/* 1. Hero Section - Benefit Centric */}
      <section className="relative pt-48 pb-10 overflow-hidden px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-[12px] font-bold tracking-[0.3em] uppercase text-primary mb-10 inline-block"
          >
            <Zap size={12} className="inline-block mr-2 animate-pulse" /> ALFA AI SİSTEM STRATEJİMİZ
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-bold tracking-tight leading-[1.1] mb-10 text-white uppercase"
          >
            Web Siteniz Sizin <br /> 
            İçin <span className="text-gradient">Çalışsın</span>.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-3xl mx-auto text-xl md:text-2xl text-white/50 leading-relaxed mb-16 font-light"
          >
            Yapay zeka destekli akıllı web siteleriyle müşteri kazanın, satışlarınızı otomatikleştirin ve işinizi büyütün. Biz sadece site tasarlamıyoruz; <span className="text-white font-medium">sizin yerinize 7/24 satış yapan akıllı sistemler kuruyoruz.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 mb-10 text-white text-[16px] uppercase tracking-widest font-bold underline decoration-primary underline-offset-4"
          >
            <Shield size={14} className="text-primary" /> 100% Teknik Servis Garantisi
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a href="#contact" className="px-12 py-6 bg-primary text-white rounded-2xl font-bold text-xl hover:bg-white hover:text-black transition-all shadow-xl shadow-primary/20">
              Ücretsiz Strateji Analizi Al
            </a>
            <Link to="/pricing" className="px-12 py-6 glass-morphism rounded-2xl font-bold text-xl hover:bg-white/5 transition-colors border border-white/10">
              Sistemleri İncele
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Features Grid */}
      <section className="max-w-7xl mx-auto py-10 px-6 border-y border-white/5">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { step: "01", icon: <Globe size={32} />, title: "Ziyaretçi Çekin", desc: "SEO ve yapay zeka destekli içeriklerle hedef kitlenize anında ulaşın." },
            { step: "02", icon: <Rocket size={32} />, title: "Müşteriye Dönüştürün", desc: "Kusursuz kullanıcı deneyimi ile ziyaretçileri sadık müşterilere çevirin." },
            { step: "03", icon: <Zap size={32} />, title: "Otomatikleştirin", desc: "Tüm satış ve iletişim süreçlerinizi 7/24 çalışan sistemlere devredin." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-6 p-8 group hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 rounded-[30px] border border-transparent">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-white/10 group-hover:text-primary transition-colors">{item.step}</span>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-primary">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <p className="text-white/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Core Outcomes (Bento Box style but minimal) */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="premium-card p-12 rounded-[40px] border border-white/5 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] hover:-translate-y-2 transition-all duration-300 group">
              <div className="mb-8 p-4 bg-white/5 w-fit rounded-2xl border border-white/10 group-hover:bg-primary/10 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-3xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-white/40 text-lg mb-8 leading-relaxed">{benefit.desc}</p>
              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
                <CheckCircle2 size={16} /> {benefit.outcome}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Service Lifecycle (Sistem Yaşam Döngüsü) */}
      <section className="max-w-7xl mx-auto py-10 px-6 border-t border-white/5">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">3 Katmanlı <span className="text-primary">Sistem Gücü.</span></h2>
          <p className="text-white/40 text-xl max-w-2xl mx-auto">Sadece site yapıp bırakmıyoruz; işinizi büyüten yaşayan bir ekosistem kuruyoruz.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "1. Kurulum (Start)", 
              desc: "Web mimarisi, AI entegrasyonu ve temel SEO altyapısının 2-12 gün içinde sıfırdan inşası.",
              badge: "Tek Seferlik"
            },
            { 
              title: "2. Yönetim (Manage)", 
              desc: "12 ay boyunca hosting, güvenlik, teknik sigorta ve yapay zeka sağlığı takibi.",
              badge: "Zorunlu Servis",
              highlight: true
            },
            { 
              title: "3. Büyüme (Grow)", 
              desc: "Google Ads, AI Lead Gen ve dönüşüm optimizasyonu ile kârınızı katlayan stratejik destek.",
              badge: "Stratejik Katman"
            }
          ].map((layer, i) => (
            <div key={i} className={`p-10 rounded-[40px] border hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 ${layer.highlight ? 'border-primary/30 bg-primary/5 shadow-2xl shadow-primary/10' : 'border-white/5 bg-white/5'}`}>
              <span className={`inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 ${layer.highlight ? 'bg-primary text-white' : 'bg-white/10 text-white/50'}`}>
                {layer.badge}
              </span>
              <h4 className="text-2xl font-bold mb-4 text-white">{layer.title}</h4>
              <p className="text-white/40 leading-relaxed">{layer.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Workflow / Success Timeline */}
      <section className="max-w-7xl mx-auto py-12 px-6 border-t border-white/5">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Sisteminiz <span className="text-primary">Nasıl Doğuyor?</span></h2>
          <p className="text-white/40 text-xl max-w-2xl mx-auto">Paranızı ve vaktinizi boşa harcamıyoruz; her adımı planlanmış bir mühendislik süreci işletiyoruz.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-4 relative">
           <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-px bg-white/10 -z-10" />
           {[
             { day: "Day 01", title: "Analiz & Plan", desc: "İş modelinizi ve rakiplerinizi analiz edip AI stratejinizi belirliyoruz.", icon: <BarChart3 size={24}/> },
             { day: "Day 03", title: "Mühendislik", desc: "Zırhlı kod yapısı ve AI modüllerini projenize entegre ediyoruz.", icon: <Cpu size={24}/> },
             { day: "Day 07", title: "Test & Kalite", desc: "Lighthouse performans ve siber güvenlik taramalarını yapıyoruz.", icon: <ShieldCheck size={24}/> },
             { day: "Day 10", title: "Lansman & Büyüme", desc: "Sistemi yayına alıp 7/24 satış yapacak şekilde devreye alıyoruz.", icon: <Rocket size={24}/> }
           ].map((step, i) => (
             <div key={i} className="p-8 text-center flex flex-col items-center group hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-6">
                  {step.icon}
                </div>
                <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] mb-2">{step.day}</span>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 6. Philosophy */}
      <section className="max-w-5xl mx-auto py-20 px-6 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/50 to-transparent" />
        <h1 className="text-white text-lg uppercase tracking-[0.5em] font-black mb-6 mt-12 underline decoration-primary underline-offset-8">Neden Alfa AI Studio?</h1>
        <p className="text-3xl md:text-5xl font-light text-white leading-tight">
          "Biz sadece kod yazmıyoruz; işinizi <span className="text-primary font-medium">dijital bir satış makinesine</span> dönüştüren akıllı bir mimari inşa ediyoruz."
        </p>
      </section>

      {/* 7. Digital Safety Cards */}
      <section className="max-w-7xl mx-auto py-12 px-6 border-t border-white/5 bg-[radial-gradient(circle_at_center,_rgba(0,102,255,0.03)_0%,_transparent_70%)]">
        <div className="text-center mb-8">
          <div className="flex items-center gap-2 mb-6 bg-white/5 w-fit mx-auto px-4 py-2 rounded-full border border-white/10 text-primary text-[10px] uppercase tracking-[0.3em] font-black">
            <ShieldAlert size={12} className="animate-pulse" /> Dijital Zırh & Güvenlik
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">İşiniz <span className="text-white">Zırhlı Kodlarla</span> Güvende.</h2>
          <p className="max-w-3xl mx-auto text-white/40 text-xl font-light">Siber saldırılara karşı askeri düzeyde koruma.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Lock className="text-primary" size={40} />, title: "Zırhlı Kod Yapısı", desc: "Askeri düzeyde koruma sağlayan akıllı mimari." },
            { icon: <ShieldCheck className="text-accent" size={40} />, title: "Veri Kalkanı", desc: "Uçtan uca şifreli, 100% güvenli depolama." },
            { icon: <Activity className="text-secondary" size={40} />, title: "Anlık Sızma Testi", desc: "1.000+ senaryo ile günlük taranan altyapı." }
          ].map((item, index) => (
            <div key={index} className="premium-card p-10 rounded-[40px] border-white/5 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] hover:-translate-y-2 transition-all duration-300 flex flex-col gap-6" >
              <div className="p-4 bg-white/5 w-fit rounded-2xl border border-white/10">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-white/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Digital Insurance & Risk Management (RE-ALIGNED) */}
      <section className="max-w-7xl mx-auto py-12 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              İşiniz Sadece Kodla Değil, <br />
              <span className="text-primary">Sigorta ile de</span> Güvende.
            </h2>
            <p className="text-white/50 text-xl leading-relaxed mb-12 max-w-2xl">
              İş ortaklığı ağımız üzerinden, dijital varlıklarınızı siber risklere karşı <span className="text-white font-bold underline decoration-primary underline-offset-4">poliçe kapsamına</span> alıyoruz.
            </p>
            <div className="space-y-6">
              {[
                { title: "Siber Risk Poliçesi", desc: "Veri sızıntısı ve hacking risklerine karşı mali teminat." },
                { title: "İş Durması Teminatı", desc: "Teknik aksaklık kaynaklı gelir kaybına koruma." },
                { title: "Acente Danışmanlığı", desc: "Size en uygun poliçenin uzmanlarca hazırlanması." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                   <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                     <CheckCircle2 size={14} className="text-primary" />
                   </div>
                   <div>
                     <h4 className="text-lg font-bold text-white">{item.title}</h4>
                     <p className="text-white/40 text-sm">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
             <div className="symmetric-frame p-16 glass-morphism rounded-[60px] border border-white/10 text-center relative group hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_50px_rgba(168,85,247,0.25)] transition-all duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
                <ShieldCheck className="w-24 h-24 text-primary mx-auto mb-8 hover:scale-110 transition-all duration-500" />
                <h3 className="text-3xl font-bold mb-4 text-[28px] leading-tight">ISO31000:2018 Risk Yönetim Sistemi Kapsamında  <br /> & Güvence</h3>
                <p className="text-white/30 text-xs uppercase tracking-widest font-black">Insurance Partnership</p>
                <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-4 opacity-30 grayscale contrast-125">
                   <span className="font-black italic text-xs uppercase tracking-tighter">Siber Güvence Partnerliği</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 9. After-Sales Service (RE-ALIGNED) */}
      <section className="max-w-7xl mx-auto py-12 px-6 border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Arabanızın Servisi <br />
              Varsa, <span className="text-primary">Sitenizin de Olmalı.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: <Zap className="text-primary" size={32} />, title: "Alfa Dakik", desc: "60 dakikada müdahale sözü." },
                { icon: <Activity className="text-accent" size={32} />, title: "Teknik Sigorta", desc: "12 ay zorunlu bakım ve kalkan." },
                { icon: <Wrench className="text-secondary" size={32} />, title: "Yedek Parça", desc: "Her yeni AI modülü için hazır şasi." },
                { icon: <Cpu className="text-white" size={32} />, title: "Ağır Bakım", desc: "Yıllık rektifiye ve kod güncelleme." }
              ].map((card, i) => (
                <div key={i} className="flex flex-col gap-8 p-16 bg-white/5 rounded-[60px] border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_60px_rgba(168,85,247,0.3)] hover:-translate-y-2 transition-all duration-300 min-h-[420px] justify-center text-center items-center">
                  {card.icon}
                  <h4 className="text-2xl font-bold">{card.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
             <div className="symmetric-frame p-16 glass-morphism rounded-[60px] border border-white/10 text-center relative group hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_50px_rgba(168,85,247,0.25)] transition-all duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
                <Wrench className="w-32 h-32 text-primary mb-8 group-hover:rotate-45 transition-transform duration-700" />
                <h3 className="text-3xl font-bold mb-4">Tam Yetkili <br /> Teknik Servis</h3>
                <p className="text-white/30 uppercase tracking-widest font-bold text-xs">Alfa AI Studio Assurance</p>
                <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-4 opacity-30 grayscale contrast-125">
                   <span className="font-black italic text-xs uppercase tracking-tighter">Siber Güvence Partnerliği</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 10. Pricing Stripe */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <div className="glass-morphism p-12 md:p-20 rounded-[60px] border border-primary/30 bg-primary/5 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">Hemen Başlayalım mı?</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
            <div className="text-center">
              <span className="block text-white text-[16px] uppercase tracking-widest font-bold mb-2">Kurulum Başlangıcı</span>
              <p className="text-5xl font-black text-white">6.999 ₺ <span className="text-lg">+KDV /tek</span></p>
            </div>
            <div className="text-center">
              <span className="block text-white text-[16px] uppercase tracking-widest font-bold mb-2">Yönetim Paketi</span>
              <p className="text-5xl font-black text-primary">499 ₺ <span className="text-lg">+KDV /ay</span></p>
            </div>
          </div>
          <div className="text-center">
             <Link to="/pricing" className="inline-flex items-center gap-3 px-12 py-5 bg-white text-black font-bold rounded-2xl hover:bg-primary hover:text-white transition-all">
                Servis Paketlerini İncele <ChevronRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      {/* 11. Contact Form (FULL VERSION) */}
      <section id="contact" className="max-w-7xl mx-auto py-40 px-6">
        <div className="premium-card rounded-[60px] p-12 md:p-24 overflow-hidden relative border-white/5 hover:border-purple-500/50 transition-all duration-500">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Bize Bir Mesaj <br /> Bırakın.</h2>
              <p className="text-white/40 text-xl leading-relaxed mb-12">En geç 24 saat içinde sizi arayıp teknik çözümümüzü sunalım.</p>
              <div className="flex items-center gap-6 text-white/50">
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"><Zap size={16} className="text-yellow-400" /> Hızlı Dönüş</div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"><Shield size={16} className="text-primary" /> Güvenli İletişim</div>
              </div>
            </div>
            <form onSubmit={handleContactSubmit} className="flex flex-col gap-6">
              <input type="text" placeholder="İsim veya Firma Unvanı" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-xl focus:outline-none focus:border-primary transition-colors" />
              <input type="email" placeholder="E-posta Adresiniz" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-xl focus:outline-none focus:border-primary transition-colors" />
              <textarea rows="4" placeholder="Nasıl yardımcı olabiliriz?" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-xl focus:outline-none focus:border-primary transition-colors resize-none" />
              <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white font-bold py-6 rounded-2xl text-2xl hover:bg-white hover:text-black transition-all active:scale-[0.98] disabled:opacity-50">
                {isSubmitting ? 'Gönderiliyor...' : 'Teklif Almak İstiyorum'}
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
