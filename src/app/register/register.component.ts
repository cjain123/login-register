import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from './../users.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  alert: boolean = false;

  Register = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private signdata: UsersService, private Router: Router) {}

  ngOnInit(): void {}
  newUser() {
    if (this.Register) {
      this.Router.navigate([`/login`]);
    } else {
      alert('enter valid detail');
    }
    console.log(this.Register.value);
    this.signdata
      .createUser(this.Register.value)
      .subscribe((Data) => console.log());
  }
}
