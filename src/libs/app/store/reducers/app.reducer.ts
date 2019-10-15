import * as fromAuth from '../actions';
import { IAppState } from '../interface/state.interface';
import { initialState } from './initial-state';
import * as categoriesReducer from './categories.reducer';
import * as productsReducer from './products.reducer';
import * as cartReducer from './cart.reducer';
import * as shippingReducer from './shipping.reducer';
import * as taxReducer from './tax.reducer';
import * as authReducer from './auth.reducer';

export function reducer(
  state = initialState,
  action: fromAuth.StoreActions
): IAppState {
  switch (action.type) {
    // Action Type: Categories
    case fromAuth.FETCH_CATEGORIES:
      return categoriesReducer.fetchCategories(state, action);
    case fromAuth.FETCH_CATEGORIES_FAIL:
      return categoriesReducer.fetchCategoriesFail(state, action);
    case fromAuth.FETCH_CATEGORIES_SUCCESS:
      return categoriesReducer.fetchCategoriesSuccess(state, action);

    // Action Type: Products
    case fromAuth.FETCH_PRODUCTS:
      return productsReducer.fetchProducts(state, action);
    case fromAuth.FETCH_PRODUCTS_FAIL:
      return productsReducer.fetchProductsFail(state, action);
    case fromAuth.FETCH_PRODUCTS_SUCCESS:
      return productsReducer.fetchProductsSuccess(state, action);
    case fromAuth.FETCH_PRODUCT_DETAIL:
      return productsReducer.fetchProductDetail(state, action);
    case fromAuth.FETCH_PRODUCT_DETAIL_FAIL:
      return productsReducer.fetchProductDetailFail(state, action);
    case fromAuth.FETCH_PRODUCT_DETAIL_SUCCESS:
      return productsReducer.fetchProductDetailSuccess(state, action);

    // Action Type: Cart
    case fromAuth.ADD_ITEM:
      return cartReducer.addItem(state, action);
    case fromAuth.UPDATE_ITEM:
      return cartReducer.updateItem(state, action);
    case fromAuth.REMOVE_ITEM:
      return cartReducer.removeItem(state, action);
    case fromAuth.SET_CART:
      return cartReducer.setCart(state, action);

    // Action Type: Shipping
    case fromAuth.FETCH_SHIPPING:
      return shippingReducer.fetchShipping(state, action);
    case fromAuth.FETCH_SHIPPING_FAIL:
      return shippingReducer.fetchShippingFail(state, action);
    case fromAuth.FETCH_SHIPPING_SUCCESS:
      return shippingReducer.fetchShippingSuccess(state, action);

    // Action Type: Tax
    case fromAuth.FETCH_TAXES:
      return taxReducer.fetchTaxes(state, action);
    case fromAuth.FETCH_TAXES_FAIL:
      return taxReducer.fetchTaxesFail(state, action);
    case fromAuth.FETCH_TAXES_SUCCESS:
      return taxReducer.fetchTaxesSuccess(state, action);

    // Action Type: Auth
    case fromAuth.SIGN_IN_USER:
      return authReducer.SignIn(state, action);
    case fromAuth.SIGN_IN_USER_FAIL:
      return authReducer.SignInFail(state, action);
    case fromAuth.SIGN_IN_USER_SUCCESS:
      return authReducer.SignInSuccess(state, action);
    case fromAuth.REGISTER_USER:
      return authReducer.Register(state, action);
    case fromAuth.REGISTER_USER_FAIL:
      return authReducer.RegisterFail(state, action);
    case fromAuth.REGISTER_USER_SUCCESS:
      return authReducer.RegisterSuccess(state, action);
    case fromAuth.SIGN_OUT_USER:
      return authReducer.SignOut(state, action);
    case fromAuth.SIGN_OUT_USER_SUCCESS:
      return authReducer.SignOutSuccess(state, action);
  }
  return state;
}
