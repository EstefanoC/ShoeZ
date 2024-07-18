import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

// Dependencies
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  SlickCarouselComponent,
  SlickCarouselModule,
} from 'ngx-slick-carousel';

// Components
import { BannerButtonComponent } from '../../../shared/components/landing/banner-button/banner-button.component';

// Core
import {
  AllProducts,
  ProductCategoriesDefault,
} from '../../../core/defaultValues/product';
import {
  Product,
  ProductCategories,
} from '../../../core/models/product.interface';

@Component({
  selector: 'app-landing-categories',
  standalone: true,
  animations: [
    trigger('selected', [
      state(
        'selected',
        style({
          opacity: 1,
          transform: 'translateX(32px)',
        })
      ),
      state(
        'hidden',
        style({
          opacity: 0.5,
          transform: 'translateX(0)',
        })
      ),
      state(
        'men',
        style({
          transform: ' translateY(calc(-50% + 5px)) translateX(0)',
        })
      ),
      state(
        'women',
        style({
          transform: 'translateY(calc(-50% + 5px)) translateX(6.5rem)',
        })
      ),
      state(
        'unisex',
        style({
          transform: 'translateY(calc(-50% + 5px)) translateX(15rem)',
        })
      ),
      transition('selected => hidden', [animate('0.5s')]),
      transition('hidden => show', [animate('0.5s')]),
    ]),
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    SlickCarouselModule,
    BannerButtonComponent,
  ],
  templateUrl: './landing-categories.component.html',
  styleUrl: './landing-categories.component.sass',
})
export class LandingCategoriesComponent {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  constructor(public router: Router) {}

  categorySelected: ProductCategories = 'men';
  categories: ProductCategories[] = ProductCategoriesDefault;

  currentSlide: number = 1;
  slidePage: number = 2;
  slideShow: number = 3;

  // Get only the products with Gender
  slides: Product[] = AllProducts.filter((v) => {
    if (v.gender === this.categorySelected) {
      return -1;
    }

    return 0;
  }).slice(0, 6);

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

  toggleCategory(cat: ProductCategories) {
    this.categorySelected = cat;

    // Get only the products with Gender
    this.slides = AllProducts.filter((v) => {
      if (v.gender === cat) {
        return -1;
      }

      return 0;
    }).slice(0, 6);
  }

  changeCarousel(e: any) {
    this.currentSlide = (e.nextSlide + this.slideShow) / this.slideShow;
  }
}
