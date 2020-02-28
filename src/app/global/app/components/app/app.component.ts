import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AuthenticationService} from "src/app/features/user/services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loggedIn$: Observable<boolean> = this.authService.isLoggedIn();

  constructor(
    private authService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout().subscribe();
  }
}
