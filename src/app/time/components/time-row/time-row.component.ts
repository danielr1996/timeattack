import {Component, Input, OnInit} from '@angular/core';
import {TimeRange} from "../../store/time-range";
import {differenceInMinutes} from "date-fns";
import {Subject} from "rxjs";
import {tap} from "rxjs/operators";
import {TimeRangeStore} from "../../store/time-range-store.service";

@Component({
  selector: 'app-time-row',
  templateUrl: './time-row.component.html',
  styleUrls: ['./time-row.component.scss']
})
export class TimeRowComponent implements OnInit {
  @Input() timeRange: TimeRange;
  public delete$: Subject<string> = new Subject<string>();

  constructor(private timeRangeStore: TimeRangeStore) { }

  ngOnInit() {
    this.delete$.pipe(
      tap(id => {
        this.timeRangeStore.remove(id);
      })
    ).subscribe();
  }

  public getTotalHours(): number{
    return differenceInMinutes(new Date(this.timeRange.end),new Date(this.timeRange.start));
  }
}
