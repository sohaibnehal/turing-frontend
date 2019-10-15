import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAppSelectors from './app.selectors';
import { AppState } from '../interface/state.interface';

export const selectAppState = createFeatureSelector<AppState>('state');

export const selectState = createSelector(
  selectAppState,
  (state: AppState) => state.state
);
export const getIsLoading = createSelector(
  selectState,
  fromAppSelectors.getAppLoading
);
export const getIsAuthenticated = createSelector(
  selectState,
  fromAppSelectors.getIsAuthenticated
);
export const getCategories = createSelector(
  selectState,
  fromAppSelectors.getCategories
);
export const getProducts = createSelector(
  selectState,
  fromAppSelectors.getProducts
);
export const getProduct = createSelector(
  selectState,
  fromAppSelectors.getProduct
);
export const getCart = createSelector(
  selectState,
  fromAppSelectors.getCart
);
export const getShipping = createSelector(
  selectState,
  fromAppSelectors.getShipping
);
export const getTaxes = createSelector(
  selectState,
  fromAppSelectors.getTaxes
);
