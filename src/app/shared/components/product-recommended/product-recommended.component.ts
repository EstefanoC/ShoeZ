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
  slides: Product[] = AllProducts.reverse().slice(0, 9);

  // Check the Tag for recommended
  ngOnInit() {
    this.slides = AllProducts.filter((v) => {
      for (let i = 0; i < v.tag.length; i++) {
        if (v.tag[i].name === this.data.tag[0].name) {
          return -1;
        }
      }
      return 0;
    }).slice(0, 9);
  }

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    speed: 800,
  };
}
