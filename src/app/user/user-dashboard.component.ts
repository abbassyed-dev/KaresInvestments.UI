import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../api/product';
import { debounceTime, Subscription } from 'rxjs';
import { ProductService } from '../service/product.service';
import { LayoutService } from '../layout/service/app.layout.service';
import { UserTransaction } from '../models/user-transaction.model';
import { AuthStateService } from '../shared/services/auth-state.service';
import { ToastrService } from 'ngx-toastr';
import { UserDashboardService } from './user-dashboard.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {

  userTransactions: UserTransaction[];
  userName: string = '';
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
