import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';

import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  static readonly SERVER_NOT_RESPONDING: string =
    'An error occurred: The server is not responding.';

  constructor(
    private store: Store<fromStore.AppState>,
    private toastrService: ToastrService
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((response: any) => {
        if (response instanceof HttpErrorResponse && response.status === 401) {
          this.store.dispatch(new fromStore.SignOutUser());
        }
        if (response instanceof HttpErrorResponse && response.status === 0) {
          // Server is not responding
          this.toastrService.error(ErrorInterceptor.SERVER_NOT_RESPONDING);
        }
        return throwError(response);
      })
    );
  }
}
