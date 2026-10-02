import { DomainItem, InitiativeItem } from '../types/domain';

export const DOMAINS_DATA: DomainItem[] = [
  {
    id: 'dev-web-mobile',
    title: 'Développement Web & Mobile',
    description: 'Conception d\'architectures modernes, APIs performantes, applications hybrides et solutions résilientes pour les réseaux africains.',
    iconName: 'Code2',
    skills: ['React', 'TypeScript', 'Flutter', 'Next.js', 'PostgreSQL', 'Cloud & Edge'],
    color: 'from-cyan-500/20 to-blue-500/10',
    accent: 'text-cyan-400 border-cyan-500/30'
  },
  {
    id: 'ia-data',
    title: 'Intelligence Artificielle & Data',
    description: 'Modèles de vision par ordinateur, traitement du langage naturel appliqué aux contextes locaux et valorisation des données camerounaises.',
    iconName: 'Cpu',
    skills: ['PyTorch', 'Vision Foliaire', 'NLP Local', 'FastAPI', 'Data Analytics'],
    color: 'from-emerald-500/20 to-teal-500/10',
    accent: 'text-emerald-400 border-emerald-500/30'
  },
  {
    id: 'design-ui-ux',
    title: 'Design UI/UX & Accessibilité',
    description: 'Interfaces numériques soignées, design systems scalables, micro-interactions pertinentes et ergonomie adaptée aux usages mobiles d\'Afrique.',
    iconName: 'Palette',
    skills: ['Figma', 'Design Systems', 'Micro-interactions', 'Accessibilité WCAG', 'UX Research'],
    color: 'from-amber-500/20 to-orange-500/10',
    accent: 'text-amber-400 border-amber-500/30'
  },
  {
    id: 'cybersecurite',
    title: 'Sécurité & Hygiène Numérique',
    description: 'Sensibilisation aux cybermenaces, audit de conformité, sécurisation d\'infrastructures critiques et protection des données personnelles.',
    iconName: 'ShieldCheck',
    skills: ['DevSecOps', 'Audit Web', 'Cryptographie', 'Hygiène Numérique', 'Zero Trust'],
    color: 'from-rose-500/20 to-red-500/10',
    accent: 'text-rose-400 border-rose-500/30'
  },
  {
    id: 'edtech-mentorat',
    title: 'Transmission & Mentorat',
    description: 'Programmes de montée en compétences pour les étudiants et juniors, pair-programming hebdomadaire et ateliers pratiques.',
    iconName: 'GraduationCap',
    skills: ['Bootcamps', 'Peer Learning', 'Code Reviews', 'Open Source', 'Carrière Tech'],
    color: 'from-purple-500/20 to-indigo-500/10',
    accent: 'text-purple-400 border-purple-500/30'
  },
  {
    id: 'entrepreneuriat',
    title: 'Incubation & Solutions Locales',
    description: 'Accompagnement de l\'idée au prototype fonctionnel (MVP), structuration technique de projets à fort impact social et économique.',
    iconName: 'Rocket',
    skills: ['MVP Fast-Track', 'Architecture Scalable', 'Pitch Technique', 'Partenariats'],
    color: 'from-yellow-500/20 to-amber-500/10',
    accent: 'text-yellow-400 border-yellow-500/30'
  }
];

export const INITIATIVES_DATA: InitiativeItem[] = [
  {
    id: 'init-code-labs',
    title: 'Nexora Code Labs',
    description: 'Sessions de code collaboratif et de revue collective où débutants et expérimentés travaillent ensemble sur des briques open-source utiles à la communauté.',
    format: 'Hybride (Yaoundé / Discord)',
    targetAudience: 'Développeurs de tous niveaux',
    cadence: 'Tous les samedis matins',
    iconName: 'Terminal'
  },
  {
    id: 'init-agrilucid-taskforce',
    title: 'Taskforce AgriLucid',
    description: 'Groupe de travail pluridisciplinaire réunissant développeurs, data scientists et étudiants en agronomie pour faire progresser la recherche sur les pathologies des plantes.',
    format: 'Recherche & Terrain',
    targetAudience: 'Ingénieurs ML & Agronomes',
    cadence: 'Bi-mensuel',
    iconName: 'Leaf'
  },
  {
    id: 'init-masterclasses',
    title: 'Tech Masterclasses 237',
    description: 'Interventions approfondies animées par des ingénieurs camerounais et de la diaspora sur des sujets de pointe (Cloud, IA, Sécurité, UI/UX).',
    format: 'En ligne / Stream HD',
    targetAudience: 'Professionnels & Étudiants avancés',
    cadence: 'Mensuel',
    iconName: 'Video'
  },
  {
    id: 'init-partner-incubator',
    title: 'Programme Passerelle Entreprises',
    description: 'Mise en relation d\'entreprises partenaires cherchant des talents technologiques fiables ou souhaitant digitaliser leurs processus avec des prototypes robustes.',
    format: 'Accompagnement dédié',
    targetAudience: 'PME, Startups & Sponsors',
    cadence: 'En continu',
    iconName: 'Handshake'
  }
];
