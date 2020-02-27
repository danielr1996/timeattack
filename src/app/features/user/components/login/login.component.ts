import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Observable} from "rxjs";
import {User} from "firebase";
import {unpackMaybe} from "../../../../util/rxjs/unpackMaybe";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public errorMessage: string;
  public successMessage: string;
  public registerForm: FormGroup;
  public user$: Observable<User> = this.authService.getUser().pipe(map(user=>{
    if(user.hasValue){
      return user.value;
    }else{
      return null;
    }
  }));

  constructor(private authService: AuthenticationService, private fb: FormBuilder) {
    this.registerForm = fb.group({
      email: '',
      password: '',
    })
  }

  ngOnInit() {
  }

  tryRegister(value) {
    this.authService.login(value)
      .then(res => {
        this.errorMessage = "";
        this.successMessage = "You have been signed in!";
      }, err => {
        this.errorMessage = err.message;
        this.successMessage = "";
      })
  }

  logout() {
    this.authService.logout();
  }
}
