import { ChangeDetectionStrategy, Component } from '@angular/core';
import LoginFormComponent from '../../app/shared/components/login-form/login-form.component';

@Component({
  selector: 'auth-page',
  imports: [LoginFormComponent],
  templateUrl: './auth-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AuthPageComponent {}
