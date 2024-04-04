import { AfterViewInit, Component, Output, EventEmitter } from '@angular/core';

// Dependencies
import 'atropos/css/min';
import Atropos from 'atropos';
import { SlickCarouselModule } from 'ngx-slick-carousel';

// Core
import { SlidesLanding } from '../../../../core/models/landing.interface';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.sass',
  schemas: [],
})
export class BannerComponent implements AfterViewInit {
  slides: SlidesLanding[] = [
    {
      img: '../../../../assets/image/Landing_banner_1.webp',
      title: 'Air Blast',
    },
    {
      img: '../../../../assets/image/Landing_banner_2.webp',
      title: 'Casual Roomie',
    },
    {
      img: '../../../../assets/image/Landing_banner_3.webp',
      title: 'New Bullets',
    },
    {
      img: '../../../../assets/image/Landing_banner_4.webp',
      title: 'Running Bust',
    },
  ];
  slidePos = this.slides[0].title;
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    Infinity: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    fade: true,
    cssEaser: 'linear',
  };

  @Output() newEmitter = new EventEmitter<string>();

  beforeChange(e: any) {
    this.newEmitter.emit(this.slides[e.nextSlide].title);
  }

  ngAfterViewInit(): void {
    const atropos = Atropos({
      el: '.my-atropos',
      activeOffset: 0,
      alwaysActive: true,
      shadow: false,
      highlight: false,
      shadowScale: 0,
      rotateXMax: 6,
      rotateYMax: 6,
    });
  }
}
