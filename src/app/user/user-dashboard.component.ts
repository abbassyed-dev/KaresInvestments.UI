import { Component, OnInit } from '@angular/core';
import { UserTransaction } from '../models/user-transaction.model';
import { AuthStateService } from '../shared/services/auth-state.service';
import { ToastrService } from 'ngx-toastr';
import { UserDashboardService } from './user-dashboard.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent implements OnInit {

  userTransactions: UserTransaction[];
  userName = '';
  userId: string | undefined = '';

  constructor(private authStateService: AuthStateService, private toastr: ToastrService,
    private dataService: UserDashboardService) {

  }

  ngOnInit() {
    this.userName = `${this.authStateService.getLoggedInUserProperty('lastName')} ${this.authStateService.getLoggedInUserProperty('firstName')}`;
    this.userId = this.authStateService.getLoggedInUserProperty('userId');
    if (this.userId) {
      this.dataService.getUserTransactions(this.userId).subscribe((res: any) => {
        this.userTransactions = res;
      });
    }

  }

}
