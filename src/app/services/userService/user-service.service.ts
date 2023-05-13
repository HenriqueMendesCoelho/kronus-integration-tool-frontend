import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserType } from './userTypes';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private readonly BASE_URL = environment.BASE_URL;

  constructor(private client: HttpClient) {}

  update(user: UserType): Observable<UserType> {
    return this.client.put<UserType>(`${this.BASE_URL}/login`, user);
  }
}
