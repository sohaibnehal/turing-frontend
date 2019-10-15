import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as appActions from '../actions';
import { ShippingService } from '../../services/shipping.service';
import { Shipping } from '../../models';

@Injectable()
export class ShippingEffects {
  constructor(
    private actions$: Actions,
    private shippingService: ShippingService
  ) {}

  @Effect()
  fetchShipping$ = this.actions$.pipe(
    ofType(appActions.FETCH_SHIPPING),
    map((action: { type: string; payload: object }) => action.payload),
    switchMap(() => {
      return this.shippingService.fetchShippingOptions().pipe(
        map((res: { message: string; data: Shipping[] }) => {
          if (res.data) {
            return new appActions.FetchShippingSuccess(res.data);
          }
        }),
        catchError(error => of(new appActions.FetchShippingFail(error)))
      );
    })
  );
  @Effect({ dispatch: false })
  fetchShippingSuccess$ = this.actions$.pipe(
    ofType(appActions.FETCH_SHIPPING_SUCCESS),
    map(() => {})
  );

  @Effect({ dispatch: false })
  fetchShippingFail$ = this.actions$.pipe(
    ofType(appActions.FETCH_SHIPPING_FAIL),
    map((error: any) => {})
  );
}
