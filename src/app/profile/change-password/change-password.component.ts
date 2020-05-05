import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../../authentication/authentication.service';
import {User} from '../../authentication/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit, OnDestroy {

  constructor(private authService: AuthenticationService) { }

  subscription = new Subscription();
  passwordPlaceholder: string;

  ngOnInit(): void {
    this.subscription = this.authService.userChanged
      .subscribe(
        (user: User) => { this.passwordPlaceholder = user.passwordPlaceholder}
      );

    this.passwordPlaceholder = this.authService.getUser().passwordPlaceholder;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    console.log(form);
    const value = form.value;
    this.authService.changePassword(value.currentPassword, value.newPassword, value.confirmNew);
  }
}
