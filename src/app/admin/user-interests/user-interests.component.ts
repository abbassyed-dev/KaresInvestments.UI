import { Component, OnInit } from "@angular/core";
import { UserInterestService } from "./user-interests.service";
import { UserInterest } from "../../models/user-interest.model";


@Component({
    selector: 'app-user-interests',
    templateUrl: './user-interests.component.html',
    styleUrls: ['./user-interests.component.scss']
})
export class UserInterestsComponent implements OnInit {

    userInterests: UserInterest[];

    clonedUserInterest: { [s: string]: UserInterest } = {};

    constructor(private dataService: UserInterestService) {

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
            // Save Logic
        }
    }

    onRowEditCancel(userInterest: UserInterest, index: number) {
        this.userInterests[index] = this.clonedUserInterest[userInterest.userRequestId as string];
        delete this.clonedUserInterest[userInterest.userRequestId as string];
    }


}