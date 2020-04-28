import { Injectable } from '@angular/core';
import {User} from './user.model';
import {Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userChanged = new Subject();
  private user = null;

  constructor(private http: HttpClient) {  }

  getUser(): User {
    return this.user;
  }

  setUser(value: User) {
    this.user = value;
    this.userChanged.next(this.user);
  }

  logIn(username: string, password: string) {
    return this.http.post<User>(
      // TODO: change to dist.saluton.dk
      ' http://localhost:3344/login',
      {username, password}
    )
      .pipe(
        catchError(this.errorHandle),
        tap( response => {
            if(response.username) this.setUser(response);
          })
      );
  }

  logout() {
    this.setUser(null);
  }

  changePassword(currentPassword: string, newPassword: string, confirmNew: string) {

  }

  private errorHandle(errorRes : HttpErrorResponse){
    let errorMsg = errorRes.error;
    return throwError(errorMsg);
  }
}
