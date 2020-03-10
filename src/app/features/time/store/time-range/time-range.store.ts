import {Injectable} from "@angular/core";
import {EntityStore, StoreConfig} from "@datorama/akita";
import {TimeRangeState} from "./time-range.state";

/**
 * @deprecated
 */
@Injectable({
  providedIn: 'root'
})
@StoreConfig({name: 'timeRanges'})
export class TimeRangeStore extends EntityStore<TimeRangeState> {
  constructor() {
    super();
  }
}
