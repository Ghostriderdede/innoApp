import { Component, OnInit } from '@angular/core';
import {Navigation} from "../core/interface/navigation.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
<<<<<<< HEAD
  public nav: Array<Navigation>
  //public isAdmin = true;
  constructor(
  ) { }
=======
  public isAdmin = true;
  constructor() { }
>>>>>>> logic

  ngOnInit() {
  this.nav = this.navigation;


  }
  private get navigation(): Array<Navigation> {
    return [
      {routeLink: 'adding', icon:'wb_incandescent'},
      {routeLink: 'app-dashboard', icon: 'trending_up'},
      {routeLink: 'login', icon: 'power_settings_new'},

    ]
  }


}
