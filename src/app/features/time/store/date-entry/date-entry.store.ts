import {Injectable} from "@angular/core";
import {EntityStore, StoreConfig} from "@datorama/akita";
import {DateEntryState} from "./date-entry.state";

@Injectable({
  providedIn: 'root'
})
@StoreConfig({name: 'dateEntries'})
export class DateEntryStore extends EntityStore<DateEntryState> {
  constructor() {
    super();
  }
}
