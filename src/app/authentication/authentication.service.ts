import { Injectable } from '@angular/core';
import {User} from "./user.model";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userChanged = new Subject();
  private user = null;

  constructor(private http : HttpClient) {  }

  getUser(): User {
    return this.user;
  }

  setUser(value: User) {
    this.user = value;
    this.userChanged.next(this.user)
  }

  logIn(username: string, password: string) {
    this.http.post<User>(
      'http://localhost:8080/login',
      {username: username, password: password}
    ).subscribe( user =>{
      console.log(user);
      this.setUser(user)
    });
  }

  logout() {
    this.setUser(null);
  }

  changePassword(currentPassword: string, newPassword: string, confirmNew: string) {

  }
}
