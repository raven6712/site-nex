import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  ScanEye,
  MapPin,
  TrendingUp,
  CloudSun,
  BellRing,
  Store,
  UsersRound,
  Bot
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';

const agriLucidIcons: Record<string, React.ReactNode> = {
  ScanEye: <ScanEye className="w-6 h-6 text-emerald-400" />,
  MapPin: <MapPin className="w-6 h-6 text-cyan-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-amber-400" />,
  CloudSun: <CloudSun className="w-6 h-6 text-blue-400" />,
  BellRing: <BellRing className="w-6 h-6 text-rose-400" />,
  Store: <Store className="w-6 h-6 text-teal-400" />,
  UsersRound: <UsersRound className="w-6 h-6 text-indigo-400" />,
  Bot: <Bot className="w-6 h-6 text-purple-400" />,
};

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const project = PROJECTS_DATA.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="py-32 text-center max-w-md mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Projet introuvable</h1>
        <p className="text-sm text-slate-400 mb-8">
          Le projet demandé n&apos;existe pas ou a été déplacé dans nos archives.
        </p>
        <Link to="/projets">
          <Button variant="primary" leftIcon={<ArrowLeft className="w-4 h-4" />}>
            Retourner aux projets
          </Button>
        </Link>
      </div>
    );
  }

  const isAgriLucid = project.id === 'agrilucid';

  return (
    <div className="w-full pb-24">
      {/* Top Banner / Breadcrumb */}
      <div className="bg-slate-900/60 border-b border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/projets"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à l&apos;ensemble des projets</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="cyan" size="sm">
              {project.category}
            </Badge>
            <Badge
              variant={
                project.status === 'En production'
                  ? 'emerald'
                  : project.status === 'En R&D'
                  ? 'amber'
                  : 'cyan'
              }
              size="sm"
            >
              Statut : {project.status}
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Project Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Core content */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-3">
                {project.name}
              </h1>
              <p className="text-emerald-400 font-semibold text-lg sm:text-xl">
                {project.tagline}
              </p>
            </div>

            {/* Main Visual */}
            <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 h-72 sm:h-96 w-full relative shadow-xl">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

            {/* Description */}
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <h2 className="text-xl font-bold text-white tracking-tight">À propos de l&apos;initiative</h2>
              <p className="whitespace-pre-line leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <h3 className="text-lg font-bold text-white">Points forts et spécificités de conception</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AGRI LUCID 8 DETAILED PILLARS */}
            {isAgriLucid && project.agriLucidFeatures && (
              <div className="space-y-6 pt-8 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-xl font-bold text-white">
                    Les 8 Composantes Systèmes d&apos;AgriLucid
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.agriLucidFeatures.map((feat) => (
                    <Card key={feat.id} hoverGlow="emerald" className="p-5 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                            {agriLucidIcons[feat.iconName] || <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                          </div>
                          <h4 className="text-sm font-bold text-white leading-tight">
                            {feat.title}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {feat.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-800/80">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-amber-400 font-semibold">
                          Phase : {feat.status}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Technical Sidebar & Actions */}
          <div className="lg:col-span-4 space-y-6">
            {/* Tech Stack Card */}
            <Card className="p-6 space-y-6 bg-slate-900 border-slate-800">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Technologies & Architecture
                </span>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Contribution & Contact
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Ce projet vous intéresse ? Vous souhaitez le soutenir, tester une version pilote ou contribuer au code source ?
                </p>

                <Link to="/contact" className="block pt-2">
                  <Button variant="primary" fullWidth size="md">
                    Contacter l&apos;équipe du projet
                  </Button>
                </Link>
              </div>

              {project.link && (
                <div className="pt-4 border-t border-slate-800">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    <span>Accéder au dépôt ou à la démo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </Card>

            {/* Cameroun Context Card */}
            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-300 space-y-2">
              <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Conçu pour le terrain camerounais
              </span>
              <p className="text-slate-400 leading-relaxed">
                Ce logiciel prend en compte les contraintes réelles de bande passante, le coût de la data mobile au Cameroun et la robustesse hors connexion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
