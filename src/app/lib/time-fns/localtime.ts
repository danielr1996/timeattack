import {setHour, setMinute} from "src/app/lib/time-fns/fp";
import {getHours, getMinutes} from "date-fns/fp";
import flow from 'lodash/fp/flow';

export class LocalTime {
  public hour?: number = 0;
  public minute?: number = 0;
  public second?: number = 0;
  public nano?: number = 0;

  static of(hour: number, minute: number): LocalTime {
    return {hour, minute};
  }

  static from(date: Date): LocalTime {
    return flow(setHour(getHours(date)), setMinute(getMinutes(date)))(new LocalTime());
  }
}

