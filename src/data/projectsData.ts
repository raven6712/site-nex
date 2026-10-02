import { Project } from '../types/project';

export const AGRILUCID_PROJECT: Project = {
  id: 'agrilucid',
  name: 'AgriLucid',
  tagline: 'L\'intelligence artificielle au chevet de l\'agriculture camerounaise et africaine',
  description: 'Une plateforme d\'assistance agronomique intelligente conçue pour aider les petits producteurs et coopératives agricoles à diagnostiquer les maladies foliaires, anticiper les rendements et optimiser les cycles de récolte.',
  longDescription: `AgriLucid est l'initiative phare développée au sein de Nexora237 en réponse aux défis de la sécurité alimentaire et de la productivité agricole au Cameroun. 

En combinant vision par ordinateur, modèles prédictifs météo et données agronomiques contextualisées aux terroirs d'Afrique Centrale (manioc, cacao, maïs, plantain), AgriLucid offre aux exploitants un compagnon digital de terrain accessible même en conditions de connectivité limitée.

Le projet est actuellement en phase de recherche appliquée & prototypage (R&D), avec une rigueur éthique et scientifique stricte : chaque modèle est validé en collaboration avec des agronomes praticiens avant tout déploiement pilote.`,
  category: 'AgriTech & IA',
  status: 'En R&D',
  technologies: ['PyTorch', 'Vision par Ordinateur', 'FastAPI', 'React Native', 'PostgreSQL / PostGIS', 'Edge AI'],
  imageUrl: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1200&q=80',
  featured: true,
  highlights: [
    'Conçu spécifiquement pour les cultures et sols du Cameroun (Zone équatoriale et soudano-sahélienne)',
    'Fonctionnement hybride (mode hors-ligne pour zones rurales blanches)',
    'Intégration d\'un assistant vocal et textuel multilingue (français, anglais, pidgin)',
    'Co-conception avec des groupements d\'agriculteurs locaux'
  ],
  agriLucidFeatures: [
    {
      id: 'diagnostic-ia',
      title: 'Diagnostic IA Foliaire',
      description: 'Détection instantanée des maladies végétales (mildiou, striure, anthracnose) via une simple prise de vue photographique des feuilles.',
      iconName: 'ScanEye',
      status: 'Prototype R&D'
    },
    {
      id: 'suivi-parcelles',
      title: 'Suivi & Cartographie des Parcelles',
      description: 'Délimitation géospatiale des exploitations, historique des assolements et surveillance de la vigueur végétative.',
      iconName: 'MapPin',
      status: 'Spécification validée'
    },
    {
      id: 'previsions-agricoles',
      title: 'Prévisions & Rendements',
      description: 'Estimation prédictive des volumes de récoltes basée sur les conditions climatiques, l\'historique d\'intrants et l\'état sanitaire.',
      iconName: 'TrendingUp',
      status: 'Prototype R&D'
    },
    {
      id: 'meteo-sols',
      title: 'Données Météo & Sols Locaux',
      description: 'Agrégation de micro-données météorologiques et indices d\'humidité pour orienter les fenêtres d\'arrosage et de semis.',
      iconName: 'CloudSun',
      status: 'Conception'
    },
    {
      id: 'alertes-preventives',
      title: 'Système d\'Alertes Précoces',
      description: 'Diffusion d\'alertes SMS et push lors de proliférations acariennes ou de vagues d\'infections détectées dans le bassin régional.',
      iconName: 'BellRing',
      status: 'Spécification validée'
    },
    {
      id: 'agrimarche',
      title: 'Agrimarché Solidaire',
      description: 'Module de mise en relation directe entre coopératives paysannes et acheteurs urbains pour court-circuiter les intermédiaires abusifs.',
      iconName: 'Store',
      status: 'Conception'
    },
    {
      id: 'reseau-communautaire',
      title: 'Réseau & Partage Paysan',
      description: 'Espace d\'entraide où les producteurs échangent retours d\'expériences, bonnes pratiques agro-écologiques et alertes locales.',
      iconName: 'UsersRound',
      status: 'Conception'
    },
    {
      id: 'assistant-ia',
      title: 'Assistant Conseil IA',
      description: 'Assistant conversationnel disponible en français et langues locales pour prodiguer des conseils d\'irrigation et d\'engrais biologiques.',
      iconName: 'Bot',
      status: 'Prototype R&D'
    }
  ]
};

export const PROJECTS_DATA: Project[] = [
  AGRILUCID_PROJECT,
  {
    id: 'afrihealth-connect',
    name: 'AfriHealth Connect',
    tagline: 'Téléconsultation & carnet vaccinal digital pour zones périurbaines',
    description: 'Plateforme médicale distribuée permettant la prise de rendez-vous, le télé-suivi et la synchronisation sécurisée des dossiers médicaux hors connexion.',
    category: 'Santé & IA',
    status: 'En production',
    technologies: ['React', 'TypeScript', 'WebRTC', 'Supabase', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    highlights: [
      'Plus de 1 200 consultations télé-assistées enregistrées dans des centres de santé pilotes',
      'Dossier médical crypté de bout en bout accessible par QR code d\'urgence'
    ]
  },
  {
    id: 'mboacode-academy',
    name: 'MboaCode Academy',
    tagline: 'Apprentissage interactif du développement web optimisé pour les connexions bas débit',
    description: 'Environnement éducatif léger intégrant un éditeur de code in-browser, des cours bilingues et des projets axés sur les besoins réels du marché camerounais.',
    category: 'EdTech',
    status: 'En développement',
    technologies: ['React', 'WebAssembly', 'Monaco Editor', 'Node.js', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    highlights: [
      'Fonctionne avec une consommation de data réduite de 70% par rapport aux plateformes classiques',
      'Système d\'évaluation automatisé de code'
    ]
  },
  {
    id: 'kamerpay-sdk',
    name: 'KamerPay Unified SDK',
    tagline: 'Kit open-source unifiant les APIs de paiement Mobile Money au Cameroun',
    description: 'Une bibliothèque TypeScript & Python simplifiant l\'intégration des passerelles MTN Mobile Money et Orange Money pour les développeurs et startups locales.',
    category: 'FinTech & Inclusion',
    status: 'Bêta privée',
    technologies: ['TypeScript', 'Python', 'Docker', 'OpenAPI / Swagger'],
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    highlights: [
      'Webhooks fiables avec re-tentatives automatiques',
      'Documentation claire avec exemples de code réutilisables'
    ]
  },
  {
    id: 'securops-237',
    name: 'SecurOps Sentinel',
    tagline: 'Scanner d\'hygiène numérique et de vulnérabilités pour PME camerounaises',
    description: 'Outil d\'audit automatisé vérifiant l\'exposition des serveurs, la conformité des certificats TLS et la sensibilisation au phishing pour les organisations africaines.',
    category: 'Cybersécurité',
    status: 'En développement',
    technologies: ['Go', 'FastAPI', 'React', 'Docker'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    highlights: [
      'Génération de rapports de remédiation en français clair',
      'Sensibilisation des équipes non-techniques'
    ]
  }
];
