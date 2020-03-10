import {Component, Input, OnInit} from '@angular/core';
import {TimeRange} from "../../store/time-range/time-range";
import {getOverTime, getTotalHours} from "../../services/time-calculation.service";

@Component({
  selector: 'app-zz-time-group',
  templateUrl: './time-group.component.html',
  styleUrls: ['./time-group.component.scss']
})
export class TimeGroupComponent implements OnInit {
  @Input() timeGroup: { date: Date, timeRanges: TimeRange[] };
  public totalHours: number;
  public overTime: number;

  ngOnInit() {
    this.totalHours = getTotalHours(this.timeGroup.timeRanges);
    this.overTime = getOverTime(this.totalHours);
  }
}
