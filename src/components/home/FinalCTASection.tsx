import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, MessageSquare } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';
import { Button } from '../common/Button';

export const FinalCTASection: React.FC = () => {
  return (
    <AnimatedSection className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      {/* Centered glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Faites partie du mouvement 237
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Prêt à apprendre, collaborer et bâtir{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
            les solutions de demain ?
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Que vous soyez développeur chevronné, étudiant curieux, designer UI/UX ou porteur d'idée, votre place est parmi nous.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/contact" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="primary"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              fullWidth
            >
              Nous rejoindre dès maintenant
            </Button>
          </Link>

          <Link to="/evenements" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              leftIcon={<MessageSquare className="w-4 h-4 text-cyan-400" />}
              fullWidth
            >
              Participer au prochain meetup
            </Button>
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};
