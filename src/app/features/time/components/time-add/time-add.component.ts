import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {addDays, isBefore} from "date-fns";
import {setHours, setMinutes} from 'date-fns/fp'
import flow from 'lodash/fp/flow'
import {empty, Subject} from "rxjs";
import {mergeMap} from "rxjs/operators";
import {TimeRangeService} from "src/app/features/time/services/time-range.service";
import {TimeRangeStore} from "src/app/features/time/store/time-range.store";
import {v4 as uuid} from 'uuid'

@Component({
  selector: 'app-time-add',
  templateUrl: './time-add.component.html',
  styleUrls: ['./time-add.component.scss']
})
export class TimeAddComponent implements OnInit {
  public save$: Subject<void> = new Subject<void>();
  public krank$: Subject<void> = new Subject<void>();
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private timeRangeStore: TimeRangeStore,
    private timeRangeService: TimeRangeService,
  ) {
    this.form = fb.group({
      date: fb.control(new Date(), [Validators.required]),
      start: fb.control('09:20', [Validators.required, Validators.pattern(/^[0-2][0-9]:[0-6][0-9]$/)]),
      end: fb.control('17:32', [Validators.required, Validators.pattern(/^[0-2][0-9]:[0-6][0-9]$/)]),
      info: fb.control(''),
    })
  }

  ngOnInit() {
    this.save$.pipe(
      mergeMap(() => {
        if (this.form.valid) {
          return this.timeRangeService.add(this.parseTimeRange(this.form.get('start').value, this.form.get('end').value, this.form.get('info').value))
        } else {
          console.error('Form not valid')
          return empty();
        }
      }),
    ).subscribe();

    this.krank$.pipe(
      mergeMap(() => this.timeRangeService.add(this.getKrankTime(this.form.get('start').value, this.form.get('end').value))),
    ).subscribe();
  }

  // FIXME: In Date add Komponente auslagern
  private parseDate(timeString: string, date: Date): Date {
    let [hour, minute]: number[] = timeString.split(':').map(s => parseInt(s));
    return flow(setMinutes(minute), setHours(hour))(date);
  }

  private parseTimeRange(startString: string, endString: string, info: string) {
    const start: Date = this.parseDate(startString, this.form.get('date').value);
    let end: Date = this.parseDate(endString, this.form.get('date').value);
    if (isBefore(end, start)) {
      end = addDays(end, 1);
    }
    return {
      id: uuid(),
      start,
      end,
      info,
    };
  }

  private getKrankTime(startString: string, endString: string) {
    let start: Date = this.parseDate(startString, this.form.get('date').value);
    let end: Date = this.parseDate(endString, this.form.get('date').value);
    start = flow(setHours(8), setMinutes(0))(start);
    end = flow(setHours(16), setMinutes(12))(end);
    return {
      id: uuid(),
      start,
      end,
      info: 'Krank #Automatisch',
    };
  }
}
