import { Component } from '@angular/core';

// Dependencies
import { MatGridListModule } from '@angular/material/grid-list';

// Component
import { CardAdsComponent } from '../../../shared/components/landing/card-ads/card-ads.component';
import { BannerSingleComponent } from '../../../shared/components/landing/banner-single/banner-single.component';

// ts
import { AllProducts } from '../../../core/defaultValues/product';
import { Product, ProductsAds } from '../../../core/models/product.interface';

@Component({
  selector: 'app-landing-trending',
  standalone: true,
  imports: [BannerSingleComponent, CardAdsComponent, MatGridListModule],
  templateUrl: './landing-trending.component.html',
  styleUrl: './landing-trending.component.sass',
})
export class LandingTrendingComponent {
  breakpoint = 0;
  slides: Product[] = [AllProducts[9], AllProducts[10], AllProducts[12]];
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
      id: AllProducts[13].id,
      img: AllProducts[13].images.local,
      title: AllProducts[13].title,
      price: AllProducts[13].price,
      discount: AllProducts[13].discount,
      cols: 1,
      rows: 1,
      image: false,
    },
    {
      id: AllProducts[17].id,
      img: '../../../../assets/image/landing_ads1.webp',
      title: AllProducts[17].title,
      price: AllProducts[17].price,
      cols: 1,
      rows: 2,
      image: true,
    },
    {
      id: AllProducts[11].id,
      img: AllProducts[11].images.local,
      title: AllProducts[11].title,
      price: AllProducts[11].price,
      discount: AllProducts[11].discount,
      cols: 1,
      rows: 1,
      image: false,
    },
    {
      id: AllProducts[16].id,
      img: AllProducts[16].images.local,
      title: AllProducts[16].title,
      price: AllProducts[16].price,
      discount: AllProducts[16].discount,
      cols: 1,
      rows: 1,
      image: false,
    },
    {
      id: AllProducts[15].id,
      img: AllProducts[15].images.local,
      title: AllProducts[15].title,
      price: AllProducts[15].price,
      discount: AllProducts[15].discount,
      cols: 1,
      rows: 1,
      image: false,
    },
    {
      id: AllProducts[13].id,
      img: '../../../../assets/image/landing_ads2.webp',
      title: AllProducts[13].title,
      price: AllProducts[13].price,
      cols: 2,
      rows: 2,
      image: true,
    },
    {
      id: AllProducts[5].id,
      img: '../../../../assets/image/landing_ads3.webp',
      title: AllProducts[5].title,
      price: AllProducts[5].price,
      cols: 2,
      rows: 1,
      image: true,
    },
  ];

  // Check the breakpoints
  ngOnInit(): void {
    this.breakpoint = window.innerWidth;
  }

  // Resize window
  onResize(event: any) {
    this.breakpoint = event.target.innerWidth;
  }
}
