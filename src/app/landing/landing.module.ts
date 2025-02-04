import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from '../shared/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        PrimeNgModule,
        FormsModule
    ],
    declarations: [
        LandingComponent,
        HomeComponent,
        ForgotPasswordComponent
    ]
})
export class LandingModule { }
