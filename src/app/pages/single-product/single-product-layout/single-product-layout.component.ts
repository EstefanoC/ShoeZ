import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Dependencies
import { MatGridListModule } from '@angular/material/grid-list';

// Core
import { Product } from '../../../core/models/product.interface';
import { ProductDefault } from '../../../core/defaultValues/product';

// Components
import { BreadcrumbsComponent } from '../../../shared/components/breadcrumbs/breadcrumbs.component';
import { Image360Component } from '../../../shared/components/single-product/image360/image360.component';
import { ProductTabComponent } from '../../../shared/components/single-product/product-tab/product-tab.component';
import { ProductInfoComponent } from '../../../shared/components/single-product/product-info/product-info.component';

@Component({
  selector: 'app-single-product-layout',
  standalone: true,
  imports: [
    MatGridListModule,
    Image360Component,
    ProductTabComponent,
    BreadcrumbsComponent,
    ProductInfoComponent,
  ],
  templateUrl: './single-product-layout.component.html',
  styleUrl: './single-product-layout.component.sass',
})
export class SingleProductLayoutComponent {
  product!: string | null;
  data!: Product;

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the name of Product
    this.route.params.subscribe((params) => {
      this.product = params['id'];
      this.data = ProductDefault;
    });
  }
}
