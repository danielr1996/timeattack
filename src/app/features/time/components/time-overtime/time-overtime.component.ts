import {Component, OnInit} from '@angular/core';
import {from, Observable, of, zip} from "rxjs";
import {groupBy, last, map, mergeMap, scan, tap, toArray} from "rxjs/operators";
import {TimeEntryService} from "src/app/features/time/services/time-entry.service";
import {fromArray} from "rxjs/internal/observable/fromArray";
import {overTime, sum, totalHours} from "src/app/lib/time-fns/fp2";

@Component({
  selector: 'app-time-overtime',
  template: `
    {{overTime$ | async | duration}}
  `,
  styleUrls: ['./time-overtime.component.scss']
})
export class TimeOvertimeComponent implements OnInit {
  public overTime$: Observable<number> = this.timeEntryService.get().pipe(
        mergeMap(r => fromArray(r).pipe(
          groupBy(timeEntry => timeEntry.dateEntryId),
          mergeMap(group => group.pipe(toArray())),
          map(totalHours),
          map(overTime),
          scan((acc, curr) => acc + curr, 0),
        )),
      );

  constructor(private timeEntryService: TimeEntryService) {
  }

  ngOnInit() {

  }
}
