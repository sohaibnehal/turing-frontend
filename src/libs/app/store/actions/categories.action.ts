import { Action } from '@ngrx/store';

import { GroupedCategory } from '../../models';

// Action Constants
export const FETCH_CATEGORIES = '[Categories]Fetch Categories';
export const FETCH_CATEGORIES_FAIL = '[Categories]Fetch Categories Fail';
export const FETCH_CATEGORIES_SUCCESS = '[Categories]Fetch Categories Success';

// Action Creators
export class FetchCategories implements Action {
  readonly type = FETCH_CATEGORIES;
  constructor() {}
}

export class FetchCategoriesFail implements Action {
  readonly type = FETCH_CATEGORIES_FAIL;
  constructor(public payload: any) {}
}

export class FetchCategoriesSuccess implements Action {
  readonly type = FETCH_CATEGORIES_SUCCESS;
  constructor(public payload: GroupedCategory) {}
}
