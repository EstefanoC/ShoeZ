import { Routes } from '@angular/router';

// Components
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
      import('./pages/shop/shop.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: '**',
    component: Error404Component,
  },
];
