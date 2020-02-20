import {EntityState, EntityStore, QueryEntity, StoreConfig} from "@datorama/akita";
import {TimeRange} from "./time-range";
import {Injectable} from "@angular/core";
export interface TimeRangeState extends EntityState<TimeRange, string> { }

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'timeEntries' })
export class TimeRangeStore extends EntityStore<TimeRangeState> {
  constructor() {
    super();
  }
}

@Injectable({
  providedIn: 'root'
})
export class TimeRangeQuery extends QueryEntity<TimeRangeState> {
  constructor(protected store: TimeRangeStore) {
    super(store);
  }
}
