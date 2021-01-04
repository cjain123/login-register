import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

 public userid;
  constructor(private UsersService:UsersService) { }

  ngOnInit(): void {
    this.getuserlist();
      }
      getuserlist(): any {
        this.UsersService.getuserlist().subscribe (user =>{
           this.userid = user.data ;
           console.log(this.userid);
      })
       };
      deleteuserdata(userdata) {
      this.userid.splice(userdata.id,1)
      this.UsersService.deleteuserdata(userdata).subscribe ((user) => {
      console.log("data deleted",user)
       });
      }

    }

