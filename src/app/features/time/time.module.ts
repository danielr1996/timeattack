import {Injectable, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {DateAdapter, MatNativeDateModule, NativeDateAdapter} from "@angular/material/core";
import {TimeOvertimeComponent} from './components/zz-time-overtime/time-overtime.component';
import {TimeComponent} from './components/time/time.component';
import {TimeRoutingModule} from "./time-routing.module";
import {DayAddComponent} from './components/day-add/day-add.component';
import {DayRowComponent} from './components/day-row/day-row.component';
import {TimeFnsModule} from "../../lib/time-fns/time-fns-ng/time-fns.module";
import {TimeAddComponent} from "./components/time-add/time-add.component";
import {TimeDeleteComponent} from './components/time-delete/time-delete.component';
import {TimeRowComponent} from "./components/time-row/time-row.component";
import { DayDeleteComponent } from './components/day-delete/day-delete.component';
import { TimeAddDialogComponent } from './components/time-add-dialog/time-add-dialog.component';


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
    TimeOvertimeComponent,
    TimeComponent,
    DayAddComponent,
    DayRowComponent,
    TimeDeleteComponent,
    DayDeleteComponent,
    TimeAddDialogComponent
  ],
  exports: [
    TimeOvertimeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    TimeFnsModule,
    MatNativeDateModule,
    MatListModule,
    MatIconModule,
    TimeRoutingModule,
  ],
  providers: [
    {provide: DateAdapter, useClass: MyDateAdapter},
  ],
  entryComponents: [
    TimeAddDialogComponent,
  ],
})
export class TimeModule {
}
