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

  ngOnInit(): void {
    this.data = { ...this.data };
  }
}
