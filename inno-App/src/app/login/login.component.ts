import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { DataService } from '../services/data-service';
import { Observable, of } from 'rxjs';
import { map, filter, reduce, tap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private data: DataService) {}

  userInputID = '';
  userInputPW = '';
  user = new User();
  beData: any;

  ngOnInit() {
    this.data.getUsers().subscribe(
      respone => this.beData = respone
    );
  }

  userID(event: any) {
    this.userInputID = event.target.value;
    if (this.userID!== undefined) {
      this.user.ID = this.userInputID;
    }
  }

  userPW(event: any) {
    this.userInputPW = event.target.value;
    if (this.userPW !== undefined) {
      this.user.PW = this.userInputPW;
    }
  }

  checkCredentials(id, pw) {
    for (let user of this.beData) {
      if (user.recognition === id && user.password === pw) {
          this.user = user
          this.router.navigate(['./app-dashboard']);
          break;
      }
    }
  }

  printUser() {
    this.checkCredentials(this.user.ID, this.user.PW);
  }
}
