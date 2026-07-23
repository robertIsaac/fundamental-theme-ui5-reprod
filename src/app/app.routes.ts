import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./okay-component/okay-component'),
  },
  {
    path: 'buggy',
    loadComponent: () => import('./buggy-component/buggy-component'),
  }
];
