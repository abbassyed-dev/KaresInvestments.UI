import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { RouterModule } from '@angular/router';
import { AppTopBarComponent } from './app.topbar.component';
import { AppFooterComponent } from './app.footer.component';
import { AppConfigModule } from './config/config.module';
import { AppSidebarComponent } from "./app.sidebar.component";
import { AppLayoutComponent } from "./app.layout.component";
import { MessageService } from 'primeng/api';
import { PrimeNgModule } from '../shared/change-password/prime-ng.module';
import { ChangePasswordComponent } from '../shared/change-password/change-password.component';
import { UsersService } from '../admin/users/users.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UserProfileComponent } from '../shared/user-profile/user-profile.component';


@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
        AppLayoutComponent,
        ChangePasswordComponent,
        UserProfileComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule.withConfig({
            callSetDisabledState: 'always'
        }),
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule,
        AppConfigModule,
        PrimeNgModule,
        NgxSpinnerModule.forRoot({ type: 'timer' })
    ],
    providers: [MessageService, UsersService],
    exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
