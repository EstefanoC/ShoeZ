import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

// Dependencies
import { MatIconModule } from '@angular/material/icon';

// Core
import { ProductCard } from '../../../core/models/product.interface';

// Components
import { PriceComponent } from '../product-card/price/price.component';
import { ReviewComponent } from '../product-card/review/review.component';
import { ProductCardDefault } from '../../../core/defaultValues/product';

@Component({
  selector: 'app-product-card-min',
  standalone: true,
  imports: [ReviewComponent, PriceComponent, MatIconModule],
  templateUrl: './product-card-min.component.html',
  styleUrl: './product-card-min.component.sass',
})
export class ProductCardMinComponent {
  @Input() data: ProductCard = ProductCardDefault;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.data = { ...this.data };
  }

  handleClick(id: string) {
    this.router.navigate(['/product', id]);
  }
}
