export type ProductCategory = 'Goodies & Merch' | 'Textile & T-Shirts' | 'Formations & Ressources' | 'Accessoires Tech';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  priceXAF: number;
  inStock: boolean;
  stockCount?: number;
  imageUrl: string;
  badge?: string;
  sizes?: string[];
  colors?: string[];
  features?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface OrderFormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  deliveryNotes?: string;
}
