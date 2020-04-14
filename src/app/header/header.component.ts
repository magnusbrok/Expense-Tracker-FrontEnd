import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication/authentication.service";
import {Subscription} from "rxjs";
import {User} from "../authentication/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;
  isAuthenticated = false;
  subscription: Subscription;

  constructor(
    private authService: AuthenticationService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.subscription = this.authService.user
      .subscribe( user => {
        this.user = user;
        this.isAuthenticated = !!this.user;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/authentication']);
  }
}
