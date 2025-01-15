import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-dashboard.component';

import { UserDashboardsRoutingModule } from './user-dashboard-routing.module';
import { PrimeNgModule } from '../shared/prime-ng.module';
import { UserDashboardService } from './user-dashboard.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PrimeNgModule,
        UserDashboardsRoutingModule
    ],
    declarations: [UserDashboardComponent],
    providers: [UserDashboardService, DatePipe,]
})
export class UserDashboardModule { }
