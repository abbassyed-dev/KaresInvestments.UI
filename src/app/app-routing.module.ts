import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth-guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SampleComponent } from './sample-landing/sample.component';
import { Landing2Component } from './landing2/landing2.component';
import { Home2Component } from './landing2/home2/home2.component';
import { About2Component } from './landing2/about2/about2.component';
import { ContactComponent } from './landing2/contact/contact.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      // { path: '', redirectTo: 'kares', pathMatch: 'full' },
      { path: 'sample', component: SampleComponent },
      // {
      //   path: 'kares', component: LandingComponent,
      //   children: [
      //     { path: '', redirectTo: 'home', pathMatch: 'full' },
      //     { path: 'home', component: HomeComponent },
      //     { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
      //     { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
      //     { path: 'aboutUs', component: AboutUsComponent },
      //     { path: 'forgotpassword', component: ForgotPasswordComponent }

      //   ]
      // },
      {
        path: '',
        component: Landing2Component,
        children: [
          { path: '', component: Home2Component },
          { path: 'about', component: About2Component },
          { path: 'contact', component: ContactComponent },
          { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
          { path: 'forgotpassword', component: ForgotPasswordComponent }
        ],
      },
      {
        path: 'dashboard', component: AppLayoutComponent, canActivate: [authGuard],
        children: [
          { path: 'admin', loadChildren: () => import("./admin/admin-dashboard.module").then(m => m.AdminDashboardModule) },
          { path: 'user', loadChildren: () => import("./user/user-dashboard.module").then(m => m.UserDashboardModule) },
        ]
      },
      // { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
      // { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
    ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload', preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
