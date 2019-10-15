import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../config/config';
import { Product } from '../models';

interface IProductsService {
  fetchProducts(payload: {
    searchText: string;
    categoryId: string;
    pageNumber: number;
  }): Observable<Product[]>;
  fetchProductById(id: string): Observable<Product>;
}

@Injectable()
export class ProductsService implements IProductsService {
  constructor(private http: HttpClient) {}
  fetchProducts(payload: {
    searchText: string;
    categoryId: string;
    pageNumber: number;
  }): Observable<any> {
    return this.http
      .post(
        `${environment.base_uri}/products/?searchText=${
          payload.searchText
        }&categoryId=${payload.categoryId}`,
        {
          page: payload.pageNumber
        }
      )
      .pipe(catchError((error: any) => throwError(error)));
  }
  fetchProductById(id: string): Observable<any> {
    return this.http
      .get(`${environment.base_uri}/products/${id}`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
