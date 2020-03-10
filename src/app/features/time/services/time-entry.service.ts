import {Injectable} from '@angular/core';
import {TimeEntryQuery} from "../store/time-entry/time-entry.query";
import {TimeEntryStore} from "../store/time-entry/time-entry.store";
import {TimeEntry} from "../store/time-entry/time-entry";
import {Observable, of} from "rxjs";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TimeEntryService {

  constructor(private timeEntryQuery: TimeEntryQuery, private timeEntryStore: TimeEntryStore) {
  }

  add(timeEntry: TimeEntry): Observable<any> {
    this.timeEntryStore.add(timeEntry);
    return of();
  }

  get(): Observable<TimeEntry[]> {
    return this.timeEntryQuery.selectAll();
  }

  delete(id: string): Observable<any> {
    this.timeEntryStore.remove(id);
    return of();
  }
}
