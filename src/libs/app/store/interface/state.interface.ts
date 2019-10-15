import {
  Category,
  GroupedCategory,
  ProductData,
  Product,
  Cart,
  Shipping,
  Tax,
  Me
} from '../../models';

export interface IAppState {
  categories: GroupedCategory;
  selectedCategory: Category;
  productsData: ProductData;
  product: Product;
  cart: Cart[];
  shipping: Shipping[];
  tax: Tax[];
  order: any;
  auth: Me;
  loading: boolean;
  isAuthenticated: boolean;
}
export interface AppState {
  state: IAppState;
}
