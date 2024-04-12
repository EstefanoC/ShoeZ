// Core
import { ColorType } from './color.interface';
import { TagInterface } from './tag.interface';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  tag: TagInterface[];
  review: number;
  color: ColorType[];
  releaseDate: Date;
  condition: ProductConditionType;
  discount?: number;
  images: {
    path: string;
    number: number;
  };
}

export interface ProductCard {
  id: string;
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

export type ProductCategories = 'men' | 'women' | 'unisex';

export type ProductConditionType = 'new' | 'used' | 'refurbished';
