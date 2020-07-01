import {QueryEntity} from "@datorama/akita";
import {Injectable} from "@angular/core";
import {TimeEntryState} from "./time-entry.state";
import {TimeEntryStore} from "./time-entry.store";

@Injectable({
  providedIn: 'root'
})
export class TimeEntryQuery extends QueryEntity<TimeEntryState> {
  constructor(protected store: TimeEntryStore) {
    super(store);
  }
}
