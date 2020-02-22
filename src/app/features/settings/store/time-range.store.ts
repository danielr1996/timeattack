import {Store, StoreConfig} from "@datorama/akita";
import {Injectable} from "@angular/core";
import {UserInfoState} from "./time-range.state";

@Injectable({
  providedIn: 'root'
})
@StoreConfig({name: 'userInfo'})
export class UserInfoStore extends Store<UserInfoState> {
  constructor() {
    super(createInitialState());
  }
}

export function createInitialState(): UserInfoState {
  return {
    userInfo: null
  }
}
