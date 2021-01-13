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
Total:number;
  constructor(private signdata: UsersService, private Router:Router) { }

  ngOnInit(): void {
    this.data = localStorage.getItem("token");
  this.LoggedUser();
      }
  Logout() {
    localStorage.removeItem("token");
    this.Router.navigate(["/sign"])
}
LoggedUser(): any {
  this.signdata
  .LoggedUser().subscribe((result) =>  {
    this.Total = result.total;

  });

}
}
