import { Routes } from '@angular/router';
import { NotAuthenticatedGuard } from './auth/guards/not-authenticated.guard';
import { AuthenticatedGuard } from './auth/guards/authenticated.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./Pages/auth-page/auth-page.component').then((m) => m.AuthPageComponent),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./shared/components/login-form/login-form.component').then(
            (m) => m.LoginFormComponent
          ),
        canMatch: [NotAuthenticatedGuard],
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./shared/components/register-form/register-form.component').then(
            (m) => m.RegisterFormComponent
          ),
        canMatch: [NotAuthenticatedGuard],
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./Pages/dashboard-page/dashboard-page.component').then(
        (m) => m.DashboardPageComponent
      ),
    canMatch: [AuthenticatedGuard],
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];
