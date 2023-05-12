import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeTitleComponent } from './home-title/home-title.component';
import { HomeToolbarComponent } from './home-toolbar/home-toolbar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { HomeRoutingRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [HomeComponent, HomeTitleComponent, HomeToolbarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    HomeRoutingRoutingModule,
  ],
})
export class HomeModule {}
