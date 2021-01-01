import { AppRoutingModule } from './../app-routing.module';
import { LoginComponent } from './../login/login.component';
import { UsersListComponent } from './../users-list/users-list.component';
import { UsersService } from './../users.service';
import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  createuser = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    password: new FormControl('')
  });
  constructor(private signdata:UsersService) { }



  ngOnInit(): void {
  }
  newuser(){
    console.log(this.createuser.value);
    this.signdata.createuser(this.createuser.value).subscribe((result)=>
    console.log(result,"data created")
    )}
}
