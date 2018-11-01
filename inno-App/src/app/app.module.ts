import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddingComponent } from './adding/adding.component';
import {MatIconModule } from '@angular/material';
import { AdminComponent } from './admin/admin.component';
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
=======
import {NavbarModule} from './navbar/navbar.module';
>>>>>>> c187f5cfdfb6b22d5f425583811963a3e8870e92


@NgModule({
  exports: [ MatIconModule],
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    PostComponent,
    AddingComponent,
    AdminComponent,
    HeaderComponent,
  ],
  imports: [
    NgbModule,
    NavbarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
