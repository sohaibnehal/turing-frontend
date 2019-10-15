import { IAppState } from '../interface/state.interface';

export const initialState: IAppState = {
  categories: null,
  selectedCategory: null,
  productsData: null, // all the products
  product: null,
  cart: [],
  shipping: [],
  tax: [],
  order: {},
  auth: {},
  loading: false,
  isAuthenticated: false
};
