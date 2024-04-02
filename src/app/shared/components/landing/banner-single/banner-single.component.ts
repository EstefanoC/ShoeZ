import { Component, Input, ViewChild } from '@angular/core';

// Dependencies
import {
  SlickCarouselComponent,
  SlickCarouselModule,
} from 'ngx-slick-carousel';

// Ts
import { CardComponent } from '../../product-card/card/card.component';
import { ProductCard } from '../../../../core/models/product.interface';

@Component({
  selector: 'app-banner-single',
  standalone: true,
  imports: [SlickCarouselModule, CardComponent],
  templateUrl: './banner-single.component.html',
  styleUrl: './banner-single.component.sass',
})
export class BannerSingleComponent {
  @Input() slideConfig1 = {};
  @Input() slideConfig2 = {};
  @Input() slides: ProductCard[] | [] = [];
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  changeImageSrc(product: ProductCard): string {
    return product.img.slice(0, -5) + ' trending.webp';
  }
}
