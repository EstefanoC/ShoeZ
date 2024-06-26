import { Component, ViewChild } from '@angular/core';

// Dependencies
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  SlickCarouselComponent,
  SlickCarouselModule,
} from 'ngx-slick-carousel';

// Components
import { BannerButtonComponent } from '../../../shared/components/landing/banner-button/banner-button.component';

// Ts
import { ProductCard } from '../../../core/models/product.interface';

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
  slides: ProductCard[] = [
    {
      id: 'jordan11retrolowie',
      img: '../../../../assets/image/products/Jordan 11 Retro Low IE White Gym Red.avif',
      title: 'Jordan 11 Retro Low IE White Gym Red',
      price: 155,
      discount: 9,
      review: 4.5,
    },
    {
      id: 'jordan11retrolow',
      img: '../../../../assets/image/products/Jordan 11 Retro Low Midnight Navy.avif',
      title: 'Jordan 11 Retro Low Midnight Navy',
      price: 125,
      discount: 5,
      review: 4,
    },
    {
      id: 'jordanretrotint11',
      img: '../../../../assets/image/products/Jordan 11 Retro Platinum Tint.avif',
      title: 'Jordan 11 Retro Platinum Tint',
      price: 455,
      discount: 15,
      review: 5,
    },
    {
      id: 'jordanretro11111',
      img: '../../../../assets/image/products/Jordan 11 Retro Pantone.avif',
      title: 'Jordan 11 Retro Pantone',
      price: 287,
      discount: 25,
      review: 3.5,
    },
    {
      id: 'nikeairmax865',
      img: "../../../../assets/image/products/Nike Air Max 1 '86 OG Big Bubble Air Max Day (2024).avif",
      title: "Nike Air Max 1 '86 OG Big Bubble Air Max Day (2024)",
      price: 805,
      discount: 5,
      review: 5,
    },
    {
      id: 'nikeairvapormax3600',
      img: '../../../../assets/image/products/Nike Air VaporMax 360.avif',
      title: 'Nike Air VaporMax 360',
      price: 85,
      discount: 15,
      review: 2.5,
    },
    {
      id: 'nikelebron4fruity',
      img: '../../../../assets/image/products/Nike LeBron 4 Fruity Pebbles (2024).avif',
      title: 'Nike LeBron 4 Fruity Pebbles (2024)',
      price: 950,
      discount: 45,
      review: 0.5,
    },
    {
      id: 'nikeairvapormax3600011',
      img: '../../../../assets/image/products/Nike_Air_VaporMax_360.avif',
      title: 'Nike_Air_VaporMax_360',
      price: 198,
      discount: 1,
      review: 4.5,
    },
    {
      id: 'puma suedeeeeee',
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
