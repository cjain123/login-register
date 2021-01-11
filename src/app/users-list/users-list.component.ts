import { Router } from '@angular/router';

import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  public userid;
data;
Total : number;
  constructor(private UsersService: UsersService,private Router:Router) {}

  ngOnInit(): void {
    this.GetUserList();
    this.data = localStorage.getItem("token");
  }
  GetUserList(): any {
    this.UsersService.GetUserList().subscribe((user) => {
      this.userid = user.data;

    });
  }
  DeleteUserData(UserData) {
    this.userid.splice(UserData.id, 1);
    this.UsersService.DeleteUserData(UserData).subscribe((user) => {
      user;
    });
  }
  Logout() {
    localStorage.removeItem("token");
    this.Router.navigate(["/sign"])
}
}
