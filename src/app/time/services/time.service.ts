import { Injectable } from '@angular/core';
import {TimeEntry} from "../store/time-entry";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  public timeEntries$: BehaviorSubject<TimeEntry[]> = new BehaviorSubject<TimeEntry[]>([]);

  constructor() { }

  public addEntry(timeEntry: TimeEntry){

  }

  private save(){

  }

  private load(){

  }
}
