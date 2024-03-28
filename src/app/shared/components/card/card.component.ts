import { Component, Input } from '@angular/core';

// Core
import { ProductCard } from '../../../core/models/product.interface';
import { ProductCardDefault } from '../../../core/defaultValues/product';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass',
})
export class CardComponent {
  @Input() data: ProductCard = ProductCardDefault;

  ngOnInit(): void {
    this.data = { ...this.data };
  }
}
