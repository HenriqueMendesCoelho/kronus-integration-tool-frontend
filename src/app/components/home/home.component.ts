import { Component } from '@angular/core';

export interface ApiKeys {
  name: string;
  key: string;
  action?: any;
}

const TABLE_DATA: ApiKeys[] = [
  { name: 'Cineminha', key: 'sdfpihgsdoihgipsodhgiposdhipgdspgidspihg' },
  { name: 'Cineminha', key: 'sdfpihgsdoihgipsodhgiposdhipgdspgidspihg' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  displayedColumns: string[] = ['name', 'key', 'action'];
  dataSource = TABLE_DATA;
}
