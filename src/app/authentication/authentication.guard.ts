import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {User} from "./user.model";

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    let authenticated = !! this.authService.getUser();

    // this.authService.userChanged
    //   .subscribe((user : User) => {
    //     authenticated = !!user;
    //   });

    if (authenticated) return true;
    else return this.router.createUrlTree(['/authentication']);
  }

}
