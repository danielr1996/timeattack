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
