import {Component, Input, OnInit} from '@angular/core';
import {differenceInMinutes} from "src/app/lib/time-fns/fp";
import {TimeEntry} from "../../store/time-entry/time-entry";

@Component({
  selector: 'app-time-row',
  template: `
    <mat-list-item role="listitem">
      <div>
        <mat-icon>access_time</mat-icon>
        <span>{{timeEntry | difference}}</span>
        <span>{{total | duration}}</span>
        <app-time-delete [timeEntry]="timeEntry"></app-time-delete>
      </div>
    </mat-list-item>
  `,
  styleUrls: ['./time-row.component.scss']
})
export class TimeRowComponent implements OnInit {
  @Input() timeEntry: TimeEntry;

  get total() {
    if (this.timeEntry) {
      return differenceInMinutes(this.timeEntry.end, this.timeEntry.start);
    }
    return 0;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
