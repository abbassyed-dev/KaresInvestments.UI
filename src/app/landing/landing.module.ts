import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from '../shared/change-password/prime-ng.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        PrimeNgModule
    ],
    declarations: [LandingComponent,
        HomeComponent]
})
export class LandingModule { }
