import { Injectable } from '@angular/core';

interface IStorageService {
  keys: object;
  set(key: string, value: any): Promise<boolean>;
  get(key: string): Promise<any>;
  delete(key: string): void;
}

@Injectable()
export class StorageService implements IStorageService {
  keys = {
    CART: 'cart',
    AUTH: 'auth'
  };

  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
    return Promise.resolve(true);
  }

  get(key: string): Promise<any> {
    const value = localStorage.getItem(key);
    if (value) {
      return Promise.resolve(JSON.parse(value));
    }
    return Promise.resolve(null);
  }

  delete(key: string) {
    localStorage.removeItem(key);
  }
}
