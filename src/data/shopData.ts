import { Product } from '../types/shop';

export const SHOP_PRODUCTS: Product[] = [
  {
    id: 'prod-tshirt-build-237',
    name: 'T-Shirt Officiel "Build in 237"',
    category: 'Textile & T-Shirts',
    description: 'T-shirt premium en coton biologique lourd (220g/m²). Sérigraphie haute résistance avec l\'emblème Nexora237 et la devise technologique.',
    priceXAF: 9500,
    inStock: true,
    stockCount: 45,
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    badge: 'Bestseller',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Noir Anthracite', 'Vert Émeraude Profond'],
    features: ['100% Coton peigné biologique', 'Coupe unisexe moderne', 'Col renforcé indéformable']
  },
  {
    id: 'prod-hoodie-innovate',
    name: 'Hoodie à Capuche "Nexora Tech Core"',
    category: 'Textile & T-Shirts',
    description: 'Sweat à capuche ultra-doux avec intérieur molletonné. Parfait pour les longues sessions de code en nocturne et les événements tech.',
    priceXAF: 18500,
    inStock: true,
    stockCount: 20,
    imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    badge: 'Édition Limitée',
    sizes: ['M', 'L', 'XL'],
    colors: ['Gris Chiné', 'Noir Minéral'],
    features: ['Poche kangourou renforcée', 'Broderie discrète de précision', 'Passe-pouces ergonomiques']
  },
  {
    id: 'prod-sticker-pack',
    name: 'Pack 12 Stickers Dev & Innovation 237',
    category: 'Goodies & Merch',
    description: 'Assortiment de 12 stickers vinyle ultra-résistants, étanches et découpés à la forme. Emblèmes Nexora237, AgriLucid, Terminal 237.',
    priceXAF: 3000,
    inStock: true,
    stockCount: 150,
    imageUrl: 'https://images.unsplash.com/photo-1589384267710-7a25be3c0b02?auto=format&fit=crop&w=800&q=80',
    badge: 'Populaire',
    features: ['Vinyle imperméable anti-rayures', 'Adhésif sans résidu', 'Idéal pour MacBook, PC, gourdes']
  },
  {
    id: 'prod-tech-notebook',
    name: 'Carnet de Prototypage & Stylo Bambou Nexora',
    category: 'Accessoires Tech',
    description: 'Carnet rigide à grille pointillée (dot-grid) 160 pages en papier recyclé avec porte-stylo et marque-page ruban émeraude.',
    priceXAF: 5500,
    inStock: true,
    stockCount: 60,
    imageUrl: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80',
    features: ['Grille dot-grid idéale pour wireframes et schémas', 'Pochette soufflet en fin de carnet', 'Stylo à bille rechargeable en bambou gravé']
  },
  {
    id: 'prod-course-frontend-ai',
    name: 'Pack Masterclass : Architectures Modernes & AI Edge',
    category: 'Formations & Ressources',
    description: 'Accès illimité aux enregistrements HD, codes sources complets et guides PDF des masterclasses Nexora237 sur React 19 et l\'IA locale.',
    priceXAF: 15000,
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    badge: 'Digital',
    features: ['12h de vidéos en accès à vie', 'Dépôts GitHub privés avec solutions', 'Accès au canal Discord VIP']
  },
  {
    id: 'prod-cap-nexora',
    name: 'Casquette Snapback Nexora237 Minimaliste',
    category: 'Textile & T-Shirts',
    description: 'Casquette noire sobre avec broderie 3D de l\'étoile 237 et visière renforcée.',
    priceXAF: 7000,
    inStock: false,
    stockCount: 0,
    imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    badge: 'Rupture temporaire',
    features: ['Attache arrière réglable', 'Bandeau absorbant respirant', 'Finitions premium']
  }
];
