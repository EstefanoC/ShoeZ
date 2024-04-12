import { Routes } from '@angular/router';

// Components
import { SingleProductLayoutComponent } from './single-product-layout/single-product-layout.component';

export const AUTH_ROUTES: Routes = [
  { path: ':id', component: SingleProductLayoutComponent },
];
