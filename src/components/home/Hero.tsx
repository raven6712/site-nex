import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, ShieldCheck, Terminal, Users, Cpu } from 'lucide-react';
import { Button } from '../common/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 sm:py-24 bg-radial-hero">
      {/* Dynamic ambient gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[450px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle tech background grid pattern */}
      <div className="absolute inset-0 pattern-grid-tech opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Cameroun Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md mb-8 shadow-sm"
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
        >
          L&apos;intelligence collective au service des{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400">
            solutions numériques locales.
          </span>
        </motion.h1>

        {/* Realistic, unpretentious value proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Nexora237 est une initiative technologique camerounaise qui rassemble développeurs, chercheurs et innovateurs pour concevoir des technologies concrètes — de l&apos;IA agricole avec <strong className="text-blue-400 font-semibold">AgriLucid</strong> aux architectures logicielles adaptées à nos réalités.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <Link to="/projets" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="primary"
              leftIcon={<Compass className="w-5 h-5" />}
              fullWidth
            >
              Découvrir nos projets
            </Button>
          </Link>
          <Link to="/contact" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              rightIcon={<ArrowRight className="w-4 h-4 text-cyan-400" />}
              fullWidth
            >
              Rejoindre la communauté
            </Button>
          </Link>
        </motion.div>

        {/* Key Indicators Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
        >
          <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/50">
            <div className="flex items-center gap-2 text-blue-400 mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">AgriTech & IA</span>
            </div>
            <p className="text-xs text-slate-400">Projets R&D ancrés dans les réalités du terroir</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/50">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <Terminal className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Code & Open Source</span>
            </div>
            <p className="text-xs text-slate-400">Pratiques d&apos;ingénierie logicielle rigoureuses</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/50">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Users className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Douala & Yaoundé</span>
            </div>
            <p className="text-xs text-slate-400">Rencontres physiques régulières et réseau actif</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/50">
            <div className="flex items-center gap-2 text-purple-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Crédibilité</span>
            </div>
            <p className="text-xs text-slate-400">Transparence technique et partenariats fiables</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
