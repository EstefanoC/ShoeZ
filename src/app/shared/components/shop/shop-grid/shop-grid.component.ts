import {
  Component,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

// Dependencies
import { MatGridListModule } from '@angular/material/grid-list';

// Components
import { CardComponent } from '../../product-card/card/card.component';

// Core
import { Product } from '../../../../core/models/product.interface';
import { ShopFilter } from '../../../../core/models/shop.interface';
import { AllProducts } from '../../../../core/defaultValues/product';
import { defaultFilter } from '../../../../core/defaultValues/shop';

@Component({
  selector: 'app-shop-grid',
  standalone: true,
  imports: [MatGridListModule, CardComponent],
  templateUrl: './shop-grid.component.html',
  styleUrl: './shop-grid.component.sass',
})
export class ShopGridComponent implements OnChanges {
  data: Product[] = AllProducts;

  @Input() filter: ShopFilter = defaultFilter;

  // Check when filter changes for queries
  ngOnChanges(changes: any) {
    const currentFilter: ShopFilter = changes.filter.currentValue;
    let filters = [];

    filters = AllProducts.filter((v) => {
      // Check filter Price
      if (
        currentFilter.price[0] - 1 >= v.price ||
        currentFilter.price[1] + 1 <= v.price
      ) {
        return false;
      }

      // Check the filter Tag
      if (currentFilter.tag.length !== 0) {
        if (!v.tag.some((i) => currentFilter.tag.includes(i.name))) {
          return false;
        }
      }

      // Check the filter Colors
      if (currentFilter.color.length !== 0) {
        if (!v.color.some((i) => currentFilter.color.includes(i.name))) {
          return false;
        }
      }

      // Check the filter Gender
      if (currentFilter.gender.length !== 0) {
        if (!currentFilter.gender.includes(v.gender)) {
          return false;
        }
      }

      // Check the filter Condition
      if (currentFilter.condition.length !== 0) {
        if (!currentFilter.condition.includes(v.condition)) {
          return false;
        }
      }

      // Check  if any filter is empty
      if (
        currentFilter.tag.length === 0 ||
        currentFilter.color.length === 0 ||
        currentFilter.gender.length === 0 ||
        currentFilter.condition.length === 0
      ) {
        return false;
      }
      return true;
    });

    this.data = filters;
  }
}
