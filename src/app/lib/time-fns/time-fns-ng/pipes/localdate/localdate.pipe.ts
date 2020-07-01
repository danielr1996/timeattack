import { Pipe, PipeTransform } from '@angular/core';
import {LocalDate} from "src/app/lib/time-fns/localdate";
import {toDate} from "src/app/lib/time-fns/fp2";

@Pipe({
  name: 'localdate'
})
export class LocaldatePipe implements PipeTransform {

  transform(value: LocalDate): Date {
    return !value ? new Date() : toDate(value);
  }

}
