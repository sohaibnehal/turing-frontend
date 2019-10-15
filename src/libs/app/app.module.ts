import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';

import {
  NgbModule,
  NgbActiveModal,
  NgbPaginationModule
} from '@ng-bootstrap/ng-bootstrap';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

// services
import * as fromServices from './services';

// routes
import { ROUTES } from './app.routes';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    NgbModule.forRoot(),
    NgbPaginationModule,
    StoreModule.forFeature('state', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: fromServices.ErrorInterceptor,
      multi: true
    },
    NgbActiveModal,
    ...fromServices.services
  ],
  entryComponents: [
    fromComponents.ProductDetailComponent,
    fromComponents.SignInComponent
  ]
})
export class AppModule {}
