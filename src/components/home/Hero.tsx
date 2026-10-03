import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Remplacez ces URLs par vos propres images situées dans public/
const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80',
];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Défilement automatique des images toutes les 6 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden py-16 sm:py-24 bg-slate-950">
      
      {/* --- 1. CARROUSEL D'IMAGES EN ARRIÈRE-PLAN --- */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out bg-cover bg-center ${
              index === currentImageIndex 
                ? 'opacity-60 scale-105 transition-transform duration-[10000ms]' 
                : 'opacity-0 scale-100'
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}

        {/* Dégradé léger et overlay pour garantir la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950" />
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
      </div>

      {/* --- 2. DYNAMIC AMBIENT GLOW --- */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[450px] bg-blue-500/15 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* --- 3. CONTENU PRINCIPAL --- */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 my-auto">
        
        {/* Cameroun Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 0.99, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md mb-6 shadow-xl"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Écosystème Tech Cameroun
          </span>
          <span className="text-amber-400 font-bold text-xs">★ 237</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.99, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
        >
          L'intelligence collective au service des{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400">
            solutions numériques locales.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.99, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Nexora237 est une initiative technologique camerounaise qui rassemble développeurs, chercheurs et innovateurs pour concevoir des technologies concrètes — de l'IA agricole avec <span className="text-blue-400 font-semibold">AgriLucid</span> aux architectures logicielles adaptées à nos réalités.
        </motion.p>

        {/* Boutons d'action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.99, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="/projets"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
          >
            <span>Découvrir nos projets</span>
          </a>
          <a
            href="/rejoindre"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold transition-all backdrop-blur-md flex items-center justify-center gap-2"
          >
            <span>Rejoindre la communauté</span>
            <span>→</span>
          </a>
        </motion.div>

        {/* Indicateurs de défilement (Puces) */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentImageIndex ? 'w-8 bg-blue-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

      </div>

      {/* --- 4. CARTES DU BAS --- */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full mt-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
              <span>🌱</span>
              <span>AGRITECH & IA</span>
            </div>
            <p className="text-xs text-slate-400">Projets R&D ancrés dans les réalités du terroir</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-sm mb-1">
              <span>&gt;_</span>
              <span>CODE & OPEN SOURCE</span>
            </div>
            <p className="text-xs text-slate-400">Pratiques d'ingénierie logicielle rigoureuses</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
              <span>👥</span>
              <span>DSCHANG & YAOUNDÉ</span>
            </div>
            <p className="text-xs text-slate-400">Rencontres physiques régulières et réseau actif</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm mb-1">
              <span>🛡️</span>
              <span>CRÉDIBILITÉ</span>
            </div>
            <p className="text-xs text-slate-400">Transparence technique et partenariats fiables</p>
          </div>

        </div>
      </div>

    </section>
  );
};
