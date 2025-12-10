import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormInputComponent } from '../form-input/form-input.component';
import { passwordMatchValidator } from '../../utilities/validators/password-match.validator';
import { passwordStrengthValidator } from '../../utilities/validators/password-strenght.validator';

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
