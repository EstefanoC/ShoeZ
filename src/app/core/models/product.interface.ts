// Core
import { TagInterface } from './tag.interface';
import { ColorInterface } from './color.interface';

export interface Product {
  id: string;
  title: string;
  description: string[];
  description_short: string;
  price: number;
  size: ProductSizeType[];
  tag: TagInterface[];
  review: number;
  color: ColorInterface[];
  releaseDate: Date;
  condition: ProductConditionType;
  discount?: number;
  gender: ProductCategories;
  images: {
    local: string;
    path: string;
    number: number;
  };
}

export interface ProductCard {
  id: string;
  img: string;
  price: number;
  title: string;
  review: number;
  discount?: number;
}

export interface ProductsAds {
  id: string;
  img: string;
  price: number;
  title: string;
  discount?: number;
  cols: number;
  rows: number;
  image: boolean;
}

export interface GenderInterface {
  id: number;
  name: ProductCategories;
  active?: boolean;
}

export interface ConditionInterface {
  id: number;
  name: ProductConditionType;
  active?: boolean;
}

export interface SizeInterface {
  id: number;
  name: ProductSizeType;
  active?: boolean;
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
