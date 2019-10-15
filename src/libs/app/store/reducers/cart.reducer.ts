import { Cart } from '../../models';

export const addItem = (state, action) => {
  const newitem: Cart = action.payload;
  const cart = [...state.cart, newitem];
  return {
    ...state,
    loading: false,
    cart
  };
};
export const updateItem = (state, action) => {
  const { item, index } = action.payload;
  const cart = [...state.cart];
  cart[index] = item;
  return {
    ...state,
    loading: false,
    cart
  };
};

export const removeItem = (state, action) => {
  const index: number = action.payload;
  const cart = [...state.cart];
  cart.splice(index, 1);
  return {
    ...state,
    loading: false,
    cart
  };
};

export const setCart = (state, action) => {
  const cart: Cart[] = action.payload;
  return {
    ...state,
    loading: false,
    cart
  };
};
