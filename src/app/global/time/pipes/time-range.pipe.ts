import {Pipe, PipeTransform} from '@angular/core';
import {TimeEntry} from "src/app/features/time/store/time-entry/time-entry";

@Pipe({
  name: 'timeRange'
})
export class TimeRangePipe implements PipeTransform {

  transform(timeEntry: TimeEntry): string {
    // return `${this.toStr(new Date(timeRange.start))} - ${this.toStr(new Date(timeRange.end))}`;
    return null;
  }
}
