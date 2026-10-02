import React from 'react';
import { Link } from 'react-router-dom';
import { ScanEye, MapPin, TrendingUp, CloudSun, BellRing, Store, UsersRound, Bot, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { AGRILUCID_PROJECT } from '../../data/projectsData';
import { AnimatedSection } from '../common/AnimatedSection';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

const featureIcons: Record<string, React.ReactNode> = {
  ScanEye: <ScanEye className="w-5 h-5 text-blue-400" />,
  MapPin: <MapPin className="w-5 h-5 text-cyan-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-amber-400" />,
  CloudSun: <CloudSun className="w-5 h-5 text-blue-400" />,
  BellRing: <BellRing className="w-5 h-5 text-rose-400" />,
  Store: <Store className="w-5 h-5 text-teal-400" />,
  UsersRound: <UsersRound className="w-5 h-5 text-indigo-400" />,
  Bot: <Bot className="w-5 h-5 text-purple-400" />,
};

export const AgriLucidSpotlight: React.FC = () => {
  return (
    <AnimatedSection className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Spotlight Card */}
        <div className="rounded-3xl bg-slate-900/90 border border-blue-500/30 overflow-hidden shadow-2xl shadow-blue-950/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
            {/* Left Column: Presentation */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="amber" dot size="md">
                  Projet Phare Nexora237
                </Badge>
                <Badge variant="amber" size="sm">
                  Statut : {AGRILUCID_PROJECT.status}
                </Badge>
              </div>

              <div>
                <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                  AgriLucid
                </h3>
                <p className="text-blue-400 font-semibold text-base sm:text-lg mt-2">
                  {AGRILUCID_PROJECT.tagline}
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Face aux pertes de récoltes causées par les ravageurs et le dérèglement climatique, Nexora237 développe AgriLucid : une solution intégrant la vision par ordinateur et des modèles prédictifs adaptés aux cultures camerounaises (manioc, cacao, maïs, plantain).
              </p>

              {/* Status transparency note */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 space-y-1">
                <span className="font-semibold text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Rigueur & Transparence Scientifique
                </span>
                <p className="text-slate-400">
                  AgriLucid est un programme de R&D en cours de validation. Les fonctionnalités présentées correspondent aux prototypes et architectures actuellement soumis aux tests terrain.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link to="/projets#agrilucid">
                  <Button
                    variant="primary"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Explorer la fiche AgriLucid
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline">
                    Devenir partenaire agricole
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Preview & 8 planned capabilities summary */}
            <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  8 Axes Technologiques Prévus
                </span>
                <span className="text-[11px] font-mono text-blue-400 font-semibold">
                  R&D Cameroun
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {AGRILUCID_PROJECT.agriLucidFeatures?.slice(0, 6).map((feat) => (
                  <div
                    key={feat.id}
                    className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      {featureIcons[feat.iconName] || <CheckCircle2 className="w-4 h-4 text-blue-400" />}
                      <h4 className="text-xs font-bold text-white leading-tight">
                        {feat.title}
                      </h4>
                    </div>
                    <span className="inline-block text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">
                      {feat.status}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-500 text-center pt-2">
                + Agrimarché & Réseau paysan détaillé sur la page Projets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
