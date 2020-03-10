import {Injectable} from "@angular/core";
import {EntityStore, StoreConfig} from "@datorama/akita";
import {TimeEntryState} from "./time-entry.state";

@Injectable({
  providedIn: 'root'
})
@StoreConfig({name: 'timeEntries'})
export class TimeEntryStore extends EntityStore<TimeEntryState> {
  constructor() {
    super();
  }
}
