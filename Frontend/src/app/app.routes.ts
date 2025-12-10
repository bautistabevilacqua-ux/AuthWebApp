import { Routes } from '@angular/router';
import AuthPageComponent from './Pages/auth/auth-page.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthPageComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./shared/components/login-form/login-form.component'),
      },
      {
        path: 'register',
        loadComponent: () => import('./shared/components/register-form/register-form.component'),
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];
