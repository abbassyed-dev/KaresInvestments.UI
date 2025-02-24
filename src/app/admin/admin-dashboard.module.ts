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
import { AdminHomeService } from './admin-home/admin-home.service';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ConfigurationService } from './configuration/configuration.service';
import { PhoneFormatPipe } from '../shared/phone-format.pipe';
import { SharedModule } from '../shared/shared.module';

// Apply a custom theme globally using `Highcharts.setOptions()`
Highcharts.setOptions({
    chart: {
        backgroundColor: '#2a323d', // Dark background color
    },
    title: {
        style: {
            color: '#ffffff' // White color for title
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark tooltip background
        style: {
            color: '#fff' // Tooltip text color in white
        }
    },
    xAxis: {
        gridLineColor: '#555', // Darker grid lines
        labels: {
            style: {
                color: '#aaa' // Lighter color for axis labels
            }
        }
    },
    yAxis: {
        gridLineColor: '#555', // Darker grid lines
        labels: {
            style: {
                color: '#aaa' // Lighter color for axis labels
            }
        }
    },
    legend: {
        itemStyle: {
            color: '#ffffff' // White color for legend items
        }
    }
});

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PrimeNgModule,
        AdminDashboardsRoutingModule,
        HighchartsChartModule,
        SharedModule
    ],
    declarations: [
        AdminDashboardComponent,
        UsersComponent,
        UserInterestsComponent,
        UserDropdownComponent,
        UserPortfoliosComponent,
        AdminHomeComponent,
        UserTransactionsComponent,
        ConfigurationComponent,
        // PhoneFormatPipe
    ],
    providers: [
        AdminDashboardService,
        UsersService,
        UserInterestService,
        UserPortfolioService,
        DatePipe,
        UserTransactionsService,
        AdminDashboardService,
        AdminHomeService,
        ConfigurationService
    ]
})
export class AdminDashboardModule { }
