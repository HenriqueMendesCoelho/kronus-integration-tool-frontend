import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { TokenService } from 'src/app/services/tokenService/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (new TokenService().isLoged()) {
      this.router.navigate(['/home']);
    }
  }

  username: string = '';
  userFormControl = new FormControl('', [Validators.required]);
  password: string = '';
  passwordFormControl = new FormControl('', [Validators.required]);
  hidePassword: boolean = true;

  login() {
    if (this.hasErrors()) {
      return;
    }

    this.authService
      .login({
        username: this.username,
        password: this.password,
      })
      .subscribe({
        next: (res) => {
          localStorage.setItem('auth-tk', res.access_token);
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
