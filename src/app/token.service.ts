import { Injectable } from '@angular/core';

import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken(): string {
    //console.log(localStorage.getItem(environment.ACCESS_TOKEN));
    return localStorage.getItem(environment.ACCESS_TOKEN);
  }

  getRefreshToken(): string {
    return localStorage.getItem(environment.REFRESH_TOKEN);
  }

  saveToken(token): void {
    localStorage.setItem(environment.ACCESS_TOKEN, token);
  }

  saveRefreshToken(refreshToken): void {
    localStorage.setItem(environment.REFRESH_TOKEN, refreshToken);
  }

  removeToken(): void {
    localStorage.removeItem(environment.ACCESS_TOKEN);
  }

  removeRefreshToken(): void {
    localStorage.removeItem(environment.REFRESH_TOKEN);
  }


   getUser() {
    return JSON.parse(localStorage.getItem(environment.ACCESS_TOKEN));
  }

}
