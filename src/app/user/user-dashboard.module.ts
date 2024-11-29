import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-dashboard.component';

import { UserDashboardsRoutingModule } from './user-dashboard-routing.module';
import { PrimeNgModule } from '../shared/change-password/prime-ng.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PrimeNgModule,
        UserDashboardsRoutingModule
    ],
    declarations: [UserDashboardComponent]
})
export class UserDashboardModule { }
