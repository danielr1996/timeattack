import {Component, Input, OnInit} from '@angular/core';
import {DateEntry} from "src/app/features/time/store/date-entry/date-entry";
import {TimeEntry} from "src/app/features/time/store/time-entry/time-entry";
import {TimeEntryService} from "src/app/features/time/services/time-entry.service";
import {from, Observable} from "rxjs";
import {filter, map, mergeMap, toArray} from "rxjs/operators";
import {differenceInMinutes} from "src/app/lib/time-fns/fp";

@Component({
  selector: 'app-day-row',
  template: `
    <h3 matSubheader class="flex">
      <span>{{dateEntry.date | localdate | date}}</span>
<!--      <span>{{total | async | duration}}</span>-->
      <span><app-time-add [dateEntryId]="dateEntry.id"></app-time-add></span>
      <span><app-day-delete [dateEntry]="dateEntry"></app-day-delete></span>
      <!--      <app-time-display [time]="overTime"></app-time-display>-->
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

  get total() {
    return this.timeEntries$.pipe(
      map(timeEntries => DayRowComponent.getTotalHours(timeEntries))
    );
  }

  public static getTotalHours(timeEntries: TimeEntry[]): number {
    let totalHours = timeEntries
      .map((timeEntry => differenceInMinutes(timeEntry.end, timeEntry.start)))
      .reduce((a, b) => a + b);
    let pause = 0;
    if (totalHours > 9 * 60) {
      pause = 45;
    } else if (totalHours > 6 * 60) {
      pause = 30;
    }
    return totalHours - pause;
  }

  constructor(private timeEntryService: TimeEntryService) {
  }

  ngOnInit(): void {
  }

}
