import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiKeyType, CreateApiKeyType } from './apiKeyTypes';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root',
})
export class ApiKeyServiceService {
  constructor(private client: HttpClient) {}

  private readonly BASE_URL = `${environment.BASE_URL}/api/v1/key`;

  list(): Observable<ApiKeyType[]> {
    return this.client.get<ApiKeyType[]>(this.BASE_URL);
  }
  create(request: CreateApiKeyType): Observable<ApiKeyType> {
    return this.client.post<ApiKeyType>(this.BASE_URL, request);
  }
  delete(name: string): Observable<ApiKeyType> {
    return this.client.delete<ApiKeyType>(`${this.BASE_URL}/${name}/delete`);
  }
}
