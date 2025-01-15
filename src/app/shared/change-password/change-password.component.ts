import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { AuthStateService } from '../services/auth-state.service';
import { UsersService } from '../../admin/users/users.service';
import { User } from '../../models/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { LoginResponseDto } from '../../models/login-response.model';

@Component({
    selector: 'app-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
    password = '';
    confirmPassword = '';
    passwordMismatch = false;

    @Output() closeChangePasswordDialog = new EventEmitter<boolean>();

    user: LoginResponseDto | undefined = this.authStateService.getUser();

    constructor(private authStateService: AuthStateService, private userService: UsersService,
        private toastr: ToastrService
    ) { }

    onSubmit() {
        if (this.password === this.confirmPassword) {


            const payload = {
                email: this.user?.email,
                password: this.password
            }
            this.userService.changePassword(payload).subscribe({
                next: (response) => {
                    console.log(response);
                    this.toastr.success(response.message);
                    this.closeChangePasswordDialog.emit(true);
                },
                error: (err: HttpErrorResponse) => {
                    // Handle login error
                    console.error('Password Change failed', err.error.errors["passwordChgError"][0]);
                    // Show an error message to the user
                    this.toastr.error(err.error.errors["passwordChgError"][0]);
                }
            });
        } else {
            this.passwordMismatch = true;
        }
    }

    checkPasswordMatch() {
        this.passwordMismatch = this.password !== this.confirmPassword;
    }
}
