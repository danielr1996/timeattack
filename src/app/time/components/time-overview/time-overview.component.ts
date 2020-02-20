import {Component, OnInit} from '@angular/core';
import {TimeRangeQuery, TimeRangeStore} from "../../store/time-range-store.service";
import {Observable} from "rxjs";
import {TimeRange} from "../../store/time-range";
import {map} from "rxjs/operators";
import {compareDesc, parse,} from 'date-fns'
import _ from "lodash";
import {format} from 'date-fns/fp'
import flow from 'lodash/fp/flow'

@Component({
  selector: 'app-time-overview',
  templateUrl: './time-overview.component.html',
  styleUrls: ['./time-overview.component.scss']
})
export class TimeOverviewComponent implements OnInit {
  public timeRanges$: Observable<{ date: Date, timeRanges }[]> = this.timeRangeQuery.selectAll().pipe(
    map(timeRanges => {
      timeRanges.sort((a, b) => compareDesc(new Date(a.start), new Date(b.start)));

      return Object.entries(_.groupBy(timeRanges, flow((timerange: TimeRange) => new Date(timerange.start), format("yyyy-MM-dd")))).map(([date, timeRanges]) => ({
        date: parse(date, 'yyyy-MM-dd', new Date()),
        timeRanges: timeRanges
      }));
    }),
  );

  constructor(private timeRangeStore: TimeRangeStore, private timeRangeQuery: TimeRangeQuery) {
  }

  ngOnInit() {

  }
}
