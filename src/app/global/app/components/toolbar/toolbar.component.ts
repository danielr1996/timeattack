import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {mergeMap} from "rxjs/operators";
import {AuthenticationService} from "src/app/features/user/services/authentication.service";

@Component({
  selector: 'app-toolbar',
  template: `
    <mat-toolbar [color]="'primary'">
      <a [routerLink]="'time'"><img height="40px" width="40px" src="assets/icons/icon-48x48.png"></a>
<!--      <app-time-overtime></app-time-overtime>-->
      <button matTooltip="Logout" *ngIf="(loggedIn$ |async)" mat-icon-button (click)="logout()" aria-label="Logout">
        <mat-icon>lock</mat-icon>
      </button>
      <button matTooltip="Benutzer" mat-icon-button [routerLink]="['/','user']"
              aria-label="Benutzer">
        <mat-icon>person</mat-icon>
      </button>
      <button
        *ngIf="false"
        matTooltip="Register"
        mat-icon-button
        aria-label="Flugmodus">
        <mat-icon>airplanemode_active</mat-icon>
      </button>
      <app-theme-switcher></app-theme-switcher>
    </mat-toolbar>

  `,
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  loggedIn$: Observable<boolean> = this.authService.isLoggedIn();
  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) {
  }

  logout() {
    this.authService.logout()
      .pipe(mergeMap(()=>this.router.navigate(['/','user','login'])))
      .subscribe();
  }
  ngOnInit(): void {
  }

}
