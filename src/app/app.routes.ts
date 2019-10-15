import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: '../libs/app/app.module#AppModule'
  }
];
