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
  description_short:
    'Originally designed as a Michael Jordan player-exclusive sneaker for the 1996 season, the Jordan 11 Retro Low IE White Gym Red is an International Exclusive re-release of the offering.',
  description: `This low-cut sneaker sports a white leather upper highlighted by Gym Red overlays. White mesh windows appear on the elephant print Gym Red overlays. Black hues on the tongue, Jumpman tongue branding, and sockliner provide a contrasting tone to the upper. Other details include parallel stitching on the leather upper, round laces, and a white tongue. A white midsole and a red translucent outsole with black herringbone-patterned traction inserts complete the design.

    What our experts love about this sneaker is its design and colorway. The white leather upper with Gym Red overlays and elephant print details on the wrap-around overlay makes this sneaker stand out. The Jordan 11 Retro Low IE White Gym Red was made available on September 23rd, 2017.`,
  images: {
    number: 1,
    path: 'https://images.stockx.com/360/Air-Jordan-11-Retro-Low-IE-White-Gym-Red/Images/Air-Jordan-11-Retro-Low-IE-White-Gym-Red/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1635281283&h=384&q=57',
  },
  size: [
    '35',
    '35.5',
    '36',
    '36.5',
    '37',
    '37.5',
    '38',
    '38.5',
    '39',
    '39.5',
    '40',
    '40.5',
    '41',
    '41.5',
    '42',
    '42.5',
    '43',
    '43.5',
    '44',
    '44.5',
    '45',
  ],
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
