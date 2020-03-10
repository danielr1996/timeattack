import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimeDisplayComponent} from './components/time-display/time-display.component';
import {DurationPipe} from "src/app/global/time/pipes/duration.pipe";
import {TimeRangePipe} from "./pipes/time-range.pipe";


@NgModule({
  declarations: [
    TimeDisplayComponent,
    DurationPipe,
    TimeRangePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimeDisplayComponent,
    DurationPipe,
    TimeRangePipe,
  ]
})
export class TimePatternModule {
}
