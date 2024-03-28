import { Component, Input } from '@angular/core';

// Dependencies
import { SlickCarouselModule } from 'ngx-slick-carousel';

// Ts
import { CardComponent } from '../card/card.component';
import { ProductCard } from '../../../core/models/product.interface';

@Component({
  selector: 'app-banner-button',
  standalone: true,
  imports: [SlickCarouselModule, CardComponent],
  templateUrl: './banner-button.component.html',
  styleUrl: './banner-button.component.sass',
})
export class BannerButtonComponent {
  @Input() slideConfig = {};
  @Input() slides: ProductCard[] | [] = [];
  @Input() nextSlide = {};
}
