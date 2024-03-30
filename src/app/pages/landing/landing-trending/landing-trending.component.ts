import { Component } from '@angular/core';
import { ProductCard } from '../../../core/models/product.interface';

@Component({
  selector: 'app-landing-tending',
  standalone: true,
  imports: [],
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
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 800,
  };

  changeCarousel(e: any) {
    console.log(e);

    // this.currentSlide = (e.nextSlide + this.slideShow) / this.slideShow;
  }
}
