import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';
import {Subscription} from 'rxjs';
import {User} from '../authentication/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  constructor(private authService: AuthenticationService) { }

  // subscription = new Subscription();
  user: User;


  ngOnInit(): void {
    // this.subscription = this.authService.userChanged
    //   .subscribe(
    //     (user: User) => { this.user = user}
    //   );

    this.user = this.authService.getUser();
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}
