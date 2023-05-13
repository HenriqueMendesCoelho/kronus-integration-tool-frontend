import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  decode(token: string): { exp: number } | undefined {
    if (!token) {
      return;
    }
    const tokenPayload: { exp: number } = jwtDecode(token);
    return tokenPayload;
  }

  isLoged(): boolean {
    const token = localStorage.getItem('auth-tk');

    if (!token) {
      return false;
    }

    const decodedToken = this.decode(token);

    if (!decodedToken) {
      return false;
    }

    const until = decodedToken.exp;
    const dateNow = Math.floor(Date.now() / 1000);
    const diff = until - dateNow;
    const result = diff > 0 ? Math.floor(diff / 60) : 0;

    return result > 0;
  }
}
