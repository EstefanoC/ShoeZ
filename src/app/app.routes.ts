import { Routes } from '@angular/router';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/landing/landing.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./pages/single-product/single-product.routes').then(
        (m) => m.AUTH_ROUTES
      ),
  },
  {
    path: '**',
    component: Error404Component,
  },
];
