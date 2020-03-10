import {Injectable, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimeAddZZComponent} from './components/zz-time-add-old/time-add-z-z.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {TimeOverviewComponent} from './components/zz-time-overview/time-overview.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {DateAdapter, MatNativeDateModule, NativeDateAdapter} from "@angular/material/core";
import {TimeGroupComponent} from './components/zz-time-group/time-group.component';
import {TimeRowZZComponent} from './components/zz-time-row/time-row-z-z.component';
import {TimeOvertimeComponent} from './components/zz-time-overtime/time-overtime.component';
import {TimePatternModule} from "../../global/time/time-pattern.module";
import {TimeComponent} from './components/z-time/time.component';
import {TimeRoutingModule} from "./time-routing.module";
import {DayAddComponent} from './components/day-add/day-add.component';
import {DayRowComponent} from './components/day-row/day-row.component';
import {TimeFnsModule} from "../../lib/time-fns/time-fns-ng/time-fns.module";
import {TimeAddComponent} from "./components/time-add/time-add.component";
import {TimeDeleteComponent} from './components/time-delete/time-delete.component';
import {TimeRowComponent} from "./components/time-row/time-row.component";
import { DayDeleteComponent } from './components/day-delete/day-delete.component';


// TODO: Move to appropiate position
@Injectable()
export class MyDateAdapter extends NativeDateAdapter {

  getFirstDayOfWeek(): number {
    return 1;
  }

}


@NgModule({
  declarations: [
    TimeRowComponent,
    TimeAddComponent,
    TimeAddZZComponent,
    TimeOverviewComponent,
    TimeGroupComponent,
    TimeRowZZComponent,
    TimeOvertimeComponent,
    TimeComponent,
    DayAddComponent,
    DayRowComponent,
    TimeDeleteComponent,
    DayDeleteComponent
  ],
  exports: [
    TimeAddZZComponent,
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
    TimeFnsModule,
    MatNativeDateModule,
    MatListModule,
    MatIconModule,
    TimeRoutingModule,
  ],
  providers: [
    {provide: DateAdapter, useClass: MyDateAdapter},
  ]
})
export class TimeModule {
}
