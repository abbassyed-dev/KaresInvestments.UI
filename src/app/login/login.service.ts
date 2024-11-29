import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.model';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';
import { AuthStateService } from '../shared/services/auth-state.service';

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
