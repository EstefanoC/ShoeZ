import { Routes } from '@angular/router';

// Components
import { ShopLayoutComponent } from './shop-layout/shop-layout.component';
import { SingleProductLayoutComponent } from './single-product-layout/single-product-layout.component';

export const AUTH_ROUTES: Routes = [
  { path: '', component: ShopLayoutComponent },
  { path: ':id', component: SingleProductLayoutComponent },
];
