import {Pipe, PipeTransform} from '@angular/core';
import {TimeEntry} from "src/app/features/time/store/time-entry/time-entry";

@Pipe({
  name: 'difference'
})
export class DifferencePipe implements PipeTransform {

  transform(timeEntry: TimeEntry): unknown {
    return `${timeEntry.start.hour}:${timeEntry.start.minute} - ${timeEntry.end.hour}:${timeEntry.end.minute}`;
  }

}
