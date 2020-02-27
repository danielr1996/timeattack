import {EntityStore, StoreConfig} from "@datorama/akita";
import {Injectable} from "@angular/core";
import {OrArray} from "@datorama/akita/src/types";
import {StorageService} from "src/app/features/storage/services/storage.service";
import {TimeRange} from "src/app/features/time/store/time-range";
import {TimeRangeState} from "./time-range.state";

@Injectable({
  providedIn: 'root'
})
@StoreConfig({name: 'timeEntries'})
export class TimeRangeStore extends EntityStore<TimeRangeState> {
  constructor() {
    super();
  }
}
