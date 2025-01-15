import { Component, Input, OnInit } from "@angular/core";
import { UsersService } from "./users.service";
import { User } from "../../models/user.model";
import { AuthStateService } from "../../shared/services/auth-state.service";
import { ToastrService } from "ngx-toastr";


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    users: User[];
    user: User = {} as User;
    userDialog = false;
    submitted = false;
    userNameDisabled = false;

    @Input() fetchAdmins = 'N';

    constructor(private dataService: UsersService, private toastr: ToastrService,
        private authStateService: AuthStateService) { }
    ngOnInit(): void {
        this.getAllUsers();
    }

    getAllUsers() {
        this.dataService.getAllUsers(this.fetchAdmins).subscribe((res: any) => {
            console.log(res);
            this.users = res;
        });
    }

    addUser() {
        this.user = {} as User;
        this.submitted = false;
        this.userDialog = true;
    }

    hideDialog() {
        this.userDialog = false;
        this.submitted = false;
    }

    editUser(user: User) {
        this.user = { ...user };
        this.user.dateOfBirth = new Date(user.dateOfBirth);
        this.userDialog = true;
    }

    saveUser(form: any) {
        if (this.user.userId) {
            console.log("********Updating User***********", this.user);
            this.user.isAdmin = this.fetchAdmins === "Y";
            this.user.userName = this.user.email;
            this.user.zipCode = this.user.zipCode.toString();
            this.user.createdBy = this.authStateService.getLoggedInUserEmailId() || "Admin";
            this.dataService.updateUser(this.user.userId, this.user).subscribe((res: any) => {
                this.getAllUsers();
                this.toastr.success("User Details Updated Successfully");
            })
        } else {
            this.user.isAdmin = this.fetchAdmins === "Y";
            this.user.userName = this.user.email.split("@")[0];
            this.user.zipCode = this.user.zipCode.toString();
            this.user.createdBy = this.authStateService.getLoggedInUserEmailId() || "Admin";
            console.log("********Inserting User***********", this.user);
            this.dataService.saveUser(this.user).subscribe((res: any) => {
                this.getAllUsers();
                this.toastr.success("User Details Added Successfully");
            })
        }
        this.userDialog = false;
        this.user = {} as User;
    }

}