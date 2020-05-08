import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';
import {User} from './user.model';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  error: string;
  isAuthenticated: boolean;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.userChanged.subscribe( (user: User) => {
        this.isAuthenticated = !! user;

        if (this.isAuthenticated) { this.router.navigate(['/home-page']); }
        else { this.error = 'An error occurred!'; }
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
    const value = form.value;

    this.authService.logIn(value.username, value.password)
      .subscribe(
        user => {
          // console.log(user);
          // // this.setUser(user);
          // this.router.navigate(['/home-page'])
        },
        error => {
          console.log(error);
          this.error = error;
        }
      );
    form.reset();
  }
}
