import {Component, Input, OnInit} from '@angular/core';
import {TimeRange} from "../../store/time-range";
import {differenceInMinutes} from "date-fns";
import {Observable, of, Subject} from "rxjs";
import {tap} from "rxjs/operators";
import {TimeRangeStore} from "../../store/time-range.store";

@Component({
  selector: 'app-time-row',
  templateUrl: './time-row.component.html',
  styleUrls: ['./time-row.component.scss']
})
export class TimeRowComponent implements OnInit {
  @Input() timeRange: TimeRange;
  public delete$: Subject<string> = new Subject<string>();
  // FIXME: load date correctly from store so that new Date(...) isn't necessary
  public totalHours$: Observable<number>;

  constructor(private timeRangeStore: TimeRangeStore) {
  }

  ngOnInit() {
    this.delete$.pipe(tap(id => this.timeRangeStore.remove(id))).subscribe();
    this.totalHours$ = of(differenceInMinutes(new Date(this.timeRange.end), new Date(this.timeRange.start)));
  }
}
