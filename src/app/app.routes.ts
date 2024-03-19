import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/landing/landing.routes').then((m) => m.AUTH_ROUTES),
  },
];
