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
  alert:boolean =false;
  existinguser
email:string;
password:string;
data:string;

  constructor(private signdata:UsersService, private Router:Router) { }

  ngOnInit(): void {
   this.data = localStorage.getItem("token");
  }

  user1(){
    if(this.email == "eve.holt@reqres.in" && this.password == "pistol"){
      this.Router.navigate([`/dashboard`]);
    }
    else{
      alert("enter valid detail");
    }
    this.data ="QpwL5tke4Pnpja7X4";
    localStorage.setItem("token", this.data);
      console.log(this.existinguser);
    this.signdata.existinguser(this.existinguser).subscribe((result)=>
    console.log(result,"data created")
    )}
}
