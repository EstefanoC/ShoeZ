import { Component, ViewChild } from '@angular/core';

// Dependencies
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  SlickCarouselComponent,
  SlickCarouselModule,
} from 'ngx-slick-carousel';

// Core
import { AllProducts } from '../../../core/defaultValues/product';

// Components
import { BannerButtonComponent } from '../../../shared/components/landing/banner-button/banner-button.component';

// Ts
import { Product } from '../../../core/models/product.interface';

@Component({
  selector: 'app-landing-flash',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    SlickCarouselModule,
    BannerButtonComponent,
  ],
  templateUrl: './landing-flash.component.html',
  styleUrl: './landing-flash.component.sass',
})
export class LandingFlashComponent {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  currentSlide: number = 1;

  slideShow: number = 3;

  // Get only the products with discount
  slides: Product[] = AllProducts.filter((v) => {
    if (v.discount !== undefined) {
      return -1;
    }

    return 0;
  }).slice(0, 9);

  slideConfig = {
    slidesToShow: this.slideShow,
    slidesToScroll: this.slideShow,
    infinite: false,
    speed: 800,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  changeCarousel(e: any) {
    this.currentSlide = (e.nextSlide + this.slideShow) / this.slideShow;
  }
}
