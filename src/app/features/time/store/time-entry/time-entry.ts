import {LocalTime} from "../../../../lib/time-fns/localtime";

export class TimeEntry{
  public id: string;
  public dateEntryId: string;
  public start: LocalTime;
  public end: LocalTime;
}
