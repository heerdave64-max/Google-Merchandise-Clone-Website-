export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CAD' | 'INR';

export type LanguageCode = 'en' | 'es' | 'de' | 'fr' | 'ja' | 'hi';

export interface CreatorAffiliate {
  id: string;
  name: string;
  handle: string;
  avatarUrl: string;
  bio: string;
  code: string;
  discountPercent: number;
  commissionPercent: number;
  totalReferrals: number;
  totalSalesVolumeUSD: number;
  earningsUSD: number;
  featuredProductIds: string[];
}

export interface Product {
  id: string;
  name: string;
  brand: 'Google Apparel' | 'YouTube Gear' | 'Android Collection' | 'Google Accessories' | 'Google Cloud' | 'Stationery';
  brandCategory: 'Google' | 'YouTube' | 'Android' | 'Google Cloud' | 'All';
  category: 'Hoodies' | 'T-Shirts' | 'Apparel' | 'Lifestyle' | 'Stationery' | 'YouTube Gear' | 'Eco-Friendly';
  itemGroup: 'hoodies' | 'tshirts' | 'youtube' | 'lifestyle' | 'stationery';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  badge?: 'Eco-Organic' | 'Top Rated' | 'Staff Pick' | 'New' | 'Member Exclusive' | 'Creator Pick';
  imageType: 'shirt' | 'bottle' | 'robot' | 'backpack' | 'hoodie' | 'crewneck' | 'lamp' | 'notebook' | 'tote' | 'sleeve' | 'keychain' | 'mug';
  accentColor: string;
  description: string;
  features: string[];
  sizes?: string[];
  colors?: { name: string; hex: string; bgClass: string }[];
  inStock: boolean;
  ecoCertified?: boolean;
}

export interface CartItem {
  id: string; // unique item id (combines product id + variant)
  productId: string;
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export type CategoryFilter = 'All' | 'Hoodies' | 'T-Shirts' | 'YouTube Gear' | 'Lifestyle' | 'Stationery' | 'Eco-Friendly';
export type BrandFilter = 'All Merch' | 'Google' | 'YouTube' | 'Android' | 'Google Cloud';
export type SortOption = 'popular' | 'price-asc' | 'price-desc' | 'rating' | 'newest';

export interface OrderConfirmation {
  orderId: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
  currency: CurrencyCode;
  creatorAffiliate?: {
    name: string;
    code: string;
    discountPercent: number;
  };
  customer: {
    fullName: string;
    email: string;
    address: string;
    city: string;
    zip: string;
    country: string;
  };
  paymentMethod: 'gpay' | 'card';
}
