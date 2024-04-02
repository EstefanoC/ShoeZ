import { Component } from '@angular/core';

// Component
import { BannerSingleComponent } from '../../../shared/components/landing/banner-single/banner-single.component';

// ts
import { ProductCard } from '../../../core/models/product.interface';

@Component({
  selector: 'app-landing-trending',
  standalone: true,
  imports: [BannerSingleComponent],
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
    prevArrow: '.image-feedback .prev-arrow',
    nextArrow: '.image-feedback .next-arrow',
    asNavFor: '.slick-image_carousel',
  };

  changeCarousel(e: any) {
    console.log(e);

    // this.currentSlide = (e.nextSlide + this.slideShow) / this.slideShow;
  }
}
