import { Routes } from '@angular/router';
import AuthPageComponent from '../Pages/auth/auth-page.component';

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
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
  // {
  //   path: 'register',
  //   component: RegisterFormComponent,
  // },
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
