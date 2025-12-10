import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'register-form',
  imports: [ReactiveFormsModule, FormInputComponent, RouterLink],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export default class RegisterFormComponent {
  registerForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, passwordStrengthValidator]),
      confirm: new FormControl('', Validators.required),
    },
    { validators: passwordMatchValidator }
  );

  onSubmit() {
    console.log('VALORES:', this.registerForm.value);
    console.log('VALIDO:', this.registerForm.valid);
  }
}

function passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (!value) return null;

  const hasUpperCase = /[A-Z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasMinLength = value.length >= 8;

  const valid = hasUpperCase && hasNumber && hasMinLength;

  return valid ? null : { weakPassword: true };
}

function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirm = group.get('confirm')?.value;

  if (password !== confirm) {
    return { passwordsNotMatching: true };
  }

  return null;
}
