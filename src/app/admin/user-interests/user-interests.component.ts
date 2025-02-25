import { Component, OnInit } from "@angular/core";
import { UserInterestService } from "./user-interests.service";
import { UserInterest } from "../../models/user-interest.model";
import { ToastrService } from "ngx-toastr";
import { User } from "../../models/user.model";
import { AuthStateService } from "../../shared/services/auth-state.service";
import { ConfirmationService } from "primeng/api";

@Component({
    selector: 'app-user-interests',
    templateUrl: './user-interests.component.html',
    styleUrls: ['./user-interests.component.scss']
})
export class UserInterestsComponent implements OnInit {

    userInterests: UserInterest[];

    clonedUserInterest: Record<string, UserInterest> = {};

    savingUserInterest: UserInterest = {} as UserInterest;

    newUser: User = {} as User;

    userDialog = false;

    constructor(private dataService: UserInterestService, private toastr: ToastrService,
        private authStateService: AuthStateService, private confirmationService: ConfirmationService
    ) {

    }
    ngOnInit(): void {
        this.getAllUserInterests();
    }

    getAllUserInterests() {
        this.dataService.getAllUserInterests().subscribe((res: any) => {
            console.log(res);
            this.userInterests = res;
        });
    }

    onRowEditInit(userInterest: UserInterest) {
        this.clonedUserInterest[userInterest.userRequestId as string] = { ...userInterest };
    }

    onRowEditSave(userInterest: UserInterest) {
        if (userInterest.action) {
            delete this.clonedUserInterest[userInterest.userRequestId as string];
            console.log(userInterest);
            this.dataService.updateUserInterest(userInterest.userRequestId!, userInterest).subscribe((res) => {
                console.log(res);
                this.toastr.success("User Interest updated.")
            });
        }
    }

    onRowEditCancel(userInterest: UserInterest, index: number) {
        this.userInterests[index] = this.clonedUserInterest[userInterest.userRequestId as string];
        delete this.clonedUserInterest[userInterest.userRequestId as string];
    }

    deleteUserInterest(userInterest: UserInterest) {
        if (userInterest.userRequestId) {
            this.dataService.deleteUserInterest(userInterest.userRequestId).subscribe((res: any) => {
                console.log(res);
                this.toastr.success("User Interest deleted.")
                this.getAllUserInterests();
                this.savingUserInterest = {} as UserInterest;
            });
        }
    }

    addNewUser(userInterest: UserInterest) {
        if (userInterest) {
            this.savingUserInterest = userInterest;
            this.newUser.firstName = userInterest.firstName;
            this.newUser.lastName = userInterest.lastName;
            this.newUser.email = userInterest.email;
            this.newUser.phoneNo = userInterest.mobileNum;
            this.userDialog = true;
        }
    }

    saveUser(form: any) {
        this.newUser.isAdmin = false;
        this.newUser.userName = this.newUser.email;
        this.newUser.zipCode = this.newUser.zipCode.toString();
        this.newUser.createdBy = this.authStateService.getLoggedInUserEmailId() || "Admin";
        console.log("********Inserting User***********", this.newUser);
        this.dataService.saveUser(this.newUser).subscribe((res: any) => {
            this.toastr.success("User Details Added Successfully");
            this.userDialog = false;
            this.deleteUserInterest(this.savingUserInterest);
        })
    }

    closeNewUserDialog() {
        this.userDialog = false;
    }

    showConfirmation(userInterest: UserInterest) {
        this.confirmationService.confirm({
            message: "Are you sure you want to delete this Transaction ?",
            header: 'Delete Confirmation',
            icon: 'pi pi-exclamation-triangle',
            acceptButtonStyleClass: "p-button-danger",
            rejectButtonStyleClass: "p-button-text p-button-text",
            accept: () => {
                this.deleteUserInterest(userInterest);
            }
        });
    }
}