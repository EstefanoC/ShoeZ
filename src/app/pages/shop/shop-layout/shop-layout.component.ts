import { Component } from '@angular/core';

// Components
import { ShopGridComponent } from '../../../shared/components/shop/shop-grid/shop-grid.component';
import { BreadcrumbsComponent } from '../../../shared/components/breadcrumbs/breadcrumbs.component';
import { ShopFilterComponent } from '../../../shared/components/shop/shop-filter/shop-filter.component';

@Component({
  selector: 'app-shop-layout',
  standalone: true,
  imports: [ShopFilterComponent, ShopGridComponent, BreadcrumbsComponent],
  templateUrl: './shop-layout.component.html',
  styleUrl: './shop-layout.component.sass',
})
export class ShopLayoutComponent {}
