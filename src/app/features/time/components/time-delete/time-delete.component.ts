import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {mergeMap} from "rxjs/operators";
import {TimeEntryService} from "../../services/time-entry.service";
import {TimeEntry} from "../../store/time-entry/time-entry";

@Component({
  selector: 'app-time-delete',
  template: `
    <button mat-icon-button aria-label="Delete Time Entry">
      <mat-icon (click)="delete$.next(timeEntry.id)">delete</mat-icon>
    </button>
  `,
  styleUrls: ['./time-delete.component.scss']
})
export class TimeDeleteComponent implements OnInit {
  @Input() timeEntry: TimeEntry;

  public delete$ = new Subject().pipe(
    mergeMap((id: string) => this.timeEntryService.delete(id))
  ) as Subject<any>;

  constructor(
    private timeEntryService: TimeEntryService
  ) {
  }

  ngOnInit(): void {
   this.delete$.subscribe();
  }
}
