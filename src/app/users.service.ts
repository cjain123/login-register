import { user } from './user.data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mapTo, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  URL = 'http://localhost:3000/users';

  getUserList() {
    return this.http.get(this.URL);
  }

  createUser(Data) {
    return this.http.post(this.URL, Data);
  }
  ExistingUser(UserLog) {
    return this.http.get(this.URL, UserLog);
  }

  deleteUserData(id) {
    return this.http.delete(`${this.URL}/${id}`);
  }
  loggedUser() {
    return this.http.get(this.URL);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  storeToken() {
    return localStorage.setItem;
  }
  Logout(): any {
    return localStorage.removeItem('token');
  }
}
