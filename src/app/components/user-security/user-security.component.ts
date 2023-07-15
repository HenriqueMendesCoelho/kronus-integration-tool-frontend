import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageTitleModule } from '../shared/page-title/page-title.module';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FormControl, Validators } from '@angular/forms';
import { matchValuesValidator } from 'src/app/validators/validators';

import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-user-security',
  templateUrl: './user-security.component.html',
  styleUrls: ['./user-security.component.scss'],
  imports: [
    CommonModule,
    PageTitleModule,
    //Angular Material
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  standalone: true,
})
export class UserSecurityComponent {
  constructor(
    private userService: UserServiceService,
    private snackBar: MatSnackBar
  ) {}

  updateUserGroup = new FormGroup({
    passwordFormControl: new FormControl('', [Validators.required]),
    newPasswordFormControl: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{20,70}$/
      ),
    ]),
    newPasswordConfirmFormControl: new FormControl('', [
      Validators.required,
      matchValuesValidator('newPasswordFormControl'),
    ]),
  });

  hasErrors(): boolean {
    let hasError = false;
    this.updateUserGroup.controls['passwordFormControl'].markAsTouched();
    this.updateUserGroup.controls['passwordFormControl'].hasError('required') ||
      hasError;

    this.updateUserGroup.controls['newPasswordFormControl'].markAsTouched();
    hasError =
      this.updateUserGroup.controls['newPasswordFormControl'].hasError(
        'required'
      ) || hasError;
    hasError =
      this.updateUserGroup.controls['newPasswordFormControl'].hasError(
        'pattern'
      ) || hasError;

    this.updateUserGroup.controls[
      'newPasswordConfirmFormControl'
    ].markAsTouched();
    hasError =
      this.updateUserGroup.controls['newPasswordConfirmFormControl'].hasError(
        'required'
      ) || hasError;
    hasError =
      this.updateUserGroup.controls['newPasswordFormControl'].hasError(
        'passwordsMatch'
      ) || hasError;
    return hasError;
  }

  update(): void {
    if (
      this.hasErrors() ||
      !this.updateUserGroup.controls['newPasswordFormControl'].value ||
      !this.updateUserGroup.controls['passwordFormControl'].value
    ) {
      return;
    }

    this.userService
      .update({
        password: this.updateUserGroup.controls['passwordFormControl'].value,
        new_password:
          this.updateUserGroup.controls['newPasswordFormControl'].value,
      })
      .subscribe({
        next: () => {
          this.snackSuccess('Usuário atualizado com sucesso');
          this.cleanForm();
        },
        error: () => {
          this.snackError('Ação não autorizada');
        },
      });
    return;
  }

  cleanForm() {
    this.updateUserGroup.patchValue({
      passwordFormControl: '',
      newPasswordFormControl: '',
      newPasswordConfirmFormControl: '',
    });
  }

  snackSuccess(msg: string) {
    this.snackBar.open(msg || 'Sucesso', '', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['snack-success'],
    });
  }
  snackError(msg: string) {
    this.snackBar.open(msg || 'Erro', '', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['snack-error'],
    });
  }
}
