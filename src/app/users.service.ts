import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  BASE_URL = 'https://reqres.in/api';

  getuserlist() {
    return this.http.get(`${this.BASE_URL}/users?page=2`);
  }

  createuser(data1) {
    return this.http.get(`${this.BASE_URL}/register`, data1);
  }
  existinguser(user1) {
    return this.http.get(`${this.BASE_URL}/login`, user1);
  }
  deleteuserdata(id) {
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }
  loggeduser(id) {
    return this.http.get(`${this.BASE_URL}/login`);
  }
}
