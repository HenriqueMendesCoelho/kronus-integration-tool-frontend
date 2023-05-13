import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiKeyServiceService } from 'src/app/services/apiKeyService/api-key-service.service';

@Component({
  selector: 'app-dialog-create-apikey',
  templateUrl: './dialog-create-apikey.component.html',
  styleUrls: ['./dialog-create-apikey.component.scss'],
})
export class DialogCreateApikeyComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogCreateApikeyComponent>,
    private apiKeyService: ApiKeyServiceService,
    private snackBar: MatSnackBar
  ) {}

  name = '';
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.min(3),
    Validators.max(30),
  ]);

  create() {
    if (this.hasErrors()) {
      return;
    }
    this.createKey();
    this.dialogRef.close(true);
  }
  onCancel() {
    this.dialogRef.close();
  }
  createKey() {
    this.apiKeyService.create({ name: this.name }).subscribe({
      next: () => {
        this.snackBar.open('Criada com sucesso', '', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['snack-success'],
        });
      },
      error: () => {
        this.snackBar.open('Erro ao criar apiKey', '', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['snack-error'],
        });
      },
    });
  }
  hasErrors() {
    let hasError = false;
    this.nameFormControl.markAsTouched();
    hasError = this.nameFormControl.hasError('required') || hasError;
    hasError = this.nameFormControl.hasError('min') || hasError;
    hasError = this.nameFormControl.hasError('max') || hasError;
    return hasError;
  }
}
