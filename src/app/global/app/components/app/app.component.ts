import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {StorageService} from "src/app/features/storage/services/storage.service";
import {AuthenticationService} from "src/app/features/user/services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  loggedIn$ : Observable<boolean> = this.authService.isLoggedIn();
  constructor(private storage: StorageService, private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    // this.storage.load().subscribe()
  }
}
