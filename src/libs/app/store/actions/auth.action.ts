import { Action } from '@ngrx/store';

import { Me } from '../../models';

// Action Constants
export const SIGN_IN_USER = '[User]Sign In User';
export const SIGN_IN_USER_FAIL = '[User]Sign In User Fail';
export const SIGN_IN_USER_SUCCESS = '[User]Sign In User Success';
export const REGISTER_USER = '[User]Register User';
export const REGISTER_USER_FAIL = '[User]Register User Fail';
export const REGISTER_USER_SUCCESS = '[User]Register User Success';
export const SIGN_OUT_USER = '[User]Sign Out User';
export const SIGN_OUT_USER_SUCCESS = '[User]Sign Out User Success';

// Action Creators
export class SignIn implements Action {
  readonly type = SIGN_IN_USER;
  constructor(public payload: { username: string; password: string }) {}
}

export class SignInFail implements Action {
  readonly type = SIGN_IN_USER_FAIL;
  constructor(public payload: any) {}
}

export class SignInSuccess implements Action {
  readonly type = SIGN_IN_USER_SUCCESS;
  constructor(public payload: Me) {}
}
export class Register implements Action {
  readonly type = REGISTER_USER;
  constructor(
    public payload: {
      username: string;
      email: string;
      password: string;
    }
  ) {}
}

export class RegisterFail implements Action {
  readonly type = REGISTER_USER_FAIL;
  constructor(public payload: any) {}
}

export class RegisterSuccess implements Action {
  readonly type = REGISTER_USER_SUCCESS;
  constructor(public payload: Me) {}
}

export class SignOutUser implements Action {
  readonly type = SIGN_OUT_USER;
  constructor() {}
}

export class SignOutSuccess implements Action {
  readonly type = SIGN_OUT_USER_SUCCESS;
  constructor() {}
}
