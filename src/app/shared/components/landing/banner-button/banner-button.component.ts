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
import { Product } from '../../../../core/models/product.interface';
import { CardComponent } from '../../product-card/card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-banner-button',
  standalone: true,
  imports: [NgFor, SlickCarouselModule, CardComponent],
  templateUrl: './banner-button.component.html',
})
export class BannerButtonComponent {
  @Input() slideConfig = {};
  @Input() slides: Product[] | [] = [];
  @Output() changeCarrousel = new EventEmitter<any>();
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  trackByFn(i: any, item: Product) {
    return item.id; // Use the 'id' property as the unique identifier
  }

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
