import {LocalTime} from "src/app/lib/time-fns/localtime";

export const formatHour = (hour: number): string => `${hour >= 10 ? '' : '0'}${hour}`;
export const formatMinute = (minute: number): string => `${minute >= 10 ? '' : '0'}${minute}`;
export const formatLocalTime = (time: LocalTime): string => `${formatHour(time.hour)}:${formatMinute(time.minute)}`;
