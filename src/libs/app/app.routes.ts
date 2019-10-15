import { Routes } from '@angular/router';

// containers
import * as fromContainers from './containers';

// services
import * as fromServices from './services';

export const ROUTES: Routes = [
  {
    path: 'checkout',
    component: fromContainers.CheckoutComponent,
    canActivate: [fromServices.AuthGuard]
  },
  {
    path: '',
    component: fromContainers.DashboardComponent,
    canActivate: [fromServices.AuthGuard]
  },
  { path: '**', redirectTo: '/' }
];
