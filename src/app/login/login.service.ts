import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }

    login(request: any): Observable<any> {
        return this.http.post<any>(`${environment.apiBaseUrl}/api/auth/login`, {
            email: request.email,
            password: request.password
        });
    }
}
