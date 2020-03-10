import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DateEntryService} from "../../services/date-entry.service";
import {DateEntry} from "../../store/date-entry/date-entry";

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
  public dateEntries$: Observable<DateEntry[]> = this.dateEntryService.get();

  constructor(
    private dateEntryService: DateEntryService,
  ) {
  }

  ngOnInit() {
  }
}
