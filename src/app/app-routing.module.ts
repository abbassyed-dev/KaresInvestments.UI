import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth-guard';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: '', component: LandingComponent,
        children: [
          { path: 'home', component: HomeComponent },
          { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
          { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
          { path: 'aboutUs', component: AboutUsComponent },
        ]
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
    ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
