import { AppRoutingModule } from './../app-routing.module';
import { LoginComponent } from './../login/login.component';
import { UsersListComponent } from './../users-list/users-list.component';
import { UsersService } from './../users.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  alert: boolean = false;
  createuser;
  name: string;
  email: string;
  password: string;
  constructor(private signdata: UsersService, private Router: Router) {}

  ngOnInit(): void {}
  newuser() {
    if (this.email == 'eve.holt@reqres.in' && this.password == 'pistol') {
      this.Router.navigate([`/login`]);
    }
    else {
      alert('enter valid detail');
    }
    console.log(this.createuser);
    this.signdata.createuser(this.createuser).subscribe((data1) =>
    console.log(data1, 'data created'));
  }
}
