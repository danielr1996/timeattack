import {Pipe, PipeTransform} from '@angular/core';
import {TimeRange} from "../store/time-range";
import {format} from 'date-fns/fp'

@Pipe({
  name: 'timeRange'
})
export class TimeRangePipe implements PipeTransform {
  toStr = format( 'k:mm');

  transform(timeRange: TimeRange, ...args: any[]): string {
    return `${this.toStr(new Date(timeRange.start))} - ${this.toStr(new Date(timeRange.end))}`;
    // return `${timeRange.start} - ${timeRange.end}`;
  }
}
