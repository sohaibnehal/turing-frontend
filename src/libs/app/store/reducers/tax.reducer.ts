import { Tax } from '../../models';

export const fetchTaxes = (state, action) => {
  return {
    ...state,
    loading: true
  };
};
export const fetchTaxesFail = (state, action) => {
  return {
    ...state,
    loading: false
  };
};
export const fetchTaxesSuccess = (state, action) => {
  const tax: Tax[] = action.payload;
  return {
    ...state,
    loading: false,
    tax
  };
};
