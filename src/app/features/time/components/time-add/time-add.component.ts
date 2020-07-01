import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Subject} from "rxjs";
import {map, mergeMap, tap} from "rxjs/operators";
import {TimeAddDialogComponent} from "src/app/features/time/components/time-add-dialog/time-add-dialog.component";
import {TimeEntryService} from "src/app/features/time/services/time-entry.service";
import {mayBeOfNullable} from "src/app/lib/fp/Maybe";
import {unpackMaybe} from "src/app/lib/fp/rxjs/unpackMaybe";

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
    mergeMap(() => this.dialog.open(TimeAddDialogComponent).afterClosed()),
    // FIXME: Combine Operators
    map(mayBeOfNullable),
    unpackMaybe(),
    map(timeEntry => ({...timeEntry, dateEntryId: this.dateEntryId})),
    mergeMap(timeEntry => this.timeEntryService.add(timeEntry)),
  ) as Subject<any>;

  constructor(
    private timeEntryService: TimeEntryService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.add$.subscribe();
  }
}
