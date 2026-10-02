import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Layers, Users2, Check } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';

export const QuickAbout: React.FC = () => {
  const pillars = [
    {
      icon: <BookOpen className="w-6 h-6 text-blue-400" />,
      title: 'Transmission & Émulation',
      description: 'Développer l\'autonomie technique des développeurs camerounais à travers des revues de code exigeantes, des ateliers de haut niveau et du mentorat continu.',
      points: ['Formations pratiques orientées production', 'Pair-programming et veille technologique']
    },
    {
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      title: 'Création de Solutions Résilientes',
      description: 'Passer de simples consommateurs de technologies à des bâtisseurs de systèmes capables de fonctionner dans des contextes réseau et d\'infrastructures contraints.',
      points: ['Projets ancrés dans les besoins locaux (AgriTech, Santé)', 'Développement open source et durable']
    },
    {
      icon: <Users2 className="w-6 h-6 text-amber-400" />,
      title: 'Réseau & Partenariats Stratégiques',
      description: 'Offrir aux entreprises, startups et institutions un vivier crédible de compétences technologiques vérifiées, rigoureuses et immédiatement opérationnelles.',
      points: ['Mise en relation directe avec les porteurs de projets', 'Soutien aux initiatives étudiantes et professionnelles']
    }
  ];

  return (
    <AnimatedSection className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Qui sommes-nous ?"
          badgeVariant="amber"
          title="Une initiative portée par l'exigence"
          highlightedWord="technologique."
          description="Née de la volonté d'accélérer l'autonomie digitale au Cameroun, Nexora237 crée les conditions pour que les talents locaux conçoivent des outils répondant directement à nos enjeux sociétaux."
        />

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar) => (
            <Card
              key={pillar.title}
              interactive
              hoverGlow="amber"
              className="flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center mb-6 shadow-inner">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                {pillar.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Link to Full About */}
        <div className="text-center">
          <Link
            to="/a-propos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-emerald-300 transition-colors group"
          >
            <span>Découvrir notre histoire, notre vision et nos valeurs</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};
