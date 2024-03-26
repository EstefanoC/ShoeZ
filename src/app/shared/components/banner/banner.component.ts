import {
  AfterViewInit,
  Component,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';

// Dependencies
import 'atropos/css/min';
import Atropos from 'atropos';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.sass',
  schemas: [],
})
export class BannerComponent implements AfterViewInit {
  slides = [
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
    autoplaySpeed: 2500,
    fade: true,
    cssEaser: 'linear',
  };

  @Output() newEmitter = new EventEmitter<string>();

  beforeChange(e: any) {
    this.slidePos = this.slides[e.currentSlide + 1].title;
    this.newEmitter.emit(this.slides[e.currentSlide + 1].title);
  }

  ngAfterViewInit(): void {
    // const atropos = Atropos({
    //   el: '.my-atropos',
    //   activeOffset: 40,
    //   alwaysActive: true,
    //   highlight: true,
    //   shadowScale: 1.05,
    //   rotateXMax: 1,
    //   rotateYMax: 1,
    //   // onEnter() {
    //   //   console.log('Enter');
    //   // },
    //   // onLeave() {
    //   //   console.log('Leave');
    //   // },
    //   // onRotate(x, y) {
    //   //   console.log('Rotate', x, y);
    //   // },
    // });
  }
}
