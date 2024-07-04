import { Component, Input } from '@angular/core';

// Dependencies
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// Core
import { Product } from '../../../core/models/product.interface';

// Component
import { BannerButtonComponent } from '../landing/banner-button/banner-button.component';
import { AllProducts } from '../../../core/defaultValues/product';

@Component({
  selector: 'app-product-recommended',
  standalone: true,
  imports: [BannerButtonComponent, MatIcon, MatButtonModule],
  templateUrl: './product-recommended.component.html',
  styleUrl: './product-recommended.component.sass',
})
export class ProductRecommendedComponent {
  @Input() data!: Product;

  // Get shoe more than 4 of review
  slides: Product[] = AllProducts.filter((v) => {
    if (v.review >= 4) {
      return -1;
    }

    return 0;
  }).slice(0, 9);

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 800,
  };
}
