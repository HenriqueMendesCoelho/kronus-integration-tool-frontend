import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { LayoutWithNavbarComponent } from './layout/layout-with-navbar/layout-with-navbar.component';
import { LayoutWithoutNavbarComponent } from './layout/layout-without-navbar/layout-without-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HomeToolbarComponent } from './components/home/home-toolbar/home-toolbar.component';
import { HomeTitleComponent } from './components/home/home-title/home-title.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DialogCreateApikeyComponent } from './components/home/home-toolbar/dialog-create-apikey/dialog-create-apikey.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutWithNavbarComponent,
    LayoutWithoutNavbarComponent,
    HomeComponent,
    LoginComponent,
    HomeToolbarComponent,
    HomeTitleComponent,
    NotFoundComponent,
    NavbarComponent,
    DialogCreateApikeyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
