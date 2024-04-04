import { Component } from '@angular/core';

// Dependencies
import { SlickCarouselModule } from 'ngx-slick-carousel';

// Core
import { CustomerCard } from '../../../../core/models/customer.interface';

@Component({
  selector: 'app-customer-carousel',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './customer-carousel.component.html',
  styleUrl: './customer-carousel.component.sass',
})
export class CustomerCarouselComponent {
  slides: CustomerCard[] = [
    {
      title: 'Best way to shop shoe',
      content:
        'Fantastic selection at Shoe! The staff was knowledgeable and helped me find the perfect pair of running shoes. Comfortable fit, great prices, and stylish options. Highly recommend!',
      country: 'Brasil',
      name: 'Miguel Da Silva',
    },
    {
      title: 'In the snow is great!',
      content:
        'Shop while vacationing in the USA and was blown away by the variety. The staff’s expertise ensured I left with shoes that were both trendy and comfortable. Exceptional quality at unbeatable prices. A must-visit for shoe lovers!',
      country: 'Iceland',
      name: 'Gunnarsson',
    },
    {
      title: 'Sporting is Love',
      content:
        'Stellar experience at Sports! Their athletic shoe range is top-notch, with options for every sport. The staff’s guidance was invaluable, and I’m thrilled with my purchase. Quality, comfort, and performance - all in one store!',
      country: 'USA',
      name: 'John Smith',
    },
    {
      title: 'Just walking anywhere',
      content:
        'Their shoes are like walking on air, with a style that turns heads. The perfect blend of fashion and function, making every step a statement. A game-changer for shoe enthusiasts!',
      country: 'Canada',
      name: 'Adams Scott',
    },
  ];
  slidePos = this.slides[0].title;
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '90px',
    autoplay: true,
    speed: 800,
    arrows: false,
    dots: true,
    autoplaySpeed: 5000,
  };
}
