import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-zz-time-overtime',
  templateUrl: './time-overtime.component.html',
  styleUrls: ['./time-overtime.component.scss']
})
export class TimeOvertimeComponent implements OnInit {
  // public overTime$: Observable<number> = this.timeCalculationService.groupByDays().pipe(
  //   map(getGroupedOverTime),
  // );

  // constructor(private timeCalculationService: TimeCalculationService) {
  // }

  ngOnInit() {
  }
}
