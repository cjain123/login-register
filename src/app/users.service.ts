import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http:HttpClient ) { }

  URL = 'https://reqres.in/api/users';

  getuserlist(){
    return this.http.get(this.URL);
   }

  createuser(data1){
    return this.http.post("https://reqres.in/api/register", data1);
  }
  existinguser(user1){
    return this.http.get("https://reqres.in/api/login", user1);
  }
  deleteuserdata(id){
  return this.http.delete(`${this.URL}/${id}`);
  }
}
