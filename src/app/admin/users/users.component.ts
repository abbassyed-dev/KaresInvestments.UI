import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { UsersService } from "./users.service";
import { User } from "../../models/user.model";
import { AuthStateService } from "../../shared/services/auth-state.service";
import { ToastrService } from "ngx-toastr";
import { debounceTime, Subject, switchMap } from "rxjs";
import { ConfirmationService } from "primeng/api";


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

    lookupData: any;
    emailExists = false;
    private emailCheckSubject = new Subject<string>();

    @Output() userContextFromUserTab = new EventEmitter<User>();

    @Input() fetchAdmins = 'N';

    constructor(private dataService: UsersService, private toastr: ToastrService,
        private authStateService: AuthStateService, private confirmationService: ConfirmationService) {
        this.emailCheckSubject.pipe(
            debounceTime(500), // Waits 500ms after last input
            switchMap(email => this.dataService.checkEmailExists(email)) // Calls the API
        ).subscribe(exists => {
            this.emailExists = exists;
        });
    }
    ngOnInit(): void {
        this.getLovs();
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
            this.user.userName = this.user.email;
            this.user.zipCode = this.user.zipCode?.toString();
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

    viewTransactions(user: User) {
        this.userContextFromUserTab.emit(user);
    }

    deleteUser(user: User) {
        if (user.userId) {
            this.dataService.deleteUser(user.userId).subscribe((res: any) => {
                this.getAllUsers();
                this.toastr.success("User Details deleted Successfully");
            },
                (err) => {
                    console.error('Error Deleting User', err);
                });
        }
    }

    getLovs() {
        this.dataService.getLookup().subscribe((res: any) => {
            console.log(res);
            this.lookupData = res;
        });
    }

    onEmailChange(event: string) {
        this.emailCheckSubject.next(event); // Push new email for validation
    }

    showConfirmation(user: User) {
        this.confirmationService.confirm({
            message: "Are you sure you want to delete this User ?",
            header: 'Delete Confirmation',
            icon: 'pi pi-exclamation-triangle',
            acceptButtonStyleClass: "p-button-danger",
            rejectButtonStyleClass: "p-button-text p-button-text",
            accept: () => {
                this.deleteUser(user);
            }
        });
    }

}