import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {map, tap} from "rxjs/operators";
import {AuthenticationService} from "src/app/features/user/services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class LoggedOutGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Checking if user is logged out')
    return this.authService.isLoggedIn().pipe(
      map(loggedIn => {
        if(loggedIn){
          this.router.navigate(['/','user']);
          return false;
        }else{
          return true;
        }
      })
    );
  }
}
