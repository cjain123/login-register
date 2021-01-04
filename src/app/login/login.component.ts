import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  existinguser = new FormGroup({
    email : new FormControl(''),
    password: new FormControl('')
  });

  constructor(private signdata:UsersService) { }

  ngOnInit(): void {
  }
  user1(){
    console.log(this.existinguser.value);
    this.signdata.existinguser(this.existinguser.value).subscribe((result)=>
    console.log(result,"data created")
    )}
}
