import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'app';
  userInputID = '';
  userInputPW = '';
  user: User;

  ngOnInit() {
    const user = new User();
    this.user = user;
  }

  userID(event: any) {
    this.userInputID = event.target.value;
    console.log(this.userInputID);
    if (this.userID!== undefined) {
      this.user.ID = this.userInputID;
    }
  }

  userPW(event: any) {
    this.userInputPW = event.target.value;
    console.log(this.userInputPW);
    if (this.userPW !== undefined) {
      this.user.PW = this.userInputPW;
    }
  }

  printUser() {
    console.log(this.user);
  }
}
