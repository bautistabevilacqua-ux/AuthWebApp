import { AbstractControl, ValidationErrors } from '@angular/forms';

export function EmailValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (!value) return null;

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const valid = regex.test(value);

  return valid ? null : { invalidEmail: true };
}
