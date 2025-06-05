import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AuthModule } from './auth/auth.module';

import { LayoutWithNavbarComponent } from './layout/layout-with-navbar/layout-with-navbar.component';
import { LayoutWithoutNavbarComponent } from './layout/layout-without-navbar/layout-without-navbar.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './layout/layout-with-navbar/navbar/navbar.component';
import { ContainerStandardComponent } from './components/shared/container-standard/container-standard.component';

@NgModule({ declarations: [
        AppComponent,
        LayoutWithNavbarComponent,
        LayoutWithoutNavbarComponent,
        LoginComponent,
        NavbarComponent,
        ContainerStandardComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSnackBarModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatTooltipModule,
        AuthModule,
        AppRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
