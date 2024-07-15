// Core
import { TagType } from './tag.interface';
import { ColorType } from './color.interface';
import {
  ProductCategories,
  ProductConditionType,
  ProductSizeType,
} from './product.interface';

export interface ShopFilter {
  price: number[];
  tag: TagType[];
  color: ColorType[];
  gender: ProductCategories[];
  condition: ProductConditionType[];
  size: ProductSizeType[];
}
