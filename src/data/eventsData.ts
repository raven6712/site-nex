import { EventItem } from '../types/event';

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'evt-ai-summit-2026',
    title: 'Nexora AI Summit : L\'IA au service des réalités camerounaises',
    slug: 'nexora-ai-summit-yaounde',
    description: 'Une journée d\'immersion et de tables rondes réunissant chercheurs, développeurs et porteurs de projets autour des LLMs et de la vision par ordinateur appliqués à l\'Afrique.',
    longDescription: `Le Nexora AI Summit réunit les esprits les plus créatifs de la tech camerounaise pour explorer les cas d'usage concrets de l'intelligence artificielle dans l'agriculture, la santé et l'inclusion financière. Au programme : démonstrations en direct, retours d'expérience sur AgriLucid, et ateliers d'optimisation de modèles en environnement contraint.`,
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    date: '2026-10-24',
    startTime: '09:00',
    endTime: '17:30',
    location: 'Hub d\'Innovation Bastos, Yaoundé',
    isOnline: false,
    category: 'Intelligence Artificielle',
    registrationRequired: true,
    status: 'upcoming',
    maxAttendees: 120,
    currentAttendees: 94,
    speakers: [
      { name: 'Dr. Jean-Marc Fotso', role: 'Chercheur en Vision par Ordinateur' },
      { name: 'Aïssatou Bello', role: 'Lead Data Scientist & ML Engineer' }
    ]
  },
  {
    id: 'evt-hackathon-fintech-douala',
    title: 'Hackathon 48h : FinTech & Solutions Décentralisées',
    slug: 'hackathon-fintech-douala',
    description: 'Challenge collaboratif pour concevoir et prototyper des micro-services d\'épargne communautaire (tontines 2.0) et de micropaiements sans frais cachés.',
    longDescription: `Pendant 48 heures non-stop à Douala, des équipes pluridisciplinaires (développeurs, designers UI/UX, experts métiers) s'affronteront pour construire des solutions résilientes répondant aux besoins quotidiens des commerçants et ménages d'Afrique Centrale. Mentorat par des seniors de l'écosystème.`,
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80',
    date: '2026-11-14',
    startTime: '08:30',
    endTime: '18:00',
    location: 'Kamer Tech Space Akwa, Douala',
    isOnline: false,
    category: 'Hackathon',
    registrationRequired: true,
    status: 'upcoming',
    maxAttendees: 80,
    currentAttendees: 62,
    speakers: [
      { name: 'Cedric Nguemo', role: 'Architecte Systèmes Financiers' }
    ]
  },
  {
    id: 'evt-masterclass-design-systems',
    title: 'Masterclass En Ligne : Design Systems & Accessibilité Web',
    slug: 'masterclass-design-systems-accessibilite',
    description: 'Atelier pratique pour concevoir des bibliothèques de composants Figma scalables et les implémenter proprement en React & Tailwind CSS.',
    longDescription: `Comment structurer une charte graphique, créer des tokens cohérents, gérer les états interactifs et garantir un contraste accessible sur tous les terminaux ? Cet atelier interactif propose des exercices en direct et la remise d'un starter kit open-source.`,
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
    date: '2026-12-05',
    startTime: '15:00',
    endTime: '17:30',
    location: 'En direct sur Discord & YouTube',
    isOnline: true,
    category: 'Design & UI/UX',
    registrationRequired: true,
    status: 'upcoming',
    maxAttendees: 250,
    currentAttendees: 185
  },
  {
    id: 'evt-devday-cloud-2026',
    title: 'Nexora DevDay 2026 : Architectures Résilientes & Cloud Native',
    slug: 'nexora-devday-cloud-resilient',
    description: 'Retour d\'expérience sur le dimensionnement d\'applications à fort trafic avec Kubernetes, bases distribuées et stratégies anti-coupures.',
    longDescription: `Une édition mémorable tenue à l'Université de Yaoundé I ayant rassemblé plus de 200 participants pour aborder les contraintes réseau locales et les meilleures pratiques DevOps modernes.`,
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    date: '2026-05-16',
    startTime: '09:00',
    endTime: '16:00',
    location: 'Amphi 500 Polytechnique, Yaoundé',
    isOnline: false,
    category: 'Infrastructure & DevOps',
    registrationRequired: false,
    status: 'past',
    maxAttendees: 200,
    currentAttendees: 215
  }
];
