import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {UserNameComponent} from "src/app/features/user/components/user-name/user-name.component";
import {LoggedInGuard} from "src/app/features/user/services/logged-in.guard";
import {LoggedOutGuard} from "src/app/features/user/services/logged-out.guard";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from './components/register/register.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: UserNameComponent, canActivate: [LoggedInGuard]},
      {path: 'register', component: RegisterComponent, canActivate: [LoggedOutGuard]},
      {path: 'login', component: LoginComponent, canActivate: [LoggedOutGuard]},
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule {
}
