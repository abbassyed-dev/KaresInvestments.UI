import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard.component';

import { AdminDashboardsRoutingModule } from './admin-dashboard-routing.module';
import { PrimeNgModule } from '../shared/prime-ng.module';
import { AdminDashboardService } from './admin-dashboard.service';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';
import { UserInterestsComponent } from './user-interests/user-interests.component';
import { UserInterestService } from './user-interests/user-interests.service';
import { UserDropdownComponent } from '../shared/user-dropdown/user-dropdown.component';
import { UserPortfolioService } from './user-portfolios/user-portfolios.service';
import { UserPortfoliosComponent } from './user-portfolios/user-portfolios.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserTransactionsService } from './user-transactions/user-transactions.service';
import { UserTransactionsComponent } from './user-transactions/user-transactions.component';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PrimeNgModule,
        AdminDashboardsRoutingModule,
        NgxPrintModule
    ],
    declarations: [
        AdminDashboardComponent,
        UsersComponent,
        UserInterestsComponent,
        UserDropdownComponent,
        UserPortfoliosComponent,
        AdminHomeComponent,
        UserTransactionsComponent
    ],
    providers: [
        AdminDashboardService,
        UsersService,
        UserInterestService,
        UserPortfolioService,
        DatePipe,
        UserTransactionsService
    ]
})
export class AdminDashboardModule { }
