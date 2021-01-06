import { user } from './../user.data';
import { Router } from '@angular/router';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
data
 constructor(private signdata: UsersService, private Router:Router) { }

  ngOnInit(): void {
    this.data = localStorage.getItem("token");
  }
  loggeduser(){
    this.data ="QpwL5tke4Pnpja7X4";
    localStorage.setItem("token", this.data);
    this.data.push(this.data)


  }

}
