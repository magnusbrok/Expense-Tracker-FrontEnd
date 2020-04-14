import { Injectable } from '@angular/core';
import {User} from "./user.model";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user = new BehaviorSubject<User>(null);

  // userChanged = new Subject();
  // private user = null;

  constructor() {  }

  // getUser(): User {
  //   return this.user;
  // }

  setUser(value: User) {
    this.user.next(value);
  }

  logIn(username: string, password: string) {
      if (username == 's173998' && password == 'kk29'){
        this.setUser( new User(
          username,
          's173998@student.dtu.dk',
          'ITØ',
          'Siff',
          'Ravn',
          '****'
        ));
        return true;
      }
      else return false;
  }

  logout() {
    this.setUser(null);
  }

  changePassword(currentPassword: string, newPassword: string, confirmNew: string) {

  }
}
