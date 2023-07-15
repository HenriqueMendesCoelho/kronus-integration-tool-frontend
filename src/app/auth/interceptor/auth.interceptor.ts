import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, map, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('auth-tk');

    const headers = new HttpHeaders().append(
      'Authorization',
      `Bearer ${token}` || ''
    );
    const _request = token ? request.clone({ headers }) : request;

    return next.handle(_request).pipe(
      map((event: any) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 403 && error.error.message !== 'Action Denied') {
            localStorage.clear();
            this.router.navigate(['']);
          }
        }
        return throwError(() => error);
      })
    );
  }
}
