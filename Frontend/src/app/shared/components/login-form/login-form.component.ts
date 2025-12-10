import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'login-form',
  imports: [ReactiveFormsModule, FormInputComponent, RouterLink],
  styleUrl: './login-form.component.css',
  templateUrl: './login-form.component.html',
})
export default class LoginFormComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    console.log('VALORES:', this.form.value);
    console.log('VALIDO:', this.form.valid);
  }
}
