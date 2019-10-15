import { ActionReducerMap } from '@ngrx/store';
import * as fromApp from '../reducers/app.reducer';
import { AppState } from '../interface/state.interface';

export const reducers: ActionReducerMap<AppState> = {
  state: fromApp.reducer
};
export * from '../interface/state.interface';
export * from '../selectors/';
