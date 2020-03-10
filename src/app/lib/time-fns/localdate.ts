import {getYear, getMonth, getDay} from "date-fns/fp";
import flow from 'lodash/fp/flow'
import {setDay, setMonth, setYear} from "./fp";

export class LocalDate {
  public year: number;
  public month: number;
  public day: number;


  static from(date: Date): LocalDate {
    return flow(setYear(getYear(date)),setMonth(getMonth(date)),setDay(getDay(date)))(new LocalDate());
  }
}
