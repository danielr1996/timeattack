import {Pipe, PipeTransform} from '@angular/core';
import {PointInTime, TimeEntry} from "../store/time-entry";

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(timeEntry: TimeEntry, ...args: any[]): string {
    return `${this.formatPointInTime(timeEntry.start)} - ${this.formatPointInTime(timeEntry.end)}`;
  }

  private formatPointInTime(pointInTime: PointInTime): string {
    return `${pointInTime.hour >= 10 ? pointInTime.hour : '\u00A0\u00A0' + pointInTime.hour}:${pointInTime.minute}`
  }
}
