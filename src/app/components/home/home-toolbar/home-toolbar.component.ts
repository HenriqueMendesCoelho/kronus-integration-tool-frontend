import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-toolbar',
  templateUrl: './home-toolbar.component.html',
  styleUrls: ['./home-toolbar.component.scss'],
})
export class HomeToolbarComponent {
  constructor(private _snackBar: MatSnackBar) {}
  createKey() {
    const snack = this._snackBar;
    snack.open('Nova API KEY gerada com sucesso', '', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['snack-success'],
    });
  }
}
