import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

// Dependencies
import {
  SlickCarouselComponent,
  SlickCarouselModule,
} from 'ngx-slick-carousel';

// Ts
import { CardComponent } from '../../product-card/card/card.component';
import { ProductCard } from '../../../../core/models/product.interface';

@Component({
  selector: 'app-banner-button',
  standalone: true,
  imports: [SlickCarouselModule, CardComponent],
  templateUrl: './banner-button.component.html',
})
export class BannerButtonComponent {
  @Input() slideConfig = {};
  @Input() slides: ProductCard[] | [] = [];
  @Output() changeCarrousel = new EventEmitter<any>();
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  beforeChange(e: any) {
    this.changeCarrousel.emit(e);
  }

  nextSlide() {
    this.slickModal.slickNext();
  }

  prevSlide() {
    this.slickModal.slickPrev();
  }
}
