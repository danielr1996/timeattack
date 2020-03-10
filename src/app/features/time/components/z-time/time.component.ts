import {Component, OnInit} from '@angular/core';
import {DateEntry} from "../../store/date-entry/date-entry";
import {DateEntryService} from "../../services/date-entry.service";
import {combineLatest, Observable, of} from "rxjs";
import {TimeEntryService} from "../../services/time-entry.service";
import {v4 as uuid} from "uuid";
import {TimeEntry} from "../../store/time-entry/time-entry";
import {map, mapTo, mergeMap, tap} from "rxjs/operators";
import {LocalDate} from "../../../../lib/time-fns/localdate";
import {fromArray} from "rxjs/internal/observable/fromArray";

@Component({
  selector: 'app-time',
  template: `
    <app-day-add></app-day-add>
    <mat-list>
            <app-day-row
              *ngFor="let entry of (dateEntries$ | async)"
              [dateEntry]="entry"
            ></app-day-row>
      <ul>
<!--        <li *ngFor="let entry of entries$ | async">{{entry | json}}</li>-->
      </ul>
    </mat-list>
    <!--    <app-time-overview></app-time-overview>-->
  `,
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  public dateEntries$: Observable<DateEntry[]> = this.dateEntryService.get();
  // public timeEntries$: Observable<TimeEntry[]> = this.timeEntryService.get();
  // public timeEntriesPerDay = (dateEntryId: string)=>this.timeEntries$.pipe(
  //   mergeMap(timeEntries=>fromArray(timeEntries)),
  // )
  // public entries$: Observable<any> = this.dateEntries$.pipe(
  //   mergeMap(days=>fromArray(days)),
  //   mergeMap(day=>this.timeEntries$.pipe())
    // tap(console.log),
  // )
  // public entries$: Observable<{ day: DateEntry, time: TimeEntry[] }[]> = this.dateEntries$.pipe(
  //   map(day=>({day, time: []}))
  // );
  // public entries$: Observable<{ day: DateEntry, time: TimeEntry[] }[]> = combineLatest(this.dateEntries$, this.timeEntries$).pipe(
  //   map(([day, time]) => ({day, time})),
  // );

  constructor(
    private dateEntryService: DateEntryService,
    // private timeEntryService: TimeEntryService,
    ) {
  }

  ngOnInit() {
    // this.entries$.subscribe();
    // this.timeEntries$.subscribe();
    // this.timeEntriesPerDay("b38ea0a2-1aaa-4a69-b2a0-f20daf91ecfd").subscribe();
  }
}
