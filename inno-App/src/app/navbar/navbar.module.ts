import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {NavbarComponent} from './navbar.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';


@NgModule({
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
  imports: [BrowserModule,
    AppRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class NavbarModule {}
