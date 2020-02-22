import {Injectable} from '@angular/core';
import {UserInfoQuery} from "../store/time-range.query";
import {UserInfoStore} from "../store/time-range.store";
import {UserInfo} from "../store/user-info";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Maybe, mayBeOfNullable} from "../../../util/Maybe";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private userInfoQuery: UserInfoQuery, private userInfoStore: UserInfoStore) {
  }

  public setUserInfo(userInfo: UserInfo) {
    this.userInfoStore.update({userInfo});
  }

  public getUserInfo(): Observable<Maybe<UserInfo>> {
    return this.userInfoQuery.select('userInfo').pipe(
      map(mayBeOfNullable)
    );
  }

  public delete() {
    this.userInfoStore.update({userInfo: null})
  }

}
