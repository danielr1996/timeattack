import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAddComponent } from './components/time-add/time-add.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import { TimeOverviewComponent } from './components/time-overview/time-overview.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { TimeRangePipe } from './pipes/time-range.pipe';
import {MatDatepicker, MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";



@NgModule({
  declarations: [TimeAddComponent, TimeOverviewComponent, TimeRangePipe],
  exports: [
    TimeAddComponent,
    TimeOverviewComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
  ]
})
export class TimeModule { }
