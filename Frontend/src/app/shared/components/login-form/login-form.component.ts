import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormInputComponent } from '../form-input/form-input.component';
import { AuthService } from '../../../auth/services/auth.service';
import { EmailValidator } from '../../utilities/validators/email.validator';

@Component({
  selector: 'login-form',
  imports: [ReactiveFormsModule, FormInputComponent, RouterLink],
  styleUrl: './login-form.component.css',
  templateUrl: './login-form.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  form = this.fb.group({
    email: ['', [Validators.required, EmailValidator]],
    password: ['', Validators.required],
  });

  onSubmit() {
    const { email = '', password = '' } = this.form.value;

    this.authService.login(email!, password!).subscribe({
      next: () => {
        this.router.navigateByUrl('/dashboard');
      },
      error: (err) => {
        alert('Email o contraseña incorrectos');
      },
    });
  }
}
