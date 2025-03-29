import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout/service/app.layout.service';
import { User } from '../models/user.model';


@Component({
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

    activeTabIndex = 0;
    userContext: User = {} as User;


    constructor(public layoutService: LayoutService) {
    }

    ngOnInit() {
        console.log("Admin Dashboard");
    }

    updateUserContext(user: User) {
        if (user) {
            this.userContext = user;
            console.log(this.userContext.userId, this.userContext.firstName);
            this.activeTabIndex = 3;
        }
    }

    handleChange(e: any) {
        console.log('Index is :', e.index);
        this.userContext = {} as User;
    }
}
