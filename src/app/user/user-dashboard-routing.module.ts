import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard.component';
import { DistributionStatementComponent } from '../shared/distribution-statement/distribution-statement.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: UserDashboardComponent },
        { path: 'statement', component: DistributionStatementComponent}
    ])],
    exports: [RouterModule]
})
export class UserDashboardsRoutingModule { }
