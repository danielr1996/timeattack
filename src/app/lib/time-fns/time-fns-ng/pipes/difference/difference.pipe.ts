import {Pipe, PipeTransform} from '@angular/core';
import {TimeEntry} from "src/app/features/time/store/time-entry/time-entry";
import {formatHour, formatLocalTime, formatMinute} from "src/app/lib/util";

@Pipe({
  name: 'difference'
})
export class DifferencePipe implements PipeTransform {

  transform(timeEntry: TimeEntry): string {
    return !timeEntry ? '' : `${formatLocalTime(timeEntry.start)} - ${formatLocalTime(timeEntry.end)}`;
  }
}
