import { Component, Input } from '@angular/core';

// Common
import { CommonModule } from '@angular/common';

// Ts
import { ProductCard } from '../../../../core/models/product.interface';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price.component.html',
  styleUrl: './price.component.sass',
})
export class PriceComponent {
  @Input() price: ProductCard['price'] = 0;
  @Input() discount: ProductCard['discount'] = 0;
  @Input() size: boolean = false;
  typeof: any;

  // Calculate discount and final price
  calculatePrice(
    price: ProductCard['price'],
    discount: ProductCard['discount'] = 0
  ) {
    let totalValue = price * ((100 - discount) / 100);

    return Number(Math.floor(totalValue));
  }
}
