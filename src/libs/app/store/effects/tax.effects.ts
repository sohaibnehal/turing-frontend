import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as appActions from '../actions';
import { TaxService } from '../../services/tax.service';
import { Tax } from '../../models';

@Injectable()
export class TaxesEffects {
  constructor(private actions$: Actions, private taxService: TaxService) {}

  @Effect()
  fetchTaxes$ = this.actions$.pipe(
    ofType(appActions.FETCH_TAXES),
    map((action: { type: string; payload: object }) => action.payload),
    switchMap(() => {
      return this.taxService.fetchTaxes().pipe(
        map((res: { message: string; data: Tax[] }) => {
          if (res.data) {
            return new appActions.FetchTaxesSuccess(res.data);
          }
        }),
        catchError(error => of(new appActions.FetchTaxesFail(error)))
      );
    })
  );
  @Effect({ dispatch: false })
  fetchTaxesSuccess$ = this.actions$.pipe(
    ofType(appActions.FETCH_TAXES_SUCCESS),
    map(() => {})
  );

  @Effect({ dispatch: false })
  fetchTaxesFail$ = this.actions$.pipe(
    ofType(appActions.FETCH_TAXES_FAIL),
    map((error: any) => {})
  );
}
