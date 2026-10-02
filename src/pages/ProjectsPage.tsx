import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ScanEye, 
  MapPin, 
  TrendingUp, 
  CloudSun, 
  BellRing, 
  Store, 
  UsersRound, 
  Bot, 
  ArrowRight, 
  Filter,
  CheckCircle2,
  Info
} from 'lucide-react';
import { PROJECTS_DATA, AGRILUCID_PROJECT } from '../data/projectsData';
import { ProjectCategory } from '../types/project';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

const agriLucidIcons: Record<string, React.ReactNode> = {
  ScanEye: <ScanEye className="w-5 h-5 text-blue-400" />,
  MapPin: <MapPin className="w-5 h-5 text-cyan-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-amber-400" />,
  CloudSun: <CloudSun className="w-5 h-5 text-blue-400" />,
  BellRing: <BellRing className="w-5 h-5 text-rose-400" />,
  Store: <Store className="w-5 h-5 text-teal-400" />,
  UsersRound: <UsersRound className="w-5 h-5 text-indigo-400" />,
  Bot: <Bot className="w-5 h-5 text-purple-400" />,
};

export const ProjectsPage: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchStatus = 
        selectedStatus === 'all' || 
        (selectedStatus === 'production' && project.status === 'En production') ||
        (selectedStatus === 'development' && (project.status === 'En développement' || project.status === 'Bêta privée')) ||
        (selectedStatus === 'rd' && project.status === 'En R&D');

      const matchCategory = selectedCategory === 'all' || project.category === selectedCategory;

      return matchStatus && matchCategory;
    });
  }, [selectedStatus, selectedCategory]);

  const categories: ProjectCategory[] = [
    'AgriTech & IA',
    'Santé & IA',
    'EdTech',
    'FinTech & Inclusion',
    'Cybersécurité'
  ];

  return (
    <div className="w-full">
      {/* 1. Header Page */}
      <section className="relative py-20 sm:py-28 bg-radial-hero overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="cyan" dot size="md" className="mb-6">
            Vitrine d'Ingénierie
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Nos projets et solutions{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
              technologiques.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos réalisations en production, nos logiciels en phase de développement actif et nos chantiers de recherche appliquée dédiés aux réalités camerounaises.
          </p>
        </div>
      </section>

      {/* 2. FOCUS PREMIUM AGRILUCID (Section 13) */}
      <section id="agrilucid" className="py-20 bg-slate-950 border-t border-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 border border-blue-500/30 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            {/* Ambient lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

            <div className="max-w-4xl space-y-6 mb-12">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="amber" dot size="md">
                  Projet Majeur Nexora237
                </Badge>
                <Badge variant="amber" size="sm">
                  Statut : {AGRILUCID_PROJECT.status}
                </Badge>
                <Badge variant="slate" size="sm">
                  {AGRILUCID_PROJECT.category}
                </Badge>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                AgriLucid : L&apos;IA au service des agriculteurs camerounais
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {AGRILUCID_PROJECT.longDescription}
              </p>

              {/* R&D Transparency alert box */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-amber-500/30 flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 space-y-1">
                  <span className="font-bold text-amber-400">Statut de validation R&D en toute transparence :</span>
                  <p className="text-slate-400">
                    Les 8 fonctionnalités ci-dessous correspondent aux modules en cours de spécification et prototypage. Conformément à notre charte, aucune fonctionnalité n&apos;est présentée comme déployée en production tant que les tests de validation agronomique de terrain ne sont pas certifiés.
                  </p>
                </div>
              </div>
            </div>

            {/* 8 AgriLucid Planned Features Grid */}
            <div className="space-y-4 mb-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Les 8 Piliers Technologiques Prévus :
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {AGRILUCID_PROJECT.agriLucidFeatures?.map((feature) => (
                  <div
                    key={feature.id}
                    className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-blue-500/40 transition-colors flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-3">
                        {agriLucidIcons[feature.iconName] || <CheckCircle2 className="w-5 h-5 text-blue-400" />}
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1.5 leading-snug">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80">
                      <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {feature.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AgriLucid CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-800">
              <Link to="/projets/agrilucid">
                <Button variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Voir la fiche technique complète d&apos;AgriLucid
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">
                  Participer à la taskforce R&D
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TOUS LES PROJETS AVEC FILTRES DYNAMIQUES */}
      <AnimatedSection className="py-20 bg-slate-900/40 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Catalogue & Projets"
            badgeVariant="cyan"
            title="L'ensemble de nos réalisations et"
            highlightedWord="chantiers."
            description="Filtrez par statut d'avancement ou domaine applicatif."
            align="left"
            className="mb-8"
          />

          {/* Filters Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
            {/* Status Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedStatus('all')}
                className={`text-xs font-medium px-3.5 py-2 rounded-xl transition-all ${
                  selectedStatus === 'all'
                    ? 'bg-blue-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                Tous les statuts
              </button>
              <button
                type="button"
                onClick={() => setSelectedStatus('production')}
                className={`text-xs font-medium px-3.5 py-2 rounded-xl transition-all ${
                  selectedStatus === 'production'
                    ? 'bg-blue-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                En production (Réalisés)
              </button>
              <button
                type="button"
                onClick={() => setSelectedStatus('development')}
                className={`text-xs font-medium px-3.5 py-2 rounded-xl transition-all ${
                  selectedStatus === 'development'
                    ? 'bg-blue-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                En développement (En cours)
              </button>
              <button
                type="button"
                onClick={() => setSelectedStatus('rd')}
                className={`text-xs font-medium px-3.5 py-2 rounded-xl transition-all ${
                  selectedStatus === 'rd'
                    ? 'bg-blue-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                R&D (À venir)
              </button>
            </div>

            {/* Category Filter Dropdown */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="text-xs px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="all">Toutes les catégories</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="py-16 text-center text-slate-400">
              <p>Aucun projet ne correspond aux filtres sélectionnés.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  id={project.id}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800/80 overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between hover:-translate-y-1 shadow-lg shadow-black/20"
                >
                  <div className="relative h-48 w-full bg-slate-800 overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
                        variant={
                          project.status === 'En production'
                            ? 'amber'
                            : project.status === 'En R&D'
                            ? 'amber'
                            : 'cyan'
                        }
                        size="sm"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">
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
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link to={`/projets/${project.id}`} className="block">
                        <Button
                          variant="ghost"
                          size="sm"
                          fullWidth
                          className="justify-between text-slate-200 hover:text-white"
                          rightIcon={<ArrowRight className="w-3.5 h-3.5 text-cyan-400" />}
                        >
                          Découvrir le projet
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ProjectsPage;
