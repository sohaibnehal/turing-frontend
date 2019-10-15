import * as CategoriesActions from './categories.action';
import * as ProductsActions from './products.action';
import * as CartActions from './cart.action';
import * as ShippingActions from './shipping.action';
import * as TaxActions from './tax.action';
import * as AuthActions from './auth.action';

export * from './categories.action';
export * from './products.action';
export * from './cart.action';
export * from './shipping.action';
export * from './tax.action';
export * from './auth.action';

// Action types
export type StoreActions =
  | CategoriesActions.FetchCategories
  | CategoriesActions.FetchCategoriesSuccess
  | CategoriesActions.FetchCategoriesFail
  | ProductsActions.FetchProducts
  | ProductsActions.FetchProductsSuccess
  | ProductsActions.FetchProductsFail
  | ProductsActions.FetchProductDetail
  | ProductsActions.FetchProductDetailSuccess
  | ProductsActions.FetchProductDetailFail
  | CartActions.AddItem
  | CartActions.UpdateItem
  | CartActions.RemoveItem
  | CartActions.SetCart
  | ShippingActions.FetchShipping
  | ShippingActions.FetchShippingFail
  | ShippingActions.FetchShippingSuccess
  | TaxActions.FetchTaxes
  | TaxActions.FetchTaxesFail
  | TaxActions.FetchTaxesSuccess
  | AuthActions.SignIn
  | AuthActions.SignInFail
  | AuthActions.SignInSuccess
  | AuthActions.Register
  | AuthActions.RegisterFail
  | AuthActions.RegisterSuccess
  | AuthActions.SignOutUser
  | AuthActions.SignOutSuccess;
