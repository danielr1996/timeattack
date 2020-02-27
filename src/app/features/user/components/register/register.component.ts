import {Component, OnInit} from '@angular/core';
import {throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {AuthenticationService} from "../../services/authentication.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public errorMessage: string;
  public successMessage: string;
  public registerForm: FormGroup;
  constructor(private authService: AuthenticationService, private fb: FormBuilder) {
    this.registerForm = fb.group({
      email:'',
      password:'',
    })
  }

  ngOnInit() {
  }

  register(value) {
    this.authService.register(value)
      .pipe(
        tap(() => {
          this.errorMessage = "";
          this.successMessage = "Successfully registerd";
        }),
        catchError(err => {
          this.errorMessage = err.message;
          this.successMessage = "";
          return throwError(err);
        })
      )
      .subscribe();
  }
}
