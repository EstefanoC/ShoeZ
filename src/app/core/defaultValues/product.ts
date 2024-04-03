// Ts
import {
  ProductCard,
  ProductCategories,
  ProductsAds,
} from '../models/product.interface';

export const ProductCardDefault: ProductCard = {
  img: '',
  title: '',
  price: 0,
  review: 0,
  discount: 0,
};

export const ProductAdsDefault: ProductsAds = {
  img: '',
  title: '',
  price: 0,
  review: 0,
  discount: 0,
  rows: 1,
  cols: 1,
  image: true,
};

export const ProductCategoriesDefault: ProductCategories[] = [
  'men',
  'women',
  'kids',
];
