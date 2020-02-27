import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {User} from "firebase";
import {combineLatest, from, Observable} from "rxjs";
import {map, mergeMap, pluck, tap} from "rxjs/operators";
import {TimeRange} from "src/app/features/time/store/time-range";
import {TimeRangeQuery} from "src/app/features/time/store/time-range.query";
import {TimeRangeStore} from "src/app/features/time/store/time-range.store";
import {AuthenticationService} from "src/app/features/user/services/authentication.service";
import {mayBeOfNullable} from "src/app/util/Maybe";
import {unpackMaybe} from "src/app/util/rxjs/unpackMaybe";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private user$: Observable<User> = this.authService.getUser().pipe(unpackMaybe());
  private timeRanges$ = this.timeRangeQuery.selectAll();

  constructor(
    private fb: AngularFirestore,
    private authService: AuthenticationService,
    private timeRangeQuery: TimeRangeQuery,
    private timeRangeStore: TimeRangeStore,
  ) {
  }

  save(): Observable<any> {
    return combineLatest(this.user$, this.timeRanges$).pipe(
      tap(([user, timeRanges]) => {
        this.fb.collection('timeranges').doc(user.uid).set({timeRanges: timeRanges})
          .then(function (docRef) {
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
      }))
  }

  load(): Observable<any> {
    return this.user$.pipe(
      mergeMap(user => {
        return this.fb.collection('timeranges').doc(user.uid).get();
      }),
      map(doc => doc.data()),
      map(mayBeOfNullable),
      unpackMaybe(),
      pluck('timeRanges'),
      mergeMap((timeRanges: TimeRange[])=>from(timeRanges)),
      map(timeRange=>this.convertTimeRange(timeRange)),
      tap(timeRange => this.timeRangeStore.add(timeRange)),
    )
  }

  private convertTimeRange = (timeRange: TimeRange): TimeRange => {
    timeRange.start = ((timeRange.start as any) as { toDate: Function }).toDate();
    timeRange.end = ((timeRange.end as any) as { toDate: Function }).toDate();
    return timeRange;
  }
}
