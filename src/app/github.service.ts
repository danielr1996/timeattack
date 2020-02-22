import {Injectable} from '@angular/core';
import {SettingsService} from "./features/settings/services/settings.service";
import {combineLatest, merge, Observable} from "rxjs";
import {combineAll, map, mergeMap, tap} from "rxjs/operators";
import {TimeRange} from "./features/time/store/time-range";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserInfoQuery} from "./features/settings/store/time-range.query";
import {TimeCalculationService} from "./features/time/services/time-calculation.service";
import {TimeRangeQuery} from "./features/time/store/time-range.query";

@Injectable({
  providedIn: 'root',
})
export class GithubService {

  constructor(private settingsService: SettingsService, private http: HttpClient, private timeRangeQuery: TimeRangeQuery) {
  }

  public save(): Observable<any> {
    console.log('save');
    let headers = (token) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', `token`);
      return headers;
    };
    return combineLatest(this.settingsService.getUserInfo(), this.timeRangeQuery.selectAll()).pipe(
      mergeMap(([settings, timeRanges]) => {
        if (settings.hasValue) {
          return this.http.post('https://api.github.com/gists', this.createSafeEntity(timeRanges), {headers: new HttpHeaders().set('Authorization', `token ${settings.value.token}`)})
        }
      }),
      tap(console.log)
    )
  }

  public load(): Observable<any> {
    console.log('load');
    return this.settingsService.getUserInfo().pipe(
      tap(settings => console.log(settings)),
    )
  }

  private createSafeEntity(timeRanges: TimeRange[]): SafeEntity {
    return {
      description: 'TimeAttack Safe',
      public: false,
      files: {
        'timeattack.json': {
          content: JSON.stringify(timeRanges)
        }
      }
    }
  }
}

export type SafeEntity = {
  description: string,
  public: false,
  files: { [key: string]: { content: string } }
}
