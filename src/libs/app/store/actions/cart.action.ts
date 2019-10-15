import { Action } from '@ngrx/store';
import { Cart } from '../../models';

// Action Constants
export const ADD_ITEM = '[Cart]Add Item In Cart';
export const UPDATE_ITEM = '[Cart]Update Item In Cart';
export const REMOVE_ITEM = '[Cart]Remove Item';
export const SET_CART = '[Cart]Set Cart';

// Action Creators
export class AddItem implements Action {
  readonly type = ADD_ITEM;
  constructor(public payload: any) {}
}
export class RemoveItem implements Action {
  readonly type = REMOVE_ITEM;
  constructor(public payload: number) {}
}
export class UpdateItem implements Action {
  readonly type = UPDATE_ITEM;
  constructor(public payload: any) {}
}
export class SetCart implements Action {
  readonly type = SET_CART;
  constructor(public payload: Cart[]) {}
}
