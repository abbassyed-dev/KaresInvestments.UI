import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../shared/prime-ng.module';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        PrimeNgModule
    ],
    declarations: [LoginComponent],
    providers: []
})
export class LoginModule { }
