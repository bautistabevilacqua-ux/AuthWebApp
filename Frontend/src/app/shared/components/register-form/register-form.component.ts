import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormInputComponent } from '../form-input/form-input.component';
import { passwordMatchValidator } from '../../utilities/validators/password-match.validator';
import { passwordStrengthValidator } from '../../utilities/validators/password-strenght.validator';
import { EmailValidator } from '../../utilities/validators/email.validator';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'register-form',
  imports: [ReactiveFormsModule, FormInputComponent, RouterLink],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  registerForm = this.fb.group(
    {
      email: ['', [Validators.required, EmailValidator]],
      password: ['', [Validators.required, passwordStrengthValidator]],
      confirm: ['', Validators.required],
    },
    { validators: passwordMatchValidator }
  );

  onSubmit() {
    const { email = '', password = '', confirm = '' } = this.registerForm.value;

    this.authService.register(email!, password!, confirm!).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.log(err);
        alert(err.error?.message || 'Error al registrar');
      },
    });
  }
}
