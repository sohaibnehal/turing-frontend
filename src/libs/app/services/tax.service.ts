import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../config/config';
import { Tax } from '../models';

interface ITaxService {
  fetchTaxes(): Observable<Tax[]>;
}

@Injectable()
export class TaxService implements ITaxService {
  constructor(private http: HttpClient) {}
  fetchTaxes(): Observable<any> {
    return this.http
      .get(`${environment.base_uri}/tax/`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
