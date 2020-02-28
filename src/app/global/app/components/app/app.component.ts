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
  @HostBinding('class') theme: string;

  constructor(
    private authService: AuthenticationService,
    private overlayContainer: OverlayContainer,
  ) {
  }

  ngOnInit(): void {
    this.theme = 'theme-dark';
    this.overlayContainer.getContainerElement().classList.add(this.theme)
  }

  logout() {
    this.authService.logout().subscribe();
  }

  toggleDarkMode() {
    if (this.theme === 'theme-dark') {
      this.theme='';
    }else{
      this.theme= 'theme-dark';
    }
  }
}
