import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {tap} from "rxjs/operators";
import {v4 as uuid} from 'uuid'
import {setMinutes, setHours, parse} from 'date-fns/fp'
import flow from 'lodash/fp/flow'
import {addDays, isBefore} from "date-fns";
import {TimeRangeStore} from "../../store/time-range.store";

@Component({
  selector: 'app-time-add',
  templateUrl: './time-add.component.html',
  styleUrls: ['./time-add.component.scss']
})
export class TimeAddComponent implements OnInit {
  public save$: Subject<void> = new Subject<void>();
  public form: FormGroup;

  constructor(private fb: FormBuilder, private timeRangeStore: TimeRangeStore) {
    this.form = fb.group({
      date: fb.control(new Date(), [Validators.required]),
      start: fb.control('', [Validators.required, Validators.pattern(/^[0-2][0-9]:[0-6][0-9]$/)]),
      end: fb.control('', [Validators.required, Validators.pattern(/^[0-2][0-9]:[0-6][0-9]$/)]),
    })
  }

  ngOnInit() {
    this.save$.pipe(
      tap(() => {
        if (this.form.valid) {
          this.timeRangeStore.add(this.parseTimeRange(this.form.get('start').value, this.form.get('end').value))
        } else {
          console.error('Form not valid')
        }
      })
    ).subscribe();
  }

  private parseDate(timeString: string, date: Date): Date {
    let [hour, minute]: number[] = timeString.split(':').map(s => parseInt(s));
    return flow(setMinutes(minute), setHours(hour))(date);
  }

  private parseTimeRange(startString: string, endString: string) {
    const start: Date = this.parseDate(startString, this.form.get('date').value);
    let end: Date = this.parseDate(endString, this.form.get('date').value);
    if (isBefore(end, start)) {
      end = addDays(end, 1);
    }
    return {
      id: uuid(),
      start,
      end
    };
  }
}