import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../config/config';
import { Shipping, ShippingOptions } from '../models';

interface IShippingService {
  fetchShippingOptions(): Observable<Shipping[]>;
  fetchShippingOptionsByRegions(): Observable<ShippingOptions>;
}

@Injectable()
export class ShippingService implements IShippingService {
  constructor(private http: HttpClient) {}
  fetchShippingOptions(): Observable<any> {
    return this.http
      .get(`${environment.base_uri}/shipping/`)
      .pipe(catchError((error: any) => throwError(error)));
  }
  fetchShippingOptionsByRegions(): Observable<any> {
    return this.http
      .get(`${environment.base_uri}/shipping/regions`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
