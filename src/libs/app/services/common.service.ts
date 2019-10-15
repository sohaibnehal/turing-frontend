import { Injectable } from '@angular/core';

interface ICommonService {
  isTokenValid(tokenExpiry: number, value: any): boolean;
}

@Injectable()
export class CommonService implements ICommonService {
  // Checks the validity of JWT
  isTokenValid(tokenExpiry: number): boolean {
    const currentTime = Date.now() / 1000;
    if (tokenExpiry < currentTime) {
      return false;
    }
    return true;
  }
}
