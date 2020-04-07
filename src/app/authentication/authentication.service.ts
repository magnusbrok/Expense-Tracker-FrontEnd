import { Injectable } from '@angular/core';
import {User} from "./user.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userChanged = new Subject();
  private user = new User(
    'sXXXXXX',
    'sXXXXXX@student.dtu.dk',
    'science bitch!',
    'Test',
    'Testsen',
    '*********'
  );

  constructor() {  }

  getUser(): User {
    return this.user;
  }

  setUser(value: User) {
    this.user = value;
    this.userChanged.next(this.user)
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
      }
  }

  logout() {
    this.setUser(new User(
      '',
      '',
      '',
      '',
      '',
      ''
    ));
  }

  changePassword(currentPassword: string, newPassword: string, confirmNew: string) {

  }
}
