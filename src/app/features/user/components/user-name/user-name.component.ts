import { Component, OnInit } from '@angular/core';
import {User} from "firebase";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {AuthenticationService} from "src/app/features/user/services/authentication.service";

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent implements OnInit {
  public user$: Observable<{email: string}> = this.authService.getUser().pipe(map(user => {
    if (user.hasValue) {
      return user.value;
    } else {
      return {email: 'Anonymous'};
    }
  }));

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
