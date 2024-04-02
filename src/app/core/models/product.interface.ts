export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  tag: string[];
  color: string;
  releaseDate: Date;
  condition: string;
  images: {
    path: string;
    number: number;
  };
}

export interface ProductCard {
  img: string;
  title: string;
  price: number;
  review: number;
  discount?: number;
}

export interface ProductsAds extends ProductCard {
  cols: number;
  rows: number;
  image: boolean;
}

export type ProductCategories = 'men' | 'women' | 'kids';
