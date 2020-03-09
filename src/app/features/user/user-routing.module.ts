import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";



@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
