import React from 'react';
import { Code2, Cpu, Palette, ShieldCheck, GraduationCap, Rocket } from 'lucide-react';
import { DOMAINS_DATA } from '../../data/domainsData';
import { AnimatedSection } from '../common/AnimatedSection';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-cyan-400" />,
  Cpu: <Cpu className="w-6 h-6 text-blue-400" />,
  Palette: <Palette className="w-6 h-6 text-amber-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-rose-400" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-purple-400" />,
  Rocket: <Rocket className="w-6 h-6 text-yellow-400" />,
};

export const DomainsSection: React.FC = () => {
  return (
    <AnimatedSection className="py-24 bg-slate-900/40 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Champs d'intervention"
          badgeVariant="cyan"
          title="Nos pôles d'expertise et de"
          highlightedWord="transmission."
          description="Des spécialités techniques complémentaires pour construire des produits numériques fiables de bout en bout."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DOMAINS_DATA.map((domain) => (
            <Card
              key={domain.id}
              interactive
              hoverGlow="cyan"
              className="flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center mb-6">
                  {iconMap[domain.iconName] || <Code2 className="w-6 h-6 text-cyan-400" />}
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight">
                  {domain.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {domain.description}
                </p>
              </div>

              {/* Skills Badges */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {domain.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
