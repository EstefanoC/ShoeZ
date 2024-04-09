import { Component } from '@angular/core';

// Dependencies
import { MatGridListModule } from '@angular/material/grid-list';

// Component
import { CardAdsComponent } from '../../../shared/components/landing/card-ads/card-ads.component';
import { BannerSingleComponent } from '../../../shared/components/landing/banner-single/banner-single.component';

// ts
import {
  ProductCard,
  ProductsAds,
} from '../../../core/models/product.interface';

@Component({
  selector: 'app-landing-trending',
  standalone: true,
  imports: [BannerSingleComponent, CardAdsComponent, MatGridListModule],
  templateUrl: './landing-trending.component.html',
  styleUrl: './landing-trending.component.sass',
})
export class LandingTrendingComponent {
  slides: ProductCard[] = [
    {
      img: '../../../../assets/image/products/Jordan 1 Retro High Rare Air Max Orange (GS).avif',
      title: 'Jordan 1 Retro High Rare Air Max Orange (GS)',
      price: 50,
      review: 3.5,
    },
    {
      img: '../../../../assets/image/products/Nike Air Max 90 Michigan Navy.avif',
      title: 'Nike Air Max 90 Michigan Navy',
      price: 299,
      discount: 5,
      review: 2.5,
    },
    {
      img: "../../../../assets/image/products/Nike Air Force 1 Low Shadow White Glacier Blue Ghost (Women's).avif",
      title: "Nike Air Force 1 Low Shadow White Glacier Blue Ghost (Women's)",
      price: 364,
      review: 5,
    },
  ];
  slideConfigGlobal = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    draggable: true,
    speed: 800,
  };
  slideConfig1 = {
    ...this.slideConfigGlobal,
    prevArrow: '.single-feedback .prev-arrow',
    nextArrow: '.single-feedback .next-arrow',
    asNavFor: '.slick-single_carousel',
  };
  slideConfig2 = {
    ...this.slideConfigGlobal,
    asNavFor: '.slick-image_carousel',
  };

  ads: ProductsAds[] = [
    {
      img: '../../../../assets/image/products/Jordan 5 Retro Olive (2024).avif',
      title: 'Jordan 5 Retro Olive (2024)',
      price: 50,
      review: 3.5,
      cols: 1,
      rows: 1,
      image: false,
    },
    {
      img: '../../../../assets/image/landing_ads1.webp',
      title: 'New Balance 9060 Black Castlerock Grey',
      price: 299,
      review: 2.5,
      cols: 1,
      rows: 2,
      image: true,
    },
    {
      img: '../../../../assets/image/products/Nike Kobe 6 Protro Reverse Grinch.avif',
      title: 'Nike Kobe 6 Protro Reverse Grinch',
      price: 364,
      review: 5,
      cols: 1,
      rows: 1,
      image: false,
    },
    {
      img: '../../../../assets/image/products/Jordan 1 Retro High Rare Air Max Orange (GS).avif',
      title: 'Jordan 1 Retro High Rare Air Max Orange (GS)',
      price: 50,
      review: 3.5,
      cols: 1,
      rows: 1,
      image: false,
    },
    {
      img: '../../../../assets/image/products/Nike Air Max 90 Michigan Navy.avif',
      title: 'Nike Air Max 90 Michigan Navy',
      price: 299,
      review: 2.5,
      cols: 1,
      rows: 1,
      image: false,
    },
    {
      img: '../../../../assets/image/landing_ads2.webp',
      title: "Nike Air Force 1 Low Shadow White Glacier Blue Ghost (Women's)",
      price: 364,
      review: 5,
      cols: 2,
      rows: 2,
      image: true,
    },
    {
      img: '../../../../assets/image/landing_ads3.webp',
      title: 'Jordan 1 Retro High Rare Air Max Orange (GS)',
      price: 50,
      review: 3.5,
      cols: 2,
      rows: 1,
      image: true,
    },
  ];
}
