import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-outfit font-bold text-white mb-6"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-indigo to-purple-400">About</span> Us
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-3xl text-lg text-slate-400 leading-relaxed"
      >
        Biz, mühendislik disiplini ve yapay zekayı birleştirerek şirketler için premium dijital çözümler üreten Alpha AI Agency'iz. Amacımız, sıradan web siteleri değil, markanızı geleceğe taşıyacak 'akıllı asistanlar' ve 'interaktif deneyimler' inşa etmektir.
      </motion.p>
    </div>
  );
};

export default About;
