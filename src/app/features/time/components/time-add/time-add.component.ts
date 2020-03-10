import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {map, mergeMap} from "rxjs/operators";
import {v4 as uuid} from "uuid";
import {TimeEntry} from "src/app/features/time/store/time-entry/time-entry";
import {TimeEntryService} from "src/app/features/time/services/time-entry.service";

@Component({
  selector: 'app-time-add',
  template: `
    <button mat-icon-button aria-label="Add Time Entry">
      <mat-icon (click)="add$.next()">add</mat-icon>
    </button>
  `,
  styleUrls: ['./time-add.component.scss']
})
export class TimeAddComponent implements OnInit {
  @Input() dateEntryId: string;
  public add$ = new Subject().pipe(
    map(() => ({
      id: uuid(),
      start: {hour: 7, minute: 0, second: 0, nano: 0},
      end: {hour: 15, minute: 12, second: 0, nano: 0},
      dateEntryId: this.dateEntryId,
    }) as TimeEntry),
    mergeMap((time) => this.timeEntryService.add(time)),
  ) as Subject<any>;

  constructor(
    private timeEntryService: TimeEntryService
  ) {
  }

  ngOnInit(): void {
    this.add$.subscribe();
  }
}
