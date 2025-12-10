import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'form-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-input.component.html',
})
export class FormInputComponent {
  @Input() form!: FormGroup;
  @Input() name!: string;
  @Input() label!: string;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';

  getErrorMessage() {
    const control = this.form.get(this.name);

    if (!control || !control.errors) return '';

    if (control.errors['required']) return 'This field is required.';
    if (control.errors['email']) return 'Enter a valid email.';
    if (control.errors['weakPassword'])
      return 'La contraseña debe contener al menos 8 caracteres, una mayúscula y un número.';

    return '';
  }
}
