import {Component, Input, OnInit} from '@angular/core';
import {DateEntry} from "src/app/features/time/store/date-entry/date-entry";
import {TimeEntry} from "src/app/features/time/store/time-entry/time-entry";
import {TimeEntryService} from "src/app/features/time/services/time-entry.service";
import {from, Observable} from "rxjs";
import {filter, map, mergeMap, toArray} from "rxjs/operators";
import {differenceInMinutes, overTime, totalHours} from "src/app/lib/time-fns/fp";

@Component({
  selector: 'app-day-row',
  template: `
    <h3 matSubheader class="flex">
      <span>{{dateEntry?.date | localdate | date}}</span>
      <span>{{totalHours$ | async |duration}}</span>
      <span>{{overTime$ | async | duration}}</span>
      <app-time-add [dateEntryId]="dateEntry?.id"></app-time-add>
      <app-day-delete [dateEntry]="dateEntry"></app-day-delete>
    </h3>
    <mat-divider></mat-divider>
    <app-time-row *ngFor="let timeEntry of timeEntries$ | async" [timeEntry]="timeEntry"></app-time-row>
  `,
  styleUrls: ['./day-row.component.scss']
})
export class DayRowComponent implements OnInit {
  @Input() dateEntry: DateEntry;
  public timeEntries$: Observable<TimeEntry[]> = this.timeEntryService.get().pipe(
    mergeMap(timeEntries => from(timeEntries).pipe(
      filter(timeEntry => timeEntry.dateEntryId === this.dateEntry.id),
      toArray(),
    )),
  );
  public totalHours$: Observable<number> = this.timeEntries$.pipe(map(totalHours));
  public overTime$: Observable<number> = this.totalHours$.pipe(map(overTime));

  constructor(private timeEntryService: TimeEntryService) {
  }

  ngOnInit(): void {
  }

}
