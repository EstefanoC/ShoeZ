import { Component, Input, ViewChild } from '@angular/core';

// Dependencies
import {
  SlickCarouselComponent,
  SlickCarouselModule,
} from 'ngx-slick-carousel';

// Ts
import { CardComponent } from '../../product-card/card/card.component';
import { Product } from '../../../../core/models/product.interface';

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
  @Input() slides: Product[] | [] = [];
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  changeImageSrc(product: Product): string {
    return product.images.local.slice(0, -5) + ' trending.webp';
  }
}
