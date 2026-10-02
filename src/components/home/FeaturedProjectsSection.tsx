import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/projectsData';
import { AnimatedSection } from '../common/AnimatedSection';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export const FeaturedProjectsSection: React.FC = () => {
  // We exclude AgriLucid here since it has its own dedicated spotlight
  const otherProjects = PROJECTS_DATA.filter((p) => p.id !== 'agrilucid');

  return (
    <AnimatedSection className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            badgeText="Portefeuille d'applications"
            badgeVariant="cyan"
            title="Des solutions conçues pour un impact"
            highlightedWord="tangible."
            description="Explorez nos réalisations et travaux en cours, pensés pour la santé, l'éducation et l'inclusion numérique."
            align="left"
            className="mb-0"
          />

          <Link to="/projets" className="shrink-0">
            <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4 text-cyan-400" />}>
              Tous les projets ({PROJECTS_DATA.length})
            </Button>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/80 border border-slate-800/80 overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col hover:-translate-y-1.5 shadow-lg shadow-black/30"
            >
              {/* Image Preview */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge variant="slate" size="sm" className="bg-slate-950/80 backdrop-blur-md">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge
                    variant={project.status === 'En production' ? 'amber' : 'cyan'}
                    size="sm"
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs font-semibold text-blue-400">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-3 border-t border-slate-800/60">
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link to={`/projets#${project.id}`} className="block">
                    <Button
                      variant="ghost"
                      size="sm"
                      fullWidth
                      className="justify-between text-slate-200 hover:text-white"
                      rightIcon={<ArrowRight className="w-3.5 h-3.5 text-cyan-400" />}
                    >
                      Détails de la solution
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
