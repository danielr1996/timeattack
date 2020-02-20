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
import { TimeGroupComponent } from './components/time-group/time-group.component';
import { TimeRowComponent } from './components/time-row/time-row.component';
import { TimePipe } from './pipes/time.pipe';
import { TimeOvertimeComponent } from './components/time-overtime/time-overtime.component';



@NgModule({
  declarations: [TimeAddComponent, TimeOverviewComponent, TimeRangePipe, TimeGroupComponent, TimeRowComponent, TimePipe, TimeOvertimeComponent],
  exports: [
    TimeAddComponent,
    TimeOverviewComponent,
    TimeOvertimeComponent
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
