import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimeAddComponent} from './components/time-add/time-add.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {TimeOverviewComponent} from './components/time-overview/time-overview.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {TimeRangePipe} from '../../global/time/pipes/time-range.pipe';
import {MatDatepicker, MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {TimeGroupComponent} from './components/time-group/time-group.component';
import {TimeRowComponent} from './components/time-row/time-row.component';
import {TimePipe} from '../../global/time/pipes/time.pipe';
import {TimeOvertimeComponent} from './components/time-overtime/time-overtime.component';
import {TimePatternModule} from "../../global/time/time-pattern.module";
import { TimeComponent } from './components/time/time.component';
import {TimeRoutingModule} from "./time-routing.module";


@NgModule({
  declarations: [TimeAddComponent, TimeOverviewComponent, TimeGroupComponent, TimeRowComponent, TimeOvertimeComponent, TimeComponent],
  exports: [
    TimeAddComponent,
    TimeOverviewComponent,
    TimeOvertimeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TimePatternModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatIconModule,
    TimeRoutingModule,
  ]
})
export class TimeModule {
}
