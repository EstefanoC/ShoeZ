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
import { ProductCategoriesDefault } from '../../../core/defaultValues/product';
import {
  ProductCard,
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
        'kids',
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

  categorySelected: ProductCategories = 'men';
  categories: ProductCategories[] = ProductCategoriesDefault;

  currentSlide: number = 1;
  slideShow: number = 3;
  slides: ProductCard[] = [
    {
      img: '../../../../assets/image/products/Jordan 11 Retro Low IE White Gym Red.avif',
      title: 'Jordan 11 Retro Low IE White Gym Red',
      price: 155,
      discount: 9,
      review: 4.5,
    },
    {
      img: '../../../../assets/image/products/Jordan 11 Retro Low Midnight Navy.avif',
      title: 'Jordan 11 Retro Low Midnight Navy',
      price: 125,
      discount: 5,
      review: 4,
    },
    {
      img: '../../../../assets/image/products/Jordan 11 Retro Platinum Tint.avif',
      title: 'Jordan 11 Retro Platinum Tint',
      price: 455,
      discount: 15,
      review: 5,
    },
    {
      img: '../../../../assets/image/products/Jordan 11 Retro Pantone.avif',
      title: 'Jordan 11 Retro Pantone',
      price: 287,
      discount: 25,
      review: 3.5,
    },
    {
      img: "../../../../assets/image/products/Nike Air Max 1 '86 OG Big Bubble Air Max Day (2024).avif",
      title: "Nike Air Max 1 '86 OG Big Bubble Air Max Day (2024)",
      price: 805,
      discount: 5,
      review: 5,
    },
    {
      img: '../../../../assets/image/products/Nike Air VaporMax 360.avif',
      title: 'Nike Air VaporMax 360',
      price: 85,
      discount: 15,
      review: 2.5,
    },
    {
      img: '../../../../assets/image/products/Nike LeBron 4 Fruity Pebbles (2024).avif',
      title: 'Nike LeBron 4 Fruity Pebbles (2024)',
      price: 950,
      discount: 45,
      review: 0.5,
    },
    {
      img: '../../../../assets/image/products/Nike_Air_VaporMax_360.avif',
      title: 'Nike_Air_VaporMax_360',
      price: 198,
      discount: 1,
      review: 4.5,
    },
    {
      img: '../../../../assets/image/products/Puma Suede One Piece Straw Hat Luffy.avif',
      title: 'Puma Suede One Piece Straw Hat Luffy',
      price: 89,
      discount: 10,
      review: 3.0,
    },
  ];
  slideConfig = {
    slidesToShow: this.slideShow,
    slidesToScroll: this.slideShow,
    infinite: false,
    speed: 800,
  };

  changeCarousel(e: any) {
    this.currentSlide = (e.nextSlide + this.slideShow) / this.slideShow;
  }
}
