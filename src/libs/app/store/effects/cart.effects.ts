import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, withLatestFrom } from 'rxjs/operators';

import * as appActions from '../actions';
import { StorageService } from '../../services/storage.service';
import { IAppState } from '../interface/state.interface';
import { getCart } from '../selectors';

@Injectable()
export class CartEffects {
  constructor(
    private store$: Store<IAppState>,
    private actions$: Actions,
    private storageService: StorageService
  ) {}

  @Effect({ dispatch: false })
  addToCart$ = this.actions$.pipe(
    ofType(appActions.ADD_ITEM),
    withLatestFrom(this.store$.select(getCart)),
    map(res => {
      this.storageService.set(this.storageService.keys.CART, res[1]);
    })
  );
  @Effect({ dispatch: false })
  updateItemCart$ = this.actions$.pipe(
    ofType(appActions.UPDATE_ITEM),
    withLatestFrom(this.store$.select(getCart)),
    map(res => {
      this.storageService.set(this.storageService.keys.CART, res[1]);
    })
  );
  @Effect({ dispatch: false })
  removeFromCart$ = this.actions$.pipe(
    ofType(appActions.REMOVE_ITEM),
    withLatestFrom(this.store$.select(getCart)),
    map(res => {
      this.storageService.set(this.storageService.keys.CART, res[1]);
    })
  );
}
