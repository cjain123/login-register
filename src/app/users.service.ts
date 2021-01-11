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

  BASE_URL = 'https://reqres.in/api';

  GetUserList() {
    return this.http.get(`${this.BASE_URL}/users?page=2`);
  }

  CreateUser(Data) {
    return this.http.get(`${this.BASE_URL}/register`, Data);
  }
  ExistingUser(UserLog) {
    return this.http.get(`${this.BASE_URL}/login`, UserLog);
  }

  DeleteUserData(id) {
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }
  LoggedUser() {
    return this.http.get(`${this.BASE_URL}/login`);
  }
  LoggedIn() {
    return !!localStorage.getItem('token');
  }
  StoreToken() {
    return localStorage.setItem;
  }
  Logout(): any {
    return localStorage.removeItem('token');
  }

}
