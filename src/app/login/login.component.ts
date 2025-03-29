import { Component } from '@angular/core';
import { LayoutService } from '../layout/service/app.layout.service';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthStateService } from '../shared/services/auth-state.service';
import { LoginResponseDto } from '../models/login-response.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }

        .bg-gradient-rounded {
  border-radius: 56px;
  background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%);
}

.card-container {
  border-radius: 53px;
  background: var(--surface-card);
}

    `]
})
export class LoginComponent {

    email = '';
    password = '';

    constructor(public layoutService: LayoutService, public loginService: LoginService,
        private cookieService: CookieService, private router: Router,
        private toastr: ToastrService, private authStateService: AuthStateService
    ) { }

    login() {
        const payload = {
            email: this.email,
            password: this.password,
        }
        this.loginService.login(payload)
            .subscribe({
                next: (response: LoginResponseDto) => {
                    // Set Auth Cookie
                    this.cookieService.set('Authorization', `Bearer ${response.token}`,
                        undefined, '/', undefined, true, 'Strict');
                    this.cookieService.set('RefreshToken', response.refreshToken);
                    console.log(response);
                    // Store Refresh Token in Local Storage
                    // localStorage.setItem('refreshToken', response.refreshToken);
                    this.authStateService.setUser(response);
                    if (response.isAdmin) {
                        this.router.navigate(['/dashboard/admin']);
                    } else {
                        this.router.navigate(['/dashboard/user']);
                    }
                },
                error: (err: HttpErrorResponse) => {
                    if (err?.message) {
                        this.toastr.error(err.message);
                    } else {
                        this.toastr.error('An unexpected error occurred.', 'Error');
                    }
                }
            });
    }
}
