import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DifferencePipe} from "src/app/lib/time-fns/time-fns-ng/pipes/difference/difference.pipe";
import {DurationPipe} from "src/app/lib/time-fns/time-fns-ng/pipes/duration/duration.pipe";
import {LocaldatePipe} from 'src/app/lib/time-fns/time-fns-ng/pipes/localdate/localdate.pipe';


@NgModule({
  declarations: [
    LocaldatePipe,
    DurationPipe,
    DifferencePipe,
  ],
  exports: [
    LocaldatePipe,
    DurationPipe,
    DifferencePipe,
  ],
  imports: [
    CommonModule
  ]
})
export class TimeFnsModule {
}
