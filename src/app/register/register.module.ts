import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { RegisterService } from './register.service';
import { ToastModule } from 'primeng/toast';
import { PrimeNgModule } from '../shared/change-password/prime-ng.module';

@NgModule({
    imports: [
        CommonModule,
        RegisterRoutingModule,
        FormsModule,
        PrimeNgModule
    ],
    declarations: [RegisterComponent],
    providers: [RegisterService]
})
export class RegisterModule { }
