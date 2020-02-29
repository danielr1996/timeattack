import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
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
  ) {
  }

  logout() {
    this.authService.logout().subscribe();
  }
  ngOnInit(): void {
  }

}
