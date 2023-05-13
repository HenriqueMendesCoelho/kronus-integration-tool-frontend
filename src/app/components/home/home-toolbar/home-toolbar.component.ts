import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateApikeyComponent } from './dialog-create-apikey/dialog-create-apikey.component';

@Component({
  selector: 'app-home-toolbar',
  templateUrl: './home-toolbar.component.html',
  styleUrls: ['./home-toolbar.component.scss'],
})
export class HomeToolbarComponent {
  constructor(private dialog: MatDialog) {}

  @Output()
  refresh = new EventEmitter();

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCreateApikeyComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.refresh.emit();
      }
    });
  }
}
