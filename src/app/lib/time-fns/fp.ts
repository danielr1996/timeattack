import {setDay as sd, setMonth as sm, setYear as sy} from "date-fns/fp";
import flow from 'lodash/fp/flow'
import {TimeEntry} from "src/app/features/time/store/time-entry/time-entry";
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

export const toDate = (localDate: LocalDate) => {
  return flow(sd(getDay(localDate)), sm(getMonth(localDate) - 1), sy(getYear(localDate)))(new Date())
};

export const differenceInMinutes = (a: LocalTime, b: LocalTime) => (a.hour - b.hour) * 60 + (a.minute - b.minute);
export const defaultDuration: number = differenceInMinutes(LocalTime.of(7, 42), LocalTime.of(0, 0));

export const sum = (timeEntries: TimeEntry[]): number => {
  return timeEntries.length === 0 ? 0 : timeEntries
    .map((timeEntry => differenceInMinutes(timeEntry.end, timeEntry.start)))
    .reduce((a, b) => a + b);
};

export const addPause = (hours: number) => {
  let pause = 0;
  if (hours > 9 * 60) {
    pause = 45;
  } else if (hours > 6 * 60) {
    pause = 30;
  }
  return hours - pause;
};

export const totalHours = (timeEntries: TimeEntry[]): number => flow(
  sum,
  addPause
)(timeEntries);

export const overTime = (duration: number): number => duration - defaultDuration;

