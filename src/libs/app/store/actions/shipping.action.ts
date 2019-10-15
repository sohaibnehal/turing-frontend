import { Action } from '@ngrx/store';

import { Shipping } from '../../models';

// Action Constants
export const FETCH_SHIPPING = '[Shipping]Fetch Shipping';
export const FETCH_SHIPPING_FAIL = '[Shipping]Fetch Shipping Fail';
export const FETCH_SHIPPING_SUCCESS = '[Shipping]Fetch Shipping Success';

// Action Creators
export class FetchShipping implements Action {
  readonly type = FETCH_SHIPPING;
  constructor() {}
}

export class FetchShippingFail implements Action {
  readonly type = FETCH_SHIPPING_FAIL;
  constructor(public payload: any) {}
}

export class FetchShippingSuccess implements Action {
  readonly type = FETCH_SHIPPING_SUCCESS;
  constructor(public payload: Shipping[]) {}
}
