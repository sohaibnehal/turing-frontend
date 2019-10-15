import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as appActions from '../actions';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models';

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private products: ProductsService) {}

  @Effect()
  fetchProducts$ = this.actions$.pipe(
    ofType(appActions.FETCH_PRODUCTS),
    map((action: { type: string; payload: object }) => action.payload),
    switchMap(
      (payload: {
        searchText: string;
        categoryId: string;
        pageNumber: number;
      }) => {
        return this.products.fetchProducts(payload).pipe(
          map(
            (res: {
              message: string;
              data: Product[];
              currentPage: number;
              nextPage: number;
              total: number;
            }) => {
              const response = {
                products: res.data,
                productsPagination: {
                  currentPage: res.currentPage,
                  nextPage: res.nextPage,
                  total: res.total
                }
              };
              return new appActions.FetchProductsSuccess(response);
            }
          ),
          catchError(error => of(new appActions.FetchProductsFail(error)))
        );
      }
    )
  );
  @Effect({ dispatch: false })
  fetchProductsSuccess$ = this.actions$.pipe(
    ofType(appActions.FETCH_PRODUCTS_SUCCESS),
    map(() => {})
  );

  @Effect({ dispatch: false })
  fetchProductsFail$ = this.actions$.pipe(
    ofType(appActions.FETCH_PRODUCTS_FAIL),
    map((error: any) => {})
  );
  @Effect()
  fetchProductDetail$ = this.actions$.pipe(
    ofType(appActions.FETCH_PRODUCT_DETAIL),
    map((action: { type: string; payload: string }) => action.payload),
    switchMap((id: string) => {
      return this.products.fetchProductById(id).pipe(
        map((res: { message: string; data: Product }) => {
          return new appActions.FetchProductDetailSuccess(res.data);
        }),
        catchError(error => of(new appActions.FetchProductDetailFail(error)))
      );
    })
  );
  @Effect({ dispatch: false })
  fetchProductDetailSuccess$ = this.actions$.pipe(
    ofType(appActions.FETCH_PRODUCT_DETAIL_SUCCESS),
    map(() => {})
  );

  @Effect({ dispatch: false })
  fetchProductDetailFail$ = this.actions$.pipe(
    ofType(appActions.FETCH_PRODUCT_DETAIL_FAIL),
    map((error: any) => {})
  );
}
