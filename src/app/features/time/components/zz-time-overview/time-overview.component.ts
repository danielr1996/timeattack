import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {TimeCalculationService} from "../../services/time-calculation.service";

@Component({
  selector: 'app-zz-time-overview',
  templateUrl: './time-overview.component.html',
  styleUrls: ['./time-overview.component.scss']
})
export class TimeOverviewComponent implements OnInit {

  public groupedByDays: Observable<{ date: Date, timeRanges }[]> = this.timeCalculationService.groupByDays();

  constructor(private timeCalculationService: TimeCalculationService) {
  }

  ngOnInit() {

  }
}
