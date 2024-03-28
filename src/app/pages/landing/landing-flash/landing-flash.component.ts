import { Component } from '@angular/core';

// Dependencies
import { MatIconModule } from '@angular/material/icon';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductCard } from '../../../core/models/product.interface';
import { BannerButtonComponent } from '../../../shared/components/banner-button/banner-button.component';

@Component({
  selector: 'app-landing-flash',
  standalone: true,
  imports: [MatIconModule, SlickCarouselModule, BannerButtonComponent],
  templateUrl: './landing-flash.component.html',
  styleUrl: './landing-flash.component.sass',
})
export class LandingFlashComponent {
  slides: ProductCard[] = [
    {
      img: '../../../../assets/image/products/Jordan 11 Retro Low IE White Gym Red.avif',
      title: 'Jordan 11 Retro Low IE White Gym Red',
      price: 145,
      discount: 10,
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
      img: "../../../../assets/image/products/Nike Air Max 1 '86 OG Big Bubble Air Max Day (2024).avi",
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
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    speed: 800,
  };
}
