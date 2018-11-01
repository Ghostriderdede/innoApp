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
<<<<<<< HEAD
import {MatIconModule } from '@angular/material';
=======
import { AdminComponent } from './admin/admin.component';
>>>>>>> logic


@NgModule({
  exports:[MatIconModule],
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    PostComponent,
    NavbarComponent,
    AddingComponent,
    AdminComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
