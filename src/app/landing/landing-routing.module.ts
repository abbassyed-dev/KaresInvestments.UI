import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: HomeComponent },
        { path: 'login', loadChildren: () => import('../login/login.module').then(m => m.LoginModule) },
        { path: 'register', loadChildren: () => import('../register/register.module').then(m => m.RegisterModule) },
    ])],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
