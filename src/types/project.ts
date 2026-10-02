export type ProjectStatus = 'En production' | 'En développement' | 'En R&D' | 'Bêta privée';

export type ProjectCategory = 
  | 'AgriTech & IA'
  | 'Santé & IA'
  | 'EdTech'
  | 'FinTech & Inclusion'
  | 'Open Source & Outils'
  | 'Cybersécurité';

export interface AgriLucidFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  status: 'Conception' | 'Prototype R&D' | 'Spécification validée';
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  status: ProjectStatus;
  technologies: string[];
  imageUrl: string;
  link?: string;
  featured?: boolean;
  highlights?: string[];
  agriLucidFeatures?: AgriLucidFeature[];
}
