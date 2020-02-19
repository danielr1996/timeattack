import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAddComponent } from './components/time-add/time-add.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import { TimeOverviewComponent } from './components/time-overview/time-overview.component';



@NgModule({
  declarations: [TimeAddComponent, TimeOverviewComponent],
  exports: [
    TimeAddComponent,
    TimeOverviewComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class TimeModule { }
