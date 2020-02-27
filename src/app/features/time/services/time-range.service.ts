import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {User} from "firebase";
import {combineLatest, from, Observable, of} from "rxjs";
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
export class TimeRangeService {
  private user$: Observable<User> = this.authService.getUser().pipe(unpackMaybe());
  readonly TIMERANGE_KEY = 'timerange';
  readonly TIMERANGES_KEY = 'timeranges';

  constructor(
    private fb: AngularFirestore,
    private authService: AuthenticationService,
    private timeRangeStore: TimeRangeStore,
  ) {
    this.fb.firestore.enablePersistence().catch(function(err) {
      if (err.code == 'failed-precondition') {
        console.log('failed-precondition')
      } else if (err.code == 'unimplemented') {
        console.log('unimplemented')
      }
    });
    this.load().subscribe();
  }

  add(timeRange: TimeRange): Observable<any> {
    this.timeRangeStore.add(timeRange);
    return this.user$.pipe(
      mergeMap(user => from(
        this.fb
          .collection(this.TIMERANGES_KEY)
          .doc(user.uid)
          .collection(this.TIMERANGE_KEY)
          .doc(timeRange.id)
          .set(timeRange)
        )
      )
    );
  }

  update(id: string, timeRange: TimeRange): Observable<any> {
    this.timeRangeStore.update(id, timeRange);
    return of();
  }

  remove(id: string): Observable<void> {
    this.timeRangeStore.remove(id);
    return this.user$.pipe(
      tap(console.log),
      mergeMap(user => from(
        this.fb
          .collection(this.TIMERANGES_KEY)
          .doc(user.uid)
          .collection(this.TIMERANGE_KEY)
          .doc(id)
          .delete()
        )
      )
    );
  }

  private load(): Observable<any> {
    return this.user$.pipe(
      mergeMap(user =>
        this.fb
          .collection(this.TIMERANGES_KEY)
          .doc(user.uid)
          .collection(this.TIMERANGE_KEY)
          .get()
      ),
      pluck('docs'),
      mergeMap(from),
      map(data => data.data()),
      map(timeRange => this.convertTimeRange(timeRange)),
      tap(timeRange => this.timeRangeStore.add(timeRange)),
    );
  }

  private convertTimeRange = (timeRange: TimeRange): TimeRange => {
    timeRange.start = ((timeRange.start as any) as { toDate: Function }).toDate();
    timeRange.end = ((timeRange.end as any) as { toDate: Function }).toDate();
    return timeRange;
  }
}
