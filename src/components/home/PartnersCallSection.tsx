import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, Building2, GraduationCap, Coins, ArrowRight, ShieldCheck } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';
import { Button } from '../common/Button';

export const PartnersCallSection: React.FC = () => {
  const partnerTypes = [
    {
      icon: <Building2 className="w-5 h-5 text-blue-400" />,
      title: 'Entreprises & PME locales',
      description: 'Accédez à des profils technologiques qualifiés et confiez la conception de prototypes numériques solides à des talents rigoureux.'
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
      title: 'Universités & Centres de Recherche',
      description: 'Collaborons sur la validation agronomique et l\'expérimentation terrain des modèles d\'IA foliaire (AgriLucid).'
    },
    {
      icon: <Coins className="w-5 h-5 text-amber-400" />,
      title: 'Bailleurs & Fonds d\'Impact',
      description: 'Appuyez le passage à l\'échelle de solutions résilientes répondant à des enjeux vitaux en Afrique Centrale (sécurité alimentaire, santé).'
    }
  ];

  return (
    <AnimatedSection className="py-24 bg-slate-900/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Handshake className="w-3.5 h-3.5" />
              Synergies & Partenariats
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Bâtissons ensemble une tech africaine{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                crédible et pérenne.
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Nexora237 ne cherche pas le buzz, mais la solidité technique et l&apos;impact concret. Nous ouvrons des collaborations constructives avec les organisations qui partagent cette exigence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {partnerTypes.map((partner) => (
              <div
                key={partner.title}
                className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/90 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {partner.icon}
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {partner.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-slate-800">
            <Link to="/contact">
              <Button
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Initier un échange partenaire
              </Button>
            </Link>

            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Réponse assurée sous 48h par notre comité de coordination
            </span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
