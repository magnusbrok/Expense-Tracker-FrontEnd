import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from "../authentication/authentication.service";
import {Subscription} from "rxjs";
import {User} from "../authentication/user.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  constructor(private authService: AuthenticationService) { }

  // subscription = new Subscription();
  user : User;
  userSub : Subscription;

  ngOnInit(): void {
    this.userSub = this.authService.user
      .subscribe(user => {
        this.user = user;
      });
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}
