import {LocalDate} from "./localdate";
import flow from 'lodash/fp/flow'
import {setDay as sd, setMonth as sm, setYear as sy} from "date-fns/fp";
import {LocalTime} from "src/app/lib/time-fns/localtime";
import {TimeEntry} from "src/app/features/time/store/time-entry/time-entry";

export const setYear = (year: number) => (localDate: LocalDate) => ({...localDate, year});
export const setMonth = (month: number) => (localDate: LocalDate) => ({...localDate, month: month + 1});
export const setDay = (day: number) => (localDate: LocalDate) => ({...localDate, day});

export const getYear = (localDate: LocalDate) => localDate.year;
export const getMonth = (localDate: LocalDate) => localDate.month;
export const getDay = (localDate: LocalDate) => localDate.day;

export const toDate = (localDate: LocalDate) => {
  return flow(sd(getDay(localDate)), sm(getMonth(localDate) - 1), sy(getYear(localDate)))(new Date())
};

export const differenceInMinutes = (a: LocalTime, b: LocalTime) => (a.hour - b.hour) * 60 + (a.minute - b.minute);

export const sum = (...timeEntries: TimeEntry[]) => timeEntries
  .map((timeEntry => differenceInMinutes(timeEntry.end, timeEntry.start)))
  .reduce((a, b) => a + b);
