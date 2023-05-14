import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiKeyServiceService } from 'src/app/services/apiKeyService/api-key-service.service';

export interface ApiKeys {
  name: string;
  key: string;
  action?: any;
}

const TABLE_DATA: ApiKeys[] = [];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private apiKeyService: ApiKeyServiceService,
    private snackBar: MatSnackBar
  ) {}

  displayedColumns: string[] = ['name', 'key', 'action'];
  dataSource = TABLE_DATA;

  ngOnInit(): void {
    this.apiKeyService.list().subscribe({
      next: (res) => {
        this.dataSource = res.map((e) => {
          return { name: e.name, key: e.key || '', hide: true };
        });
      },
      error: () => {
        this.snackError('Erro ao listar apikeys');
      },
    });
  }
  refresh() {
    this.apiKeyService.list().subscribe({
      next: (res) => {
        this.dataSource = res.map((e) => {
          return { name: e.name, key: e.key || '', hide: true };
        });
        this.snackSuccess('Tabela atualizada com sucesso.');
      },
      error: () => {
        this.snackError('Erro ao listar apikeys');
      },
    });
  }
  deleteApikey(name: string) {
    this.apiKeyService.delete(name).subscribe({
      next: () => {
        this.snackSuccess('Deletado com sucesso');
        this.refresh();
      },
    });
  }
  actionCopyKey(key: string) {
    if (!key) {
      return;
    }

    navigator.clipboard.writeText(key);
    this.snackSuccess('Copiado para área de transferencia');
  }
  hideKey(row: { key: string; hide: boolean }) {
    if (row.hide) {
      return this.isDesktop()
        ? row.key.replace(/./g, '•') + '•'.repeat(70)
        : row.key.replace(/./g, '•');
    }
    return row.key;
  }
  isDesktop() {
    return window.innerWidth >= 992;
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
