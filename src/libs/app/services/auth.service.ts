import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../config/config';
import { Me } from '../models';

interface IAuthService {
  authenticate(payload: { username: string; password: string }): Observable<Me>;
  register(payload: {
    username: string;
    email: string;
    password: string;
  }): Observable<Me>;
}

@Injectable()
export class AuthService implements IAuthService {
  constructor(private http: HttpClient) {}
  authenticate(payload: {
    username: string;
    password: string;
  }): Observable<Me> {
    return this.http
      .post(`${environment.base_uri}/users/signin`, payload)
      .pipe(catchError((error: any) => throwError(error)));
  }
  register(payload: {
    username: string;
    email: string;
    password: string;
  }): Observable<Me> {
    return this.http
      .post(`${environment.base_uri}/users`, payload)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
