import {Injectable} from '@angular/core';
import {SettingsService} from "./features/settings/services/settings.service";
import {combineLatest, empty, Observable, of} from "rxjs";
import {map, mergeMap, pluck, tap} from "rxjs/operators";
import {TimeRange} from "./features/time/store/time-range";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TimeRangeQuery} from "./features/time/store/time-range.query";
import {unpackMaybe} from "./util/rxjs/unpackMaybe";

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private settings$ = this.settingsService.getUserInfo().pipe(unpackMaybe());
  private gistsToLoad$ = this.settings$.pipe(
    mergeMap(settings => this.http.get('https://api.github.com/gists', {headers: new HttpHeaders().set('Authorization', `token ${settings.token}`)})),
    map((gists: { description: string, id: number }[]) => gists.filter(gist => gist.description === 'TimeAttack Safe')),
    mergeMap(gists => {
      if (gists.length === 0) {
        console.warn('No Gist found to load data!')
        return empty();
      } else if (gists.length === 1) {
        console.log('Using existing gist', gists[0].id)
        return of(gists[0].id);
      } else {
        console.error(`Too Many Gists (${gists.length}! Please delete your gists manually!`)
        return of(gists[0].id);
      }
    }),
  );
  private gistToSave$ = this.settings$.pipe(
    mergeMap(settings => this.http.get('https://api.github.com/gists', {headers: new HttpHeaders().set('Authorization', `token ${settings.token}`)})),
    map((gists: { description: string, id: number }[]) => gists.filter(gist => gist.description === 'TimeAttack Safe')),
    mergeMap(gists => {
      if (gists.length === 0) {
        console.warn('No Gist found to save data!')
        return this.settings$.pipe(
          mergeMap(settings => this.http.post('https://api.github.com/gists', this.createSafeEntity([]), {headers: new HttpHeaders().set('Authorization', `token ${settings.token}`)})),
          pluck('id')
        );
      } else if (gists.length === 1) {
        console.log('Using existing gist', gists[0].id)
        return of(gists[0].id);
      } else {
        console.error(`Too Many Gists (${gists.length}! Please delete your gists manually!`)
        return of(gists[0].id);
      }
    }),
  );

  public save(): Observable<any> {
    // return combineLatest(this.settings$, this.timeRangeQuery.selectAll()).pipe(
    //   tap(console.log),
    //   mergeMap(([settings, timeRanges]) =>this.http.post('https://api.github.com/gists', this.createSafeEntity(timeRanges), {headers: new HttpHeaders().set('Authorization', `token ${settings.token}`)})),
    // )
    return combineLatest(this.settings$, this.timeRangeQuery.selectAll(), this.gistToSave$).pipe(
      mergeMap(([settings, timeRanges, id]) =>
        this.http.patch(`https://api.github.com/gists/${id}`, this.createSafeEntity(timeRanges), {headers: new HttpHeaders().set('Authorization', `token ${settings.token}`)})),
    )
  }

  public load(): Observable<any> {
    this.settings$.pipe(
      mergeMap(settings => this.http.get('https://api.github.com/rate_limit', {headers: new HttpHeaders().set('Authorization', `token ${settings.token}`)}))
    ).subscribe();
    return this.gistsToLoad$.pipe(tap(id => console.log('Loading gist with id', id)));
    // return this.settingsService.getUserInfo().pipe(
    //   unpackMaybe(),
    //   mergeMap(settings => {
    //     return this.http.get('https://api.github.com/gists', {headers: new HttpHeaders().set('Authorization', `token ${settings.token}`)})
    //   }),
    //   map((gists: { description: string, id }[]) => gists.filter(gist => gist.description === 'TimeAttack Safe')),
    //   tap(gists => {
    //     if (gists.length === 0) {
    //       console.warn('No Gist found to load data!')
    //     } else if (gists.length === 1) {
    //       console.log('Using existing gist', gists[0].id)
    //     } else {
    //       console.error(`Too Many Gists (${gists.length}! Please delete your gists manually!`)
    //     }
    //   }),
    //   map(gists => gists.length),
    // )
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

  constructor(
    private settingsService: SettingsService,
    private http: HttpClient,
    private timeRangeQuery: TimeRangeQuery) {
  }
}

export type SafeEntity = {
  description: string,
  public: false,
  files: { [key: string]: { content: string } }
}
