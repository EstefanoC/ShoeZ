import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

// Dependencies
import { MatIcon } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';

// Core
import { Product } from '../../../../core/models/product.interface';

@Component({
  selector: 'app-product-tab',
  standalone: true,
  imports: [MatTabsModule, MatIcon, CommonModule, MatDividerModule],
  templateUrl: './product-tab.component.html',
  styleUrl: './product-tab.component.sass',
})
export class ProductTabComponent {
  @Input() data!: Product;
}
