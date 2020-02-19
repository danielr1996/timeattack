import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAddComponent } from './components/time-add/time-add.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import { TimeOverviewComponent } from './components/time-overview/time-overview.component';
import {MatListModule} from "@angular/material/list";
import { TimePipe } from './pipes/time.pipe';



@NgModule({
  declarations: [TimeAddComponent, TimeOverviewComponent, TimePipe],
  exports: [
    TimeAddComponent,
    TimeOverviewComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule,
  ]
})
export class TimeModule { }
