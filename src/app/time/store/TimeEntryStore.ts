import {EntityState, EntityStore, QueryEntity, StoreConfig} from "@datorama/akita";
import {TimeEntry} from "./time-entry";
import {Injectable} from "@angular/core";

export interface TimeEntryState extends EntityState<TimeEntry, string> { }

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'timeEntries' })
export class TimeEntryStore extends EntityStore<TimeEntryState> {
  constructor() {
    super();
  }
}

@Injectable({
  providedIn: 'root'
})
export class TimeEntryQuery extends QueryEntity<TimeEntryState> {
  constructor(protected store: TimeEntryStore) {
    super(store);
  }
}
