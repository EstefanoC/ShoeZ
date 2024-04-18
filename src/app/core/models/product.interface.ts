// Core
import { ColorType } from './color.interface';
import { TagInterface } from './tag.interface';

export interface Product {
  id: string;
  title: string;
  description: string;
  description_short: string;
  price: number;
  size: ProductSizeType[];
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

export type ProductSizeType =
  | '35'
  | '35.5'
  | '36'
  | '36.5'
  | '37'
  | '37.5'
  | '38'
  | '38.5'
  | '39'
  | '39.5'
  | '40'
  | '40.5'
  | '41'
  | '41.5'
  | '42'
  | '42.5'
  | '43'
  | '43.5'
  | '44'
  | '44.5'
  | '45'
  | '45.5'
  | '46';
