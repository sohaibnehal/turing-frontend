import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../config/config';
import { Category } from '../models';

interface ICategoriesService {
  fetchCategories(): Observable<Category[]>;
  fetchCategoryById(id: number): Observable<Category>;
  fetchCategoriesByDepartmentId(departmentId: number): Observable<Category[]>;
}

@Injectable()
export class CategoriesService implements ICategoriesService {
  constructor(private http: HttpClient) {}
  fetchCategories(): Observable<any> {
    return this.http
      .get(`${environment.base_uri}/categories/`)
      .pipe(catchError((error: any) => throwError(error)));
  }
  fetchCategoryById(id: number): Observable<any> {
    return this.http
      .get(`${environment.base_uri}/categories/${id}`)
      .pipe(catchError((error: any) => throwError(error)));
  }
  fetchCategoriesByDepartmentId(departmentId: number): Observable<any> {
    return this.http
      .get(`${environment.base_uri}/categories/department/${departmentId}`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
