import {Component, Input, OnInit} from '@angular/core';
import {TimeRange} from "../../store/time-range";
import {TimeRangeStore} from "../../store/time-range-store.service";
import {differenceInMinutes} from "date-fns";

@Component({
  selector: 'app-time-group',
  templateUrl: './time-group.component.html',
  styleUrls: ['./time-group.component.scss']
})
export class TimeGroupComponent implements OnInit {

  @Input() timeGroup: { date: Date, timeRanges: TimeRange[] };

  constructor() {
  }

  ngOnInit() {
  }

  public getTotalHours(): number {
    return this.timeGroup.timeRanges.map((timeRange => differenceInMinutes(new Date(timeRange.end), new Date(timeRange.start)))).reduce((a, b) => a + b);
  }


  public getOverTime(): number {
    const defaultTime = differenceInMinutes(new Date(1960, 1, 1, 15, 42, 0, 0), new Date(1960, 1, 1, 8, 0, 0, 0))
    return this.getTotalHours() - defaultTime-30;
  }


}
