import React from 'react';
import { Terminal, Leaf, Video, Handshake, Calendar, Users } from 'lucide-react';
import { INITIATIVES_DATA } from '../../data/domainsData';
import { AnimatedSection } from '../common/AnimatedSection';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

const initiativeIcons: Record<string, React.ReactNode> = {
  Terminal: <Terminal className="w-5 h-5 text-blue-400" />,
  Leaf: <Leaf className="w-5 h-5 text-cyan-400" />,
  Video: <Video className="w-5 h-5 text-purple-400" />,
  Handshake: <Handshake className="w-5 h-5 text-amber-400" />,
};

export const InitiativesSection: React.FC = () => {
  return (
    <AnimatedSection className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Montée en compétences & R&D"
          badgeVariant="purple"
          title="Nos programmes continus et"
          highlightedWord="initiatives."
          description="Au-delà des simples conférences, Nexora237 opère des laboratoires de travail et des filières d'apprentissage intensives."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INITIATIVES_DATA.map((init) => (
            <Card
              key={init.id}
              interactive
              hoverGlow="cyan"
              className="flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                    {initiativeIcons[init.iconName] || <Terminal className="w-5 h-5 text-blue-400" />}
                  </div>
                  <Badge variant="outline" size="sm">
                    {init.format}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {init.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {init.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6 grid grid-cols-2 gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">{init.targetAudience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">{init.cadence}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
