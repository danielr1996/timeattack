import {QueryEntity} from "@datorama/akita";
import {Injectable} from "@angular/core";
import {TimeRangeState} from "./time-range.state";
import {TimeRangeStore} from "./time-range.store";

@Injectable({
  providedIn: 'root'
})
export class TimeRangeQuery extends QueryEntity<TimeRangeState> {
  constructor(protected store: TimeRangeStore) {
    super(store);
  }
}
