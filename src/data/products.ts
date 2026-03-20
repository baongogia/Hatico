export type Role = "guest" | "owner" | null;

export interface Product {
  id: string;
  name: string;
  category: string;
  specs: string[];
  basePrice: number | string; // Hỗ trợ "Liên hệ" hoặc "Đặt hàng"
  images: string[];
  comparisons: string[];
  description?: string;
  features?: string[];
}

import productsData from "./products.json";

export const MOOC_PRODUCTS: Product[] = productsData as Product[];
