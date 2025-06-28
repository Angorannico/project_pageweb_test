export interface Product {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  stock_status: 'instock' | 'outofstock' | 'onbackorder';
  stock_quantity: number | null;
  images: ProductImage[];
  categories: ProductCategory[];
  attributes: ProductAttribute[];
  variations: number[];
  meta_data: MetaData[];
}

export interface ProductImage {
  id: number;
  src: string;
  name: string;
  alt: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  parent?: number; // Agregar esta propiedad opcional
  description?: string;
  display?: string;
  image?: {
    id: number;
    src: string;
    name: string;
    alt: string;
  };
  menu_order?: number;
  count?: number;
}


export interface ProductAttribute {
  id: number;
  name: string;
  options: string[];
}

export interface MetaData {
  id: number;
  key: string;
  value: string;
}

export interface CartItem {
  id: number;
  quantity: number;
  product: Product;
  variation_id?: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  subtotal: number;
  tax: number;
  shipping: number;
} 

// AGREGADO: Interfaz para tags de productos
export interface ProductTag {
  id: number;
  name: string;
  slug: string;
  description?: string;
  count?: number;
}

// ACTUALIZAR: Interfaz Product para incluir tags
export interface Product {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  stock_status: 'instock' | 'outofstock' | 'onbackorder';
  stock_quantity: number | null;
  images: ProductImage[];
  categories: ProductCategory[];
  attributes: ProductAttribute[];
  variations: number[];
  meta_data: MetaData[];
  tags?: ProductTag[];  // AGREGADO: Tags del producto
}
