import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeToolbarComponent } from './home-toolbar/home-toolbar.component';
import { DialogCreateApikeyComponent } from './home-toolbar/dialog-create-apikey/dialog-create-apikey.component';

import { PageTitleModule } from '../shared/page-title/page-title.module';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeToolbarComponent,
    DialogCreateApikeyComponent,
  ],
  imports: [
    PageTitleModule,
    //Angular Material
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingRoutingModule,
  ],
})
export class HomeModule {}
