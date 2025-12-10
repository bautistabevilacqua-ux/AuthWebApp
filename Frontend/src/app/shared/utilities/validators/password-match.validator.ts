import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirm = group.get('confirm')?.value;

  if (password !== confirm) {
    return { passwordsNotMatching: true };
  }

  return null;
}
