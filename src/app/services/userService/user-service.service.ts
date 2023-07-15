import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserUpdateType } from './userTypes';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private readonly BASE_URL = environment.BASE_URL;

  constructor(private client: HttpClient) {}

  update(user: UserUpdateType): Observable<UserUpdateType> {
    return this.client.patch<UserUpdateType>(
      `${this.BASE_URL}/api/v1/user`,
      user
    );
  }
}
