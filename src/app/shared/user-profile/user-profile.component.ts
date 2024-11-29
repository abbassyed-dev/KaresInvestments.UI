import { Component, EventEmitter, Output } from '@angular/core';
import { AuthStateService } from '../services/auth-state.service';
import { UsersService } from '../../admin/users/users.service';
import { User } from '../../models/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

    @Output() closeUserProfileDialog = new EventEmitter<boolean>();

    userFromState: User | undefined = this.authStateService.getUser();

    userProfile: User;

    constructor(private authStateService: AuthStateService, private userService: UsersService,
        private toastr: ToastrService
    ) { }

    ngOnInit() {
        this.userService.getUserById(this.userFromState?.userId!).subscribe({
            next: (response: any) => {
                this.userProfile = response;
                this.userProfile.dateOfBirth = new Date(response.dateOfBirth);
            }
        });
    }

    // onSubmit(form: any) {
    //     if (this.password === this.confirmPassword) {
    //         console.log('Form Submitted:', form.value);

    //         let payload = {
    //             email: this.user?.email,
    //             password: this.password
    //         }
    //         this.userService.changePassword(payload).subscribe({
    //             next: (response) => {
    //                 console.log(response);
    //                 this.toastr.success(response.message);
    //                 this.showChangePasswordDialog.emit(false);
    //             },
    //             error: (err: HttpErrorResponse) => {
    //                 // Handle login error
    //                 console.error('Password Change failed', err.error.errors["passwordChgError"][0]);
    //                 // Show an error message to the user
    //                 this.toastr.error(err.error.errors["passwordChgError"][0]);
    //             }
    //         });
    //     } else {
    //         this.passwordMismatch = true;
    //     }
    // }

    updateDetails(form: any) {
        if (this.userFromState?.userId) {
            console.log("********Updating User***********", this.userProfile);
            this.userProfile.zipCode = this.userProfile.zipCode.toString();
            this.userProfile.createdBy = this.authStateService.getLoggedInUserEmailId() || "Admin";
            this.userProfile.isAdmin = this.userFromState.isAdmin;
            this.userProfile.remarks = this.userProfile.createdBy + " updated his profile."
            this.userService.updateUser(this.userFromState.userId, this.userProfile).subscribe({
                next: (response) => {
                    console.log(response);
                    this.toastr.success("Profile Updated");
                    this.closeUserProfileDialog.emit(true);
                },
                error: (err: HttpErrorResponse) => {
                    if (err.error.status == 404) {
                        this.toastr.error("User not found. Please try after logout");
                    } else {
                        this.toastr.error("Something wrong. Please try again.");
                    }
                }
            });
        }
    }

    closeProfileDialog() {
        this.closeUserProfileDialog.emit(true);
    }
}
