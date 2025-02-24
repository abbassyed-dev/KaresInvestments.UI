import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { ProductService } from './service/product.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { LandingModule } from './landing/landing.module';
import { CookieService } from 'ngx-cookie-service'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './shared/interceptor/api-interceptor';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { SampleComponent } from './sample-landing/sample.component';
import { Landing2Component } from './landing2/landing2.component';
import { Home2Component } from './landing2/home2/home2.component';
import { About2Component } from './landing2/about2/about2.component';
import { ContactComponent } from './landing2/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from './shared/prime-ng.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    SampleComponent,
    Landing2Component,
    Home2Component,
    About2Component,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    LandingModule,
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
  providers: [ProductService, CookieService, DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
