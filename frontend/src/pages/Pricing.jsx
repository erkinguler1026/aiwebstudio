import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';

const Pricing = () => {
  const [isTurkish, setIsTurkish] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Küçük işletmeler ve bireysel girişimciler için.",
      price: isTurkish ? "4.999 ₺" : "$299",
      features: [
        "Tek Sayfa Web Tasarımı",
        "AI Destekli İçerik",
        "Responsive Tasarım",
        "Temel SEO Optimizasyonu",
        "1 Revizyon Hakkı"
      ],
      cta: "Hemen Başla",
      popular: false
    },
    {
      name: "Business",
      description: "Büyüyen firmalar için tam kapsamlı çözüm.",
      price: isTurkish ? "12.999 ₺" : "$899",
      features: [
        "5 Sayfaya Kadar Tasarım",
        "Özel AI Entegrasyonları",
        "Gelişmiş Animasyonlar",
        "Full SEO & Analytics",
        "Sınırsız Revizyon",
        "Öncelikli Destek"
      ],
      cta: "Bize Katıl",
      popular: true
    },
    {
      name: "Custom",
      description: "Büyük ölçekli ve özel yazılım projeleri.",
      price: "Özel Teklif",
      features: [
        "Kurumsal Çözümler",
        "Özel AI Model Eğitimi",
        "SaaS Altyapı Geliştirme",
        "7/24 Teknik Destek",
        "Ömür Boyu Güncelleme"
      ],
      cta: "Teklif Al",
      popular: false
    }
  ];

  return (
    <div className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-gradient"
          >
            Şeffaf Fiyatlandırma
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl mx-auto mb-10"
          >
            Sizin için en uygun paketi seçin. Türkiye'ye özel avantajlı fiyatlarımızla ajans kalitesini uygun maliyetle sunuyoruz.
          </motion.p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isTurkish ? 'text-white' : 'text-white/40'}`}>Global ($)</span>
            <button 
              onClick={() => setIsTurkish(!isTurkish)}
              className="w-14 h-8 bg-white/10 rounded-full relative p-1 transition-colors hover:bg-white/20"
            >
              <div className={`w-6 h-6 bg-primary rounded-full transition-all duration-300 ${isTurkish ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm ${isTurkish ? 'text-white' : 'text-white/40'}`}>Türkiye (₺)</span>
          </div>
          {isTurkish && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 flex items-center justify-center gap-2 text-accent text-xs font-semibold"
            >
              <Info size={14} /> TÜRKIYE ÖZEL %50+ INDIRIM UYGULANMIŞTIR
            </motion.div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`pricing-card premium-card p-10 rounded-3xl flex flex-col ${plan.popular ? 'popular border-primary/50' : ''}`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-white/40 text-sm mb-6 leading-relaxed">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Özel Teklif" && <span className="text-white/40 text-sm ml-2">/ proje</span>}
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-white/70">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-primary" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                plan.popular 
                ? 'bg-primary text-white hover:bg-primary-dark shadow-lx shadow-primary/20' 
                : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
