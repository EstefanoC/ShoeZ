import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Core
import { Product } from '../../../core/models/product.interface';
import { ProductDefault } from '../../../core/defaultValues/product';

// Components
import { BreadcrumbsComponent } from '../../../shared/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-single-product-layout',
  standalone: true,
  imports: [BreadcrumbsComponent],
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
