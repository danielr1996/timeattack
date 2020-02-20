import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const hours = Math.floor(value/60);
    const minutes = value%60;
    return `${value>=0?'':'-'}${Math.abs(hours)}:${Math.abs(minutes)}`
  }
}
