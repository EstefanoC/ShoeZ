import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

// Dependencies
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
// Core
import {
  Product,
  ProductSizeType,
} from '../../../../core/models/product.interface';

// Components
import { PriceComponent } from '../../product-card/price/price.component';
import { ReviewComponent } from '../../product-card/review/review.component';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [
    MatIcon,
    MatGridTile,
    MatGridList,
    FormsModule,
    CommonModule,
    PriceComponent,
    MatInputModule,
    ReviewComponent,
    MatFormFieldModule,
  ],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.sass',
  encapsulation: ViewEncapsulation.None,
})
export class ProductInfoComponent {
  @Input() data!: Product;
  currentlySize!: ProductSizeType;
  quantity: number = 1;

  handleChangeQuantity(event: Event) {
    const input = event.target as HTMLInputElement;

    console.log(
      Number(input.value),
      isNaN(Number(input.value)),
      Number(input.value) < 0
    );

    if (Number(input.value) < 0 || isNaN(Number(input.value))) {
      this.quantity = 1;
      input.value = '1';
    } else if (Number(input.value) > 100) {
      this.quantity = 100;
      input.value = '100';
    } else {
      this.quantity = Number(input.value);
    }
  }

  validateCart(): boolean {
    console.log(
      this.quantity <= 0,
      this.quantity <= 0 ||
        this.quantity > 100 ||
        typeof this.currentlySize === 'undefined'
    );

    if (
      this.quantity <= 0 ||
      this.quantity > 100 ||
      typeof this.currentlySize === 'undefined'
    ) {
      return true;
    }

    return false;
  }

  addCard() {
    console.log(this.data, 'submit card');
  }
}
