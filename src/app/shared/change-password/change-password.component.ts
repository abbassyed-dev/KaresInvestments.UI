import { Component, EventEmitter, Output } from '@angular/core';
import { AuthStateService } from '../services/auth-state.service';
import { UsersService } from '../../admin/users/users.service';
import { User } from '../../models/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
    password: string = '';
    confirmPassword: string = '';
    passwordMismatch: boolean = false;

    @Output() closeChangePasswordDialog = new EventEmitter<boolean>();

    user: User | undefined = this.authStateService.getUser();

    constructor(private authStateService: AuthStateService, private userService: UsersService,
        private toastr: ToastrService
    ) { }

    ngOnInit() {

    }

    onSubmit(form: any) {
        if (this.password === this.confirmPassword) {
            console.log('Form Submitted:', form.value);

            let payload = {
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
