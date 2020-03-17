import {Component, Injectable, OnInit} from '@angular/core';
import {from, Observable, of} from "rxjs";
import {User} from "firebase";
import {unpackMaybe} from "src/app/util/rxjs/unpackMaybe";
import {AngularFirestore} from "@angular/fire/firestore";
import {AuthenticationService} from "src/app/features/user/services/authentication.service";
import {map, mergeMap, pluck, tap} from "rxjs/operators";
import {EntityState, EntityStore, QueryEntity, StoreConfig} from "@datorama/akita";

export class TimeRange{
  id: string
  public start: Date;
  public end: Date;

}
export interface TimeRangeState extends EntityState<TimeRange, string> {
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({name: 'timeEntries'})
export class TimeRangeStore extends EntityStore<TimeRangeState> {
  constructor() {
    super();
  }
}

@Injectable({
  providedIn: 'root'
})
export class TimeRangeQuery extends QueryEntity<TimeRangeState> {
  constructor(protected store: TimeRangeStore) {
    super(store);
  }
}



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

@Component({
  selector: 'app-migration',
  template: `
  <button (click)="migrate()">Migrate</button>
  `,
  styleUrls: ['./migration.component.scss']
})
export class MigrationComponent implements OnInit {

  constructor(private timeRangeService: TimeRangeService, private timeRangeQuery: TimeRangeQuery) { }

  ngOnInit(): void {
  }

  migrate() {
    this.timeRangeQuery.selectAll().pipe(
      tap(console.log)
    ).subscribe()
  }
}
