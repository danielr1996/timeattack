import { Pipe, PipeTransform } from '@angular/core';
import {LocalDate} from "../../localdate";
import {toDate} from "../../fp";

@Pipe({
  name: 'localdate'
})
export class LocaldatePipe implements PipeTransform {

  transform(value: LocalDate): Date {
    return toDate(value);
  }

}
