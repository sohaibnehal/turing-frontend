import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as jwt_decode from 'jwt-decode';

import { ToastrService } from 'ngx-toastr';

import * as authActions from '../actions';
import { StorageService } from '../../services/storage.service';
import { AuthService } from '../../services/auth.service';
import { Me } from '../../models';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private storageService: StorageService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  @Effect()
  signin$ = this.actions$.pipe(
    ofType(authActions.SIGN_IN_USER),
    map((action: { type: string; payload: object }) => action.payload),
    switchMap((payload: { username: string; password: string }) => {
      return this.authService.authenticate(payload).pipe(
        map((res: { message: string; token: string }) => {
          const data = {
            token: res.token,
            user: jwt_decode(res.token)
          };
          this.storageService.set(this.storageService.keys.AUTH, data);
          this.toastr.success('You have logged in successfully!');
          return new authActions.SignInSuccess(data);
        }),
        catchError(error => of(new authActions.SignInFail(error)))
      );
    })
  );

  @Effect({ dispatch: false })
  signinSuccess$ = this.actions$.pipe(
    ofType(authActions.SIGN_IN_USER_SUCCESS),
    tap((payload: Me) => {})
  );

  @Effect({ dispatch: false })
  signinFail$ = this.actions$.pipe(
    ofType(authActions.SIGN_IN_USER_FAIL),
    map((action: { type: string; payload: any }) => action.payload),
    tap(error => {
      this.toastr.error(error.error.message);
    })
  );
  @Effect()
  register$ = this.actions$.pipe(
    ofType(authActions.REGISTER_USER),
    map((action: { type: string; payload: object }) => action.payload),
    switchMap(
      (payload: { username: string; email: string; password: string }) => {
        return this.authService.register(payload).pipe(
          map((res: { message: string; token: string }) => {
            const data = {
              token: res.token,
              user: jwt_decode(res.token)
            };
            this.storageService.set(this.storageService.keys.AUTH, data);
            this.toastr.success('You have logged in successfully!');
            return new authActions.SignInSuccess(data);
          }),
          catchError(error => of(new authActions.SignInFail(error)))
        );
      }
    )
  );

  @Effect({ dispatch: false })
  registerSuccess$ = this.actions$.pipe(
    ofType(authActions.REGISTER_USER_SUCCESS),
    tap((payload: Me) => {})
  );

  @Effect({ dispatch: false })
  registerFail$ = this.actions$.pipe(
    ofType(authActions.REGISTER_USER_FAIL),
    map((action: { type: string; payload: any }) => action.payload),
    tap(error => {
      this.toastr.error(error.error.message);
    })
  );

  @Effect()
  signout$ = this.actions$.pipe(
    ofType(authActions.SIGN_OUT_USER),
    map(() => {
      this.storageService.delete(this.storageService.keys.AUTH);
      this.storageService.delete(this.storageService.keys.CART);
      return new authActions.SignOutSuccess();
    })
  );

  @Effect({ dispatch: false })
  signoutSuccess$ = this.actions$.pipe(
    ofType(authActions.SIGN_OUT_USER_SUCCESS),
    tap(() => {
      this.toastr.success('You have logged out successfully');
    })
  );
}
