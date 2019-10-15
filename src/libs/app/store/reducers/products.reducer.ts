import { ProductData, Product } from '../../models';

export const fetchProducts = (state, action) => {
  return {
    ...state,
    loading: true
  };
};
export const fetchProductsFail = (state, action) => {
  return {
    ...state,
    loading: false
  };
};
export const fetchProductsSuccess = (state, action) => {
  const productsData: ProductData = action.payload;
  return {
    ...state,
    loading: false,
    productsData
  };
};
export const fetchProductDetail = (state, action) => {
  return {
    ...state,
    loading: true
  };
};
export const fetchProductDetailFail = (state, action) => {
  return {
    ...state,
    loading: false
  };
};
export const fetchProductDetailSuccess = (state, action) => {
  const product: Product = action.payload;
  return {
    ...state,
    loading: false,
    product
  };
};
