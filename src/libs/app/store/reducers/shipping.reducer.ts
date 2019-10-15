import { Shipping } from '../../models';

export const fetchShipping = (state, action) => {
  return {
    ...state,
    loading: true
  };
};
export const fetchShippingFail = (state, action) => {
  return {
    ...state,
    loading: false
  };
};
export const fetchShippingSuccess = (state, action) => {
  const shipping: Shipping[] = action.payload;
  return {
    ...state,
    loading: false,
    shipping
  };
};
