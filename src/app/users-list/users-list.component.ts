import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
public collection:any = [];
  constructor(private UsersService:UsersService) { }

  ngOnInit(): void {
    this.UsersService.getuserlist().subscribe ((Users) => {
    this.collection= Users;
    console.log(this.collection);
    });
}
deleteuserdata(userdata){
  this.collection.splice(userdata.id, 1);
  this.UsersService.deleteuserdata(userdata).subscribe((Users)=>{
    console.log("data deleted successfull", Users)
  });
}
}
