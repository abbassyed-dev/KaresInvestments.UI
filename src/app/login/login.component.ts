import { Component } from '@angular/core';
import { LayoutService } from '../layout/service/app.layout.service';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthStateService } from '../shared/services/auth-state.service';

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
    `]
})
export class LoginComponent {

    email: string = ''
    password: string = ''
    isSubmitting: boolean = false
    validationErrors: Array<any> = [];

    constructor(public layoutService: LayoutService, public loginService: LoginService,
        private cookieService: CookieService, private router: Router,
        private toastr: ToastrService, private authStateService: AuthStateService
    ) { }

    login() {
        let payload = {
            email: this.email,
            password: this.password,
        }
        this.loginService.login(payload)
            .subscribe({
                next: (response) => {
                    // Set Auth Cookie
                    this.cookieService.set('Authorization', `Bearer ${response.token}`,
                        undefined, '/', undefined, true, 'Strict');
                    console.log(response);
                    this.authStateService.setUser(response);
                    if (response.isAdmin) {
                        this.router.navigate(['/dashboard/admin']);
                    } else {
                        this.router.navigate(['/dashboard/user']);
                    }
                },
                error: (err: HttpErrorResponse) => {
                    // Handle login error
                    console.error('Login failed', err.error.errors["authError"][0]);
                    // Show an error message to the user
                    this.toastr.error(err.error.errors["authError"][0]);
                }
            });
    }
}
