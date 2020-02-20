import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit { /**
 /*
 The time value to display in minutes
 */
  @Input() time: number;

  constructor() { }

  ngOnInit() {
  }

}
