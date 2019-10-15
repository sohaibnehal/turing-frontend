import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as appActions from '../actions';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../models';

@Injectable()
export class CategoriesEffects {
  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService
  ) {}

  @Effect()
  fetchCategories$ = this.actions$.pipe(
    ofType(appActions.FETCH_CATEGORIES),
    map((action: { type: string; payload: object }) => action.payload),
    switchMap(() => {
      return this.categoriesService.fetchCategories().pipe(
        map((res: { message: string; data: Category[] }) => {
          if (res.data) {
            const categories = {};
            res.data.forEach(category => {
              if (categories[category.departmentId.name]) {
                categories[category.departmentId.name].push(category);
              } else {
                categories[category.departmentId.name] = [];
                categories[category.departmentId.name].push(category);
              }
            });
            return new appActions.FetchCategoriesSuccess(categories);
          }
        }),
        catchError(error => of(new appActions.FetchCategoriesFail(error)))
      );
    })
  );
  @Effect({ dispatch: false })
  fetchCategoriesSuccess$ = this.actions$.pipe(
    ofType(appActions.FETCH_CATEGORIES_SUCCESS),
    map(() => {})
  );

  @Effect({ dispatch: false })
  fetchCategoriesFail$ = this.actions$.pipe(
    ofType(appActions.FETCH_CATEGORIES_FAIL),
    map((error: any) => {})
  );
}
