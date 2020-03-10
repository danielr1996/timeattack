import {Component, Input, OnInit} from '@angular/core';
import {differenceInMinutes} from "date-fns";
import {Observable, of, Subject} from "rxjs";
import {mergeMap} from "rxjs/operators";
import {TimeRangeService} from "src/app/features/time/services/time-range.service";
import {TimeRange} from "../../store/time-range/time-range";

@Component({
  selector: 'app-zz-time-row',
  templateUrl: './time-row-z-z.component.html',
  styleUrls: ['./time-row-z-z.component.scss']
})
export class TimeRowZZComponent implements OnInit {
  @Input() timeRange: TimeRange;
  public delete$: Subject<string> = new Subject<string>();
  public totalHours$: Observable<number>;

  constructor(private timeRangeService: TimeRangeService) {
  }

  ngOnInit() {
    this.delete$.pipe(mergeMap(id => this.timeRangeService.remove(id))).subscribe();
    this.totalHours$ = of(differenceInMinutes(new Date(this.timeRange.end), new Date(this.timeRange.start)));
  }
}
