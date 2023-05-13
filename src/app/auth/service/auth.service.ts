import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment';
import { LoginResponseType } from './authTypes';
import { Observable } from 'rxjs';
import { UserType } from '../../services/userService/userTypes';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly BASE_URL = environment.BASE_URL;

  constructor(private client: HttpClient) {}

  login(user: UserType): Observable<LoginResponseType> {
    return this.client.post<LoginResponseType>(`${this.BASE_URL}/login`, user);
  }
}
