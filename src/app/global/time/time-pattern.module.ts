import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimeDisplayComponent} from './components/time-display/time-display.component';
import {TimePipe} from "./pipes/time.pipe";
import {TimeRangePipe} from "./pipes/time-range.pipe";


@NgModule({
  declarations: [
    TimeDisplayComponent,
    TimePipe,
    TimeRangePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimeDisplayComponent,
    TimePipe,
    TimeRangePipe,
  ]
})
export class TimePatternModule {
}
