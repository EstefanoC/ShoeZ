import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

// Dependencies
import { MatIconModule } from '@angular/material/icon';

// Core
import { Product } from '../../../../core/models/product.interface';
import { AllProducts } from '../../../../core/defaultValues/product';

// Component
import { PriceComponent } from '../price/price.component';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ReviewComponent, PriceComponent, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass',
})
export class CardComponent {
  @Input() data: Product = AllProducts[0];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.data = { ...this.data };
  }

  handleClick(id: string) {
    this.router.navigate(['/shop', id]);
  }
}
