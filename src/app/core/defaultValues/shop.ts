// Core
import { ShopFilter } from '../models/shop.interface';
import { ProductMaxPrice, ProductMinPrice } from './product';

export const defaultFilter: ShopFilter = {
  price: [ProductMinPrice, ProductMaxPrice],
  tag: ['jordan', 'new balance', 'nike', 'puma', 'retro'],
  color: ['black', 'blue', 'green', 'grey', 'purple', 'red', 'white'],
  gender: ['men', 'unisex', 'women'],
  condition: ['new', 'used', 'refurbished'],
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
    '45.5',
    '46',
  ],
};
