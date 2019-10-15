import * as jwt_decode from 'jwt-decode';
import { User } from './User';

export class Me {
  user?: User;
  token?: string;

  constructor(json: { token?: string; message?: string }) {
    this.user = json.token ? jwt_decode(json.token) : {};
    this.token = json.token || '';
  }
}
