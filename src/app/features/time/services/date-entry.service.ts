import {Injectable} from '@angular/core';
import {DateEntryStore} from "../store/date-entry/date-entry.store";
import {DateEntryQuery} from "../store/date-entry/date-entry.query";
import {DateEntry} from "../store/date-entry/date-entry";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DateEntryService {

  constructor(
    private dateEntryStore: DateEntryStore,
    private dateEntryQuery: DateEntryQuery
  ) {
  }

  public add(dateEntry: DateEntry): Observable<void> {
    this.dateEntryStore.add(dateEntry);
    return of();
  }

  public get(): Observable<DateEntry[]> {
    return this.dateEntryQuery.selectAll();
  }

  delete(id: string): Observable<any> {
    this.dateEntryStore.remove(id);
    return of();
  }
}
