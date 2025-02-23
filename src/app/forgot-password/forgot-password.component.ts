import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../login/login.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

    email = '';

    constructor(public loginService: LoginService, private router: Router, private toastr: ToastrService
    ) { }

    resetPassword() {
        if (this.email) {
            this.loginService.resetPassword(this.email)
                .subscribe({
                    next: (response: any) => {
                        console.log(response);
                        this.toastr.success("Please check your email", "Password Reset Success");
                        this.router.navigate(['/login']);
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
}
