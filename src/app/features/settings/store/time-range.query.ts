import {Query} from "@datorama/akita";
import {Injectable} from "@angular/core";
import {UserInfoState} from "./time-range.state";
import {UserInfoStore} from "./time-range.store";

@Injectable({
  providedIn: 'root'
})
export class UserInfoQuery extends Query<UserInfoState> {
  constructor(protected store: UserInfoStore) {
    super(store);
  }
}
