import {Component, Injectable, OnInit} from '@angular/core';
import {from, Observable, of} from "rxjs";
import {User} from "firebase";
import {AngularFirestore} from "@angular/fire/firestore";
import {AuthenticationService} from "src/app/features/user/services/authentication.service";
import {map, mergeMap, pluck, tap} from "rxjs/operators";
import {EntityState, EntityStore, QueryEntity, StoreConfig} from "@datorama/akita";
import {unpackMaybe} from "src/app/lib/fp/rxjs/unpackMaybe";
import {TimeEntry} from "src/app/features/time/store/time-entry/time-entry";
import {DateEntry} from "src/app/features/time/store/date-entry/date-entry";
import {v4 as uuid} from "uuid";
import {LocalDate} from "src/app/lib/time-fns/localdate";
import {LocalTime} from "src/app/lib/time-fns/localtime";
import {DateEntryService} from "src/app/features/time/services/date-entry.service";
import {TimeEntryService} from "src/app/features/time/services/time-entry.service";
import {compareDesc, format} from "date-fns/fp";
import {parse} from "date-fns";
import flow from 'lodash/fp/flow'
import {groupBy} from "lodash";
import {time} from "@ngtools/webpack/src/benchmark";

export class TimeRange {
  id: string;
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
    this.fb.firestore.enablePersistence().catch(function (err) {
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

const groupByDays = (timeRanges: TimeRange[]) => {
  timeRanges.sort((a, b) => compareDesc(new Date(a.start), new Date(b.start)));
  return Object.entries(groupBy(timeRanges, flow((timerange: TimeRange) => new Date(timerange.start), format("yyyy-MM-dd")))).map(([date, timeRanges]) => ({
    date: parse(date, 'yyyy-MM-dd', new Date()),
    timeRanges: timeRanges
  })) as { date: Date, timeRanges: TimeRange[] }[];
};

@Component({
  selector: 'app-migration',
  template: `
    <button (click)="migrate()">Migrate</button>
  `,
  styleUrls: ['./migration.component.scss']
})
export class MigrationComponent implements OnInit {

  constructor(
    private timeRangeService: TimeRangeService,
    private timeRangeQuery: TimeRangeQuery,
    private dateEntryService: DateEntryService,
    private timeEntryService: TimeEntryService,
  ) {
  }

  ngOnInit(): void {
  }

  migrate() {
    this.timeRangeQuery.selectAll().pipe(
      map(groupByDays),
      tap((dateEntries: { date: Date, timeRanges: TimeRange[] }[]) => {
        dateEntries.map(de => {
          const dateEntry: DateEntry = {
            id: uuid(),
            date: LocalDate.from(de.date)
          };
          this.dateEntryService.add(dateEntry).subscribe();
          de.timeRanges.map(te => {
            const timeEntry: TimeEntry = {
              id: uuid(),
              dateEntryId: dateEntry.id,
              start: LocalTime.from(te.start),
              end: LocalTime.from(te.end),
            };
            this.timeEntryService.add(timeEntry).subscribe();
          })
        })
      }),
    ).subscribe()
  }
}

