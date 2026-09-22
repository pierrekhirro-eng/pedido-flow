export type OrderStatus = 'pending' | 'confirmed' | 'preparing' | 'ready' | 'completed' | 'cancelled';

export interface Store {
  id: string;
  userId: string;
  name: string;
  slug: string;
  whatsapp: string;
  logoUrl?: string | null;
  description?: string | null;
}

export interface Product {
  id: string;
  storeId: string;
  name: string;
  description?: string | null;
  price: number;
  imageUrl?: string | null;
  active: boolean;
}
