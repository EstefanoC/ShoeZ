import { Component } from '@angular/core';

// Dependencies
import { MatGridListModule } from '@angular/material/grid-list';

// Components
import { CardComponent } from '../../product-card/card/card.component';

// Core
import { Product } from '../../../../core/models/product.interface';
import { AllProducts } from '../../../../core/defaultValues/product';

@Component({
  selector: 'app-shop-grid',
  standalone: true,
  imports: [MatGridListModule, CardComponent],
  templateUrl: './shop-grid.component.html',
  styleUrl: './shop-grid.component.sass',
})
export class ShopGridComponent {
  data: Product[] = AllProducts;
}
