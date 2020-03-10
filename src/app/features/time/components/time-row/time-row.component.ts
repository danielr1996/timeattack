import {Component, Input, OnInit} from '@angular/core';
import {TimeEntry} from "../../store/time-entry/time-entry";

@Component({
  selector: 'app-time-row',
  template: `
    <mat-list-item role="listitem">
      <div class="flex">
        <mat-icon>access_time</mat-icon>
<!--        <span>{{timeRange | timeRange}}</span>-->
<!--        FIXME: in Pipe auslagern-->
        {{timeEntry.start.hour}}:{{timeEntry.start.minute}} - {{timeEntry.end.hour}}:{{timeEntry.end.minute}}
<!--        <span>{{totalHours$ | async | time}}</span>-->
        <app-time-delete [timeEntry]="timeEntry"></app-time-delete>
      </div>
    </mat-list-item>
  `,
  styleUrls: ['./time-row.component.scss']
})
export class TimeRowComponent implements OnInit {
  @Input() timeEntry: TimeEntry;

  constructor() { }

  ngOnInit(): void {
  }

}
