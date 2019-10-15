import { Action } from '@ngrx/store';

import { Tax } from '../../models';

// Action Constants
export const FETCH_TAXES = '[Tax]Fetch Taxes';
export const FETCH_TAXES_FAIL = '[Tax]Fetch Taxes Fail';
export const FETCH_TAXES_SUCCESS = '[Tax]Fetch Taxes Success';

// Action Creators
export class FetchTaxes implements Action {
  readonly type = FETCH_TAXES;
  constructor() {}
}

export class FetchTaxesFail implements Action {
  readonly type = FETCH_TAXES_FAIL;
  constructor(public payload: any) {}
}

export class FetchTaxesSuccess implements Action {
  readonly type = FETCH_TAXES_SUCCESS;
  constructor(public payload: Tax[]) {}
}
