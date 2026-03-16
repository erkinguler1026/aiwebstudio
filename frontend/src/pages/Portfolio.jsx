import React from 'react';
import { ChevronRight } from 'lucide-react';

const Portfolio = () => {
  return (
    <section className="mb-24 pt-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-outfit font-bold text-white mb-4">Featured Work</h2>
        <p className="text-slate-400">Teknik mükemmellik ve estetiğin buluştuğu noktalar.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        {[
          { title: "AI-FMEA Portal", tag: "Industrial AI", color: "from-blue-600 to-cyan-500", desc: "Mühendislik standartlarına tam uyumlu, yapay zeka destekli süreç analiz platformu." },
          { title: "SWOT Analysis Pro", tag: "Business SaaS", color: "from-indigo-600 to-purple-500", desc: "İşletmeler için anlık verilerle desteklenen akıllı strateji yönetim aracı." },
          { title: "ISO9001-Auditor Beta", tag: "Compliance Tech", color: "from-green-500 to-emerald-400", desc: "Denetçiler için otonom raporlama ve risk değerlendirme paneli." },
          { title: "Smart Dashboard UI", tag: "Premium Dashboard", color: "from-orange-500 to-red-500", desc: "Gerçek zamanlı animasyonlu ve glassmorphism temalı premium yönetim ekranları." }
        ].map((project, idx) => (
          <div key={idx} className="group relative glass-card p-1 overflow-hidden rounded-2xl cursor-pointer">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
            <div className="relative glass-card p-12 h-[350px] flex flex-col justify-end">
              <span className="text-electric-indigo text-xs font-bold tracking-widest uppercase mb-2">{project.tag}</span>
              <h4 className="text-3xl font-outfit font-bold text-white mb-4">{project.title}</h4>
              <p className="text-slate-400 text-sm mb-6 max-w-sm">{project.desc}</p>
              <button className="flex items-center gap-2 text-white font-semibold hover:text-electric-indigo transition-colors group/btn">
                View Case Study <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
