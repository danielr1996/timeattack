import {Pipe, PipeTransform} from '@angular/core';
import {TimeRange} from "../../../features/time/store/time-range";
import {format} from 'date-fns/fp'

@Pipe({
  name: 'timeRange'
})
export class TimeRangePipe implements PipeTransform {
  toStr = format( 'k:mm');

  //FIXME: load date correctly from store so that new Date(...) isn't necessary
  transform(timeRange: TimeRange, ...args: any[]): string {
    return `${this.toStr(new Date(timeRange.start))} - ${this.toStr(new Date(timeRange.end))}`;
  }
}
