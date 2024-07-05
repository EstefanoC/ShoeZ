import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

// Dependencies
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// Core
import { ProductsAds } from '../../../../core/models/product.interface';
import { ProductAdsDefault } from '../../../../core/defaultValues/product';

// Component
import { PriceComponent } from '../../product-card/price/price.component';

@Component({
  selector: 'app-card-ads',
  standalone: true,
  imports: [PriceComponent, MatIconModule, MatButtonModule],
  templateUrl: './card-ads.component.html',
  styleUrl: './card-ads.component.sass',
})
export class CardAdsComponent {
  @Input() data: ProductsAds = ProductAdsDefault;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.data = { ...this.data };
  }

  // Handle Click button
  handleClick(id: string) {
    this.router.navigate(['/shop', id]);
  }
}
