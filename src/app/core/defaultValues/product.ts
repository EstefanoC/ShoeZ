// Ts
import {
  Product,
  ProductCard,
  ProductsAds,
  ProductCategories,
} from '../models/product.interface';

export const ProductDefault: Product = {
  id: '',
  title: 'Jordan 11 Retro Low IE White Gym Red',
  description:
    'Originally designed as a Michael Jordan player-exclusive sneaker for the 1996 season, the Jordan 11 Retro Low IE White Gym Red is an International Exclusive re-release of the offering.',
  images: {
    number: 1,
    path: 'https://images.stockx.com/360/Air-Jordan-11-Retro-Low-IE-White-Gym-Red/Images/Air-Jordan-11-Retro-Low-IE-White-Gym-Red/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1635281283&h=384&q=57',
  },
  tag: [{ id: 1, name: 'jordan' }],
  color: ['white', 'red'],
  releaseDate: new Date(),
  condition: 'new',
  review: 4,
  price: 170,
  discount: 5,
};

export const ProductCardDefault: ProductCard = {
  id: '',
  img: '',
  title: '',
  price: 0,
  review: 0,
  discount: 0,
};

export const ProductAdsDefault: ProductsAds = {
  id: '',
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
  'unisex',
];
