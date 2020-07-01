import {Pipe, PipeTransform} from '@angular/core';
import {formatHour, formatMinute} from "src/app/lib/util";

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  // FIXME: Format with different units (hours, minutes,...)
  // FIXME: Add option to add plus or minus signs
  transform(value: number): string {
    const hours = value > 0 ? Math.floor(value / 60) : Math.ceil(value / 60);
    const minutes = value % 60;
    return `${value >= 0 ? ' ' : '-'}${formatHour(Math.abs(hours))}:${formatMinute(Math.abs(minutes))}h`;
  }
}
