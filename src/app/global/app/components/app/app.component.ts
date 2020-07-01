import {Component, OnInit} from '@angular/core';
import {DateEntryService} from "src/app/features/time/services/date-entry.service";
import {TimeEntryService} from "src/app/features/time/services/time-entry.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private dateEntryService: DateEntryService,
    private timeEntryService: TimeEntryService,
  ) {
  }

  ngOnInit(): void {
    this.dateEntryService.load().subscribe();
    this.timeEntryService.load().subscribe();
  }
}
