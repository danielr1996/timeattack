import {EntityStore, StoreConfig} from "@datorama/akita";
import {Injectable} from "@angular/core";
import {TimeRangeState} from "./time-range.state";

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'timeEntries' })
export class TimeRangeStore extends EntityStore<TimeRangeState> {
  constructor() {
    super();
  }
}
