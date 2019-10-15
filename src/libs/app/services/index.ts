import { AuthGuard } from './auth-guard.service';
import { ErrorInterceptor } from './error.interceptor';
import { CategoriesService } from './categories.service';
import { ProductsService } from './products.service';
import { StorageService } from './storage.service';
import { ShippingService } from './shipping.service';
import { TaxService } from './tax.service';
import { AuthService } from './auth.service';
import { CommonService } from './common.service';

export const services: any[] = [
  AuthGuard,
  ErrorInterceptor,
  CategoriesService,
  ProductsService,
  StorageService,
  ShippingService,
  TaxService,
  AuthService,
  CommonService
];

export * from './auth-guard.service';
export * from './error.interceptor';
export * from './categories.service';
export * from './products.service';
export * from './storage.service';
export * from './shipping.service';
export * from './tax.service';
export * from './auth.service';
export * from './common.service';
