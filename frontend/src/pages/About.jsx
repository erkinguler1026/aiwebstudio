import { motion } from 'framer-motion';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto min-h-[80vh]">
      <div className="max-w-4xl">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-8"
        >
          Biz Kimiz?
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-bold tracking-tight mb-12 text-gradient"
        >
          GELECEĞI BUGÜN <br /> İNŞA EDİYORUZ.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/40 text-xl md:text-2xl leading-relaxed mb-20"
        >
          Alfa Yapay Zeka Stüdyosu olarak, standartların ötesine geçiyoruz. 
          Sıradan bir ajans değil, mühendislik disipliniyle AI potansiyelini birleştiren bir danışmanlık ve teknoloji üretim merkeziyiz.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-white/5">
        <div className="space-y-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
            <Target className="text-primary w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">Misyonumuz</h3>
          <p className="text-white/40 text-sm leading-relaxed">
            Karmaşık mühendislik problemlerini akıllı AI çözümleri ve premium tasarımlarla basitleştirmek.
          </p>
        </div>
        <div className="space-y-6">
          <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
            <Lightbulb className="text-secondary w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">Vizyonumuz</h3>
          <p className="text-white/40 text-sm leading-relaxed">
            Dijital dönüşümün sadece bir adım değil, markanız için bir sıçrama olmasını sağlamak.
          </p>
        </div>
        <div className="space-y-6">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20">
            <TrendingUp className="text-accent w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">Hedefimiz</h3>
          <p className="text-white/40 text-sm leading-relaxed">
            Türkiye ve dünya pazarında, en yüksek kalitede AI tabanlı dijital ekosistemler kurmak.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
