import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private router: Router,
    private userService: UserServiceService,
    private snackBar: MatSnackBar
  ) {}

  username: string = '';
  userFormControl = new FormControl('', [Validators.required]);
  password: string = '';
  passwordFormControl = new FormControl('', [Validators.required]);
  hidePassword: boolean = true;

  login() {
    if (this.hasErrors()) {
      return;
    }

    this.userService
      .login({
        username: this.username,
        password: this.password,
      })
      .subscribe({
        next: (res) => {
          localStorage.setItem('auth-tk', res.access_token);
          localStorage.setItem('expires', res.expires?.toString() || '');
          this.router.navigate(['/home']);
        },
        error: () => {
          this.snackBar.open(
            'Erro ao realizar login, tente novamente mais tarde',
            '',
            {
              duration: 3000,
              verticalPosition: 'top',
              panelClass: ['snack-error'],
            }
          );
        },
      });
  }
  hasErrors(): boolean {
    let hasError = false;
    this.userFormControl.markAsTouched();
    hasError = this.userFormControl.hasError('required');
    this.passwordFormControl.markAsTouched();
    hasError = this.passwordFormControl.hasError('required');
    return hasError;
  }
}
