import { Route } from '@angular/router';
import {DashboardComponent} from "@ivan-kudria/dashboard";
import {BaseLayoutComponent} from "@ivan-kudria/base-layout";

const NOT_FOUND_PATH = 'not-found';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: async () => (await import('@ivan-kudria/dashboard')).DashboardComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: `/${NOT_FOUND_PATH}`,
  },
];
