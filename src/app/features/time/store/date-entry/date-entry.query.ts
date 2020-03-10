import {QueryEntity} from "@datorama/akita";
import {Injectable} from "@angular/core";
import {DateEntryState} from "./date-entry.state";
import {DateEntryStore} from "./date-entry.store";

@Injectable({
  providedIn: 'root'
})
export class DateEntryQuery extends QueryEntity<DateEntryState> {
  constructor(protected store: DateEntryStore) {
    super(store);
  }
}
