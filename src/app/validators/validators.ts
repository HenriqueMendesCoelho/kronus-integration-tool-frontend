import {
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  FormGroup,
} from '@angular/forms';

export function matchValuesValidator(matchingControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    const formGroup = control.parent as FormGroup;
    const confirmPasswordControl = formGroup?.controls[matchingControlName];

    if (value !== confirmPasswordControl?.value) {
      return { passwordsMatch: true };
    }

    return null;
  };
}
