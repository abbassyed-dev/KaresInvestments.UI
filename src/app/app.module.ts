import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { CookieService } from 'ngx-cookie-service'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './shared/interceptor/api-interceptor';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { Landing2Component } from './landing2/landing2.component';
import { Home2Component } from './landing2/home2/home2.component';
import { About2Component } from './landing2/about2/about2.component';
import { ContactComponent } from './landing2/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from './shared/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DistributionStatementComponent } from './shared/distribution-statement/distribution-statement.component';

@NgModule({
  declarations: [
    AppComponent,
    Landing2Component,
    Home2Component,
    About2Component,
    ContactComponent,
    ForgotPasswordComponent,
    DistributionStatementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    PrimeNgModule,
    SharedModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-center'
    }),
    NgxSpinnerModule.forRoot({ type: 'timer' })
  ],
  providers: [CookieService, DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
