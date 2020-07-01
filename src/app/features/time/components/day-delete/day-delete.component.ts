import {Component, Input, OnInit} from '@angular/core';
import {DateEntry} from "../../store/date-entry/date-entry";
import {Subject} from "rxjs";
import {mergeMap} from "rxjs/operators";
import {DateEntryService} from "../../services/date-entry.service";

@Component({
  selector: 'app-day-delete',
  template: `
    <button mat-icon-button aria-label="Delete Date Entry">
      <mat-icon (click)="delete$.next(dateEntry.id)">delete</mat-icon>
    </button>
  `,
  styleUrls: ['./day-delete.component.scss']
})
export class DayDeleteComponent implements OnInit {
  @Input() dateEntry: DateEntry;
  public delete$ = new Subject().pipe(
    mergeMap((id: string) => this.dateEntryService.delete(id))
  ) as Subject<any>;

  constructor(private dateEntryService: DateEntryService) {
  }

  ngOnInit(): void {
    this.delete$.subscribe();
  }
}
