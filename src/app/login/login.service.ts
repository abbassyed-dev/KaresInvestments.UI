import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient, private cookieService: CookieService) { }

    login(request: any): Observable<any> {
        return this.http.post<any>(`${environment.apiBaseUrl}/api/auth/login`, {
            email: request.email,
            password: request.password
        });
    }

    // resetPassword(request: any): Observable<any> {
    //     return this.http.post<any>(`${environment.apiBaseUrl}/api/auth/reset-password`, request);
    // }
    resetPassword(email: string) {
        return this.http.post(`${environment.apiBaseUrl}/api/auth/reset-password`, JSON.stringify(email), {
            headers: { 'Content-Type': 'application/json' },
        });
    }

    refreshToken(): Observable<string> {
        const refreshToken = this.cookieService.get('RefreshToken');
        return this.http.post<{ token: string, refreshToken: string }>(`${environment.apiBaseUrl}/api/auth/refresh-token`, { refreshToken }).pipe(
            switchMap(response => {
                debugger;
                this.cookieService.set('Authorization', response.token);
                return of(response.refreshToken);
            }),
            catchError(error => {
                return throwError(() => error);
            })
        );
    }
}
