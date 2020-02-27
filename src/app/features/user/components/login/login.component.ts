import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Observable, throwError} from "rxjs";
import {User} from "firebase";
import {catchError, map, tap} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public errorMessage: string;
  public successMessage: string;
  public registerForm: FormGroup;


  constructor(private authService: AuthenticationService, private fb: FormBuilder) {
    this.registerForm = fb.group({
      email: '',
      password: '',
    })
  }

  ngOnInit() {
  }

  login(value) {
    this.authService.login(value)
      .pipe(
        tap(() => {
          this.errorMessage = "";
          this.successMessage = "You have been signed in!";
        }),
        catchError(err => {
          this.errorMessage = err.message;
          this.successMessage = "";
          return throwError(err);
        })
      )
      .subscribe();
  }

  logout() {
    this.authService.logout().subscribe();
  }
}
