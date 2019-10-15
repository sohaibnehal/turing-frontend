import { IAppState } from '../interface/state.interface';

// Selector Methods

export const getAppLoading = (state: IAppState) => state.loading;

export const getIsAuthenticated = (state: IAppState) => state.isAuthenticated;

export const getCategories = (state: IAppState) => {
  if (state && state.categories) {
    return state.categories;
  } else {
    return null;
  }
};
export const getProducts = (state: IAppState) => {
  if (state && state.productsData) {
    return state.productsData;
  } else {
    return null;
  }
};
export const getProduct = (state: IAppState) => {
  if (state && state.product) {
    return state.product;
  } else {
    return null;
  }
};
export const getCart = (state: IAppState) => {
  if (state && state.cart) {
    return state.cart;
  } else {
    return [];
  }
};
export const getShipping = (state: IAppState) => {
  if (state && state.shipping) {
    return state.shipping;
  } else {
    return null;
  }
};
export const getTaxes = (state: IAppState) => {
  if (state && state.tax) {
    return state.tax;
  } else {
    return null;
  }
};
