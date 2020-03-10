import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  // FIXME: Format with different units (hours, minutes,...)
  // FIXME: Add option to add plus or minus signs
  transform(value: any, ...args: any[]): any {
    const hours = value > 0 ? Math.floor(value/60): Math.ceil(value/60);
    const minutes = value%60;
    return `${value>=0?' ':'-'}${Math.abs(hours)}:${Math.abs(minutes)}h`
  }
}
