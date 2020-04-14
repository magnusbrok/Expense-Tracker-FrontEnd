import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  error: string;

  constructor(
    private authService: AuthenticationService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    const value = form.value;

    let authenticated = this.authService.logIn(value.username, value.password);

    if (authenticated){
      this.router.navigate(['/home-page']);
    }
    else {
      this.error = 'An error occurred!';
    }
    form.reset();
  }
}
