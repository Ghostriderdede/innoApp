import { Component, OnInit } from '@angular/core';
import {Navigation} from "../core/interface/navigation.interface";
import {Router} from "@angular/router";
import { StoreService } from '../services/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  nav: Navigation[];
  private isAdmin : boolean;
  constructor(private store: StoreService) { }

  ngOnInit() {
    this.isAdmin = this.store.getAdmin();
    if (this.isAdmin) {
        this.nav = this.navigationAdmin;
    } else {
        this.nav = this.navigation;
    }
  }

  private get navigation(): Array<Navigation> {
    return [
      {routeLink: 'adding', icon:'wb_incandescent'},
      {routeLink: 'app-dashboard', icon: 'trending_up'},
      {routeLink: 'login', icon: 'power_settings_new'},

    ]
  }

  private get navigationAdmin(): Array<Navigation> {
    return [
      {routeLink: 'adding', icon:'wb_incandescent'},
      {routeLink: 'app-dashboard', icon: 'trending_up'},
      {routeLink: 'admin', icon: 'lock_open'},
      {routeLink: 'login', icon: 'power_settings_new'}
    ]
  }

}
