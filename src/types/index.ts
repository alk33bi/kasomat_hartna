export type City = "Muscat" | "Nizwa" | "Ibri";

export interface Area {
  id: string;
  name: string;
  nameAr: string;
  city: City;
}

export type CategoryId =
  | "restaurants"
  | "cafes"
  | "supermarkets"
  | "fruits-vegetables"
  | "laundry"
  | "salons"
  | "delivery"
  | "gifts"
  | "perfumes"
  | "flowers"
  | "bookstores"
  | "entertainment";

export interface Category {
  id: CategoryId;
  name: string;
  icon: string;
  color: string;
  image: string;
}

export type OfferType = "percentage" | "bogo" | "free-delivery" | "bundle";
export type SubscriptionPlan = "basic" | "pro" | "featured";
export type UserRole = "public" | "business" | "admin";

export interface Business {
  id: string;
  name: string;
  category: CategoryId;
  city: City;
  area: string;
  address: string;
  coordinates: { lat: number; lng: number };
  phone: string;
  whatsapp: string;
  openingHours: string;
  images: string[];
  subscriptionPlan: SubscriptionPlan;
  isApproved: boolean;
  description: string;
}

export interface Offer {
  id: string;
  businessId: string;
  title: string;
  type: OfferType;
  discountValue: string;
  description: string;
  startDate: string;
  endDate: string;
  terms: string;
  isActive: boolean;
  createdAt: string;
  images: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}
