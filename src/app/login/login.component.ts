import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  alert: boolean = false;
  ExistingUser;
  email: string;
  password: string;
  data: string;
  isloggedin: boolean;
  constructor(private signdata: UsersService, private Router: Router) {}

  ngOnInit(): void {
    this.data = localStorage.getItem('token');
  }

  UserLog() {
    if (this.email == 'admin@gmail.com' && this.password == 'admin123') {
      this.Router.navigate([`/dashboard`]);
      this.isloggedin = true;
      this.signdata.storeToken();
    } else {
      alert('enter valid detail');
      this.isloggedin = false;
    }
    this.data = 'QpwL5tke4Pnpja7X4';
    localStorage.setItem('token', this.data);
    console.log(this.ExistingUser);
    this.signdata
      .ExistingUser(this.ExistingUser)
      .subscribe((result) => console.log());
  }
}
