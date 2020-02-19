import { Component, OnInit } from '@angular/core';
import {TimeEntryQuery} from "../../store/TimeEntryStore";
import {Observable} from "rxjs";
import {TimeEntry} from "../../store/time-entry";

@Component({
  selector: 'app-time-overview',
  templateUrl: './time-overview.component.html',
  styleUrls: ['./time-overview.component.scss']
})
export class TimeOverviewComponent implements OnInit {
  public timeEntries$: Observable<TimeEntry[]> = this.timeEntryQuery.selectAll();
  constructor(private timeEntryQuery: TimeEntryQuery) { }

  ngOnInit() {
  }

}
