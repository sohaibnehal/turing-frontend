import { Me } from '../../models';

export const SignIn = (state, action) => {
  return {
    ...state,
    loading: true
  };
};
export const SignInFail = (state, action) => {
  return {
    ...state,
    loading: false
  };
};

export const SignInSuccess = (state, action) => {
  const auth: Me = action.payload;
  return {
    ...state,
    loading: false,
    isAuthenticated: true,
    auth
  };
};
export const Register = (state, action) => {
  return {
    ...state,
    loading: true
  };
};
export const RegisterFail = (state, action) => {
  return {
    ...state,
    loading: false
  };
};

export const RegisterSuccess = (state, action) => {
  const auth: Me = action.payload;
  return {
    ...state,
    loading: false,
    isAuthenticated: true,
    auth
  };
};

export const SignOut = (state, action) => {
  return {
    ...state,
    loading: true
  };
};
export const SignOutSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    isAuthenticated: false,
    auth: {},
    cart: []
  };
};
