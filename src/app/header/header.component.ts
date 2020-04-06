import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication/authentication.service";
import {Subscription} from "rxjs";
import {User} from "../authentication/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;
  subscription: Subscription;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.subscription = this.authService.userChanged
      .subscribe(
        (user: User) => { this.username = user.username}
      );

    this.username = this.authService.getUser().username;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
