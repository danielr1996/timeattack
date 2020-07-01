import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {compare} from "src/app/lib/time-fns/fp";
import {DateEntryService} from "../../services/date-entry.service";
import {DateEntry} from "../../store/date-entry/date-entry";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-time',
  template: `
    <app-day-add></app-day-add>
    <mat-list>
      <app-day-row
        *ngFor="let entry of (dateEntries$ | async)"
        [dateEntry]="entry"
      ></app-day-row>
    </mat-list>
  `,
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  public dateEntries$: Observable<DateEntry[]> = this.dateEntryService.get().pipe(
    map(dateEntries => {
      dateEntries.sort((a, b) => compare(a.date, b.date));
      return dateEntries;
    })
  );

  constructor(
    private dateEntryService: DateEntryService,
  ) {
  }

  ngOnInit() {
  }
}
