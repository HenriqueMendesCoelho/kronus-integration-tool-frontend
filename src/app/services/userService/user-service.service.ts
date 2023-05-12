import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponseType, UserType } from './userTypes';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private client: HttpClient) {}

  private readonly BASE_URL = environment.BASE_URL;

  login(user: UserType): Observable<LoginResponseType> {
    return this.client.post<LoginResponseType>(`${this.BASE_URL}/login`, user);
  }
  update(user: UserType): Observable<LoginResponseType> {
    return this.client.put<LoginResponseType>(`${this.BASE_URL}/login`, user);
  }
}
