import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
regURL= "http://localhost:3000/users";
  constructor( private http:HttpClient ) { }
  getuserlist(){
   return this.http.get(this.regURL);
  }
  createuser(data){
    return this.http.post(this.regURL, data);
  }
  deleteuserdata(id){
  return this.http.delete(this.regURL, id);
  }
}
