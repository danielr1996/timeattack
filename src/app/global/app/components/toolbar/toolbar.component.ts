import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {mergeMap} from "rxjs/operators";
import {AuthenticationService} from "src/app/features/user/services/authentication.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
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
