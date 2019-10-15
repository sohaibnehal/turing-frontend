import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../config/config';
import { Department } from '../models';

interface IDepartmentsService {
  fetchDepartments(): Observable<Department[]>;
  fetchDepartmentById(id: number): Observable<any>;
}

@Injectable()
export class DepartmentsService implements IDepartmentsService {
  constructor(private http: HttpClient) {}
  fetchDepartments(): Observable<any> {
    return this.http
      .get(`${environment.base_uri}/api/departments/`)
      .pipe(catchError((error: any) => throwError(error)));
  }
  fetchDepartmentById(id: number): Observable<any> {
    return this.http
      .get(`${environment.base_uri}/departments/${id}`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
