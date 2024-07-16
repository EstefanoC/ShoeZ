// Core
import { ShopFilter } from '../models/shop.interface';
import { ProductMaxPrice, ProductMinPrice } from './product';

export const defaultFilter: ShopFilter = {
  price: [ProductMinPrice, ProductMaxPrice],
  tag: ['jordan', 'new balance', 'nike', 'puma', 'retro'],
  color: ['black', 'blue', 'green', 'grey', 'purple', 'red', 'white'],
  gender: ['men', 'unisex', 'women'],
  condition: ['new', 'used', 'refurbished'],
};
