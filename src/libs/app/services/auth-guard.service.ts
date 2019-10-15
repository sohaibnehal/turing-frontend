import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';

import { StorageService } from './storage.service';
import { CommonService } from './common.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<fromStore.AppState>,
    private storageService: StorageService,
    private commonService: CommonService
  ) {}

  canActivate(): Promise<boolean> {
    return this.doCheck();
  }
  private async doCheck() {
    const cart =
      (await this.storageService.get(this.storageService.keys.CART)) || [];
    this.store.dispatch(new fromStore.SetCart(cart));
    let isTokenValid = false;
    // Fetch the data from local storage
    const auth = await this.storageService.get(this.storageService.keys.AUTH);
    // If there was any session stored in locastorage earlier
    if (auth && auth.token) {
      // Checking if JWT is still valid
      isTokenValid = this.commonService.isTokenValid(auth.user.exp);
      if (!isTokenValid) {
        // If JWT has expired, we clear the localstorage and redirect to login page
        this.store.dispatch(new fromStore.SignOutUser());
        return isTokenValid;
      } else {
        // This step is to set state in the store
        this.store.dispatch(new fromStore.SignInSuccess(auth));
        return isTokenValid;
      }
    }
    return true;
  }
}
