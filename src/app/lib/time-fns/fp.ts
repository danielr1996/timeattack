import {LocalTime} from "src/app/lib/time-fns/localtime";
import {LocalDate} from "./localdate";

// TODO: Unterscheiden zwischen reinen time-fns und anwendungsspezischen fns
export const setYear = (year: number) => (localDate: LocalDate) => ({...localDate, year});
export const setMonth = (month: number) => (localDate: LocalDate) => ({...localDate, month});
export const setDay = (day: number) => (localDate: LocalDate) => ({...localDate, day});

export const setMinute = (minute: number) => (localTime: LocalTime) => ({...localTime, minute});
export const setHour = (hour: number) => (localTime: LocalTime) => ({...localTime, hour});

export const getYear = (localDate: LocalDate) => localDate.year;
export const getMonth = (localDate: LocalDate) => localDate.month;
export const getDay = (localDate: LocalDate) => localDate.day;

/** is a before b **/
export const compare = (a: LocalDate, b: LocalDate): -1 | 0 | 1 => {
  if (a.year < b.year) {
    return 1;
  } else if (a.year > b.year) {
    return -1;
  } else {
    if (a.month < b.month) {
      return 1;
    } else if (a.month > b.month) {
      return -1;
    } else {
      if (a.day < b.day) {
        return 1;
      } else if (a.day > b.day) {
        return -1;
      } else {
        return 0;
      }
    }
  }
};
