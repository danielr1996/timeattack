import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {map, mapTo, tap} from "rxjs/operators";
import {compareDesc, differenceInMinutes, parse} from "date-fns";
import {TimeRange} from "../../store/time-range";
import {format} from "date-fns/fp";
import {TimeRangeQuery, TimeRangeStore} from "../../store/time-range-store.service";
import flow from 'lodash/fp/flow'
import _ from "lodash";

@Component({
  selector: 'app-time-overtime',
  templateUrl: './time-overtime.component.html',
  styleUrls: ['./time-overtime.component.scss']
})
export class TimeOvertimeComponent implements OnInit {
  public timeRanges$: Observable<number> = this.timeRangeQuery.selectAll().pipe(
    map(timeRanges => {
      timeRanges.sort((a, b) => compareDesc(new Date(a.start), new Date(b.start)));
      return Object.entries(_.groupBy(timeRanges, flow((timerange: TimeRange) => new Date(timerange.start), format("yyyy-MM-dd")))).map(([date, timeRanges]) => ({
        date: parse(date, 'yyyy-MM-dd', new Date()),
        timeRanges: timeRanges
      })) as { date: Date, timeRanges: TimeRange[] }[];
    }),
    tap(console.log),
    // mapTo(120),
    map(timeRanges => timeRanges.map(t => this.getOverTime(t.timeRanges)).reduce((a, b) => a + b)),
  );

  constructor(private timeRangeStore: TimeRangeStore, private timeRangeQuery: TimeRangeQuery) {
  }

  ngOnInit() {
  }

  public getTotalHours(timeRanges: TimeRange[]): number {
    let totalHours = timeRanges.map((timeRange => differenceInMinutes(new Date(timeRange.end), new Date(timeRange.start)))).reduce((a, b) => a + b);
    let pause = 0;
    if(totalHours>=6*60){
      pause = 30;
    }else if(totalHours>=9*60){
      pause = 45;
    }
    return totalHours-pause;
  }


  public getOverTime(timeRanges: TimeRange[]): number {
    const defaultTime = differenceInMinutes(new Date(1960, 1, 1, 15, 42, 0, 0), new Date(1960, 1, 1, 8, 0, 0, 0))
    return this.getTotalHours(timeRanges) - defaultTime;
  }
}
