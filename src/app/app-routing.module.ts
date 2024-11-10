import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
      {
        path: 'dashboard', component: AppLayoutComponent,
        children: [
          { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
        ]
      },
      { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
      { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
    ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
