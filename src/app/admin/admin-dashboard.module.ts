import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard.component';

import { AdminDashboardsRoutingModule } from './admin-dashboard-routing.module';
import { PrimeNgModule } from '../shared/change-password/prime-ng.module';
import { AdminDashboardService } from './admin-dashboard.service';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PrimeNgModule,
        AdminDashboardsRoutingModule
    ],
    declarations: [AdminDashboardComponent, UsersComponent],
    providers: [AdminDashboardService, UsersService]
})
export class AdminDashboardModule { }
