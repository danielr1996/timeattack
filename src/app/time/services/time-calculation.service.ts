import { Injectable } from '@angular/core';
import {TimeRange} from "../store/time-range";
import {differenceInHours} from "date-fns";

@Injectable({
  providedIn: 'root'
})
export class TimeCalculationService {

  constructor() { }

  public totalHours(timeRange: TimeRange): number{
    return differenceInHours(timeRange.start,timeRange.end);
  }
}
