import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutWithNavbarComponent } from './layout/layout-with-navbar/layout-with-navbar.component';
import { LayoutWithoutNavbarComponent } from './layout/layout-without-navbar/layout-without-navbar.component';

import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutWithoutNavbarComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
    ],
  },
  {
    path: '',
    component: LayoutWithNavbarComponent,
    canMatch: [authGuard],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./components/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'security',
        loadComponent: () =>
          import('./components/user-security/user-security.component').then(
            (c) => c.UserSecurityComponent
          ),
      },
    ],
  },
  {
    path: '**',
    loadChildren: () =>
      import('./components/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
