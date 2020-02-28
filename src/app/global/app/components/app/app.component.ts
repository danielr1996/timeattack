import {Component, HostBinding, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AuthenticationService} from "src/app/features/user/services/authentication.service";
import {Overlay, OverlayContainer} from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loggedIn$: Observable<boolean> = this.authService.isLoggedIn();
  theme = 'theme-light';
  constructor(
    private authService: AuthenticationService,
  ) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout().subscribe();
  }

  toggleDarkMode() {
    let link:any = document.querySelector('#theme');
    let href = link.href;

    if(href.endsWith('assets/theme-dark.css')){
      this.theme='theme-light';
      link.href='assets/theme-light.css';
    }else if(href.endsWith('assets/theme-light.css')){
      this.theme='theme-dark';
      link.href='assets/theme-dark.css';
    }else{
      this.theme='theme-light';
      link.href='assets/theme-light.css';
    }
  }
}
