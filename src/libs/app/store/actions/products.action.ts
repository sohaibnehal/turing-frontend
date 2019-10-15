import { Action } from '@ngrx/store';

import { Product, ProductData } from '../../models';

// Action Constants
export const FETCH_PRODUCTS = '[Products]Fetch Products';
export const FETCH_PRODUCTS_FAIL = '[Products]Fetch Products Fail';
export const FETCH_PRODUCTS_SUCCESS = '[Products]Fetch Products Success';
export const FETCH_PRODUCT_DETAIL = '[Products]Fetch Product Detail';
export const FETCH_PRODUCT_DETAIL_FAIL = '[Products]Fetch Product Detail Fail';
export const FETCH_PRODUCT_DETAIL_SUCCESS =
  '[Products]Fetch Product Detail Success';

// Action Creators
export class FetchProducts implements Action {
  readonly type = FETCH_PRODUCTS;
  constructor(public payload?: any) {}
}

export class FetchProductsFail implements Action {
  readonly type = FETCH_PRODUCTS_FAIL;
  constructor(public payload: any) {}
}

export class FetchProductsSuccess implements Action {
  readonly type = FETCH_PRODUCTS_SUCCESS;
  constructor(public payload: ProductData) {}
}
export class FetchProductDetail implements Action {
  readonly type = FETCH_PRODUCT_DETAIL;
  constructor(public payload: string) {}
}

export class FetchProductDetailFail implements Action {
  readonly type = FETCH_PRODUCT_DETAIL_FAIL;
  constructor(public payload: any) {}
}

export class FetchProductDetailSuccess implements Action {
  readonly type = FETCH_PRODUCT_DETAIL_SUCCESS;
  constructor(public payload: Product) {}
}
