import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {RegisterComponent} from './components/register/register.component';
import {UserRoutingModule} from "./user-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../../environments/environment";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {LoginComponent} from './components/login/login.component';
import {UserNameComponent} from './components/user-name/user-name.component';


@NgModule({
  declarations: [RegisterComponent, LoginComponent, UserNameComponent],
  exports: [
    UserNameComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    UserRoutingModule,
  ]
})
export class UserModule {
}
