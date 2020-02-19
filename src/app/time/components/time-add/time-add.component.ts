import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {tap} from "rxjs/operators";
import {TimeEntryStore} from "../../store/TimeEntryStore";
import {v4 as uuid} from 'uuid'
import {PointInTime} from "../../store/time-entry";

@Component({
  selector: 'app-time-add',
  templateUrl: './time-add.component.html',
  styleUrls: ['./time-add.component.scss']
})
export class TimeAddComponent implements OnInit {
  public save$: Subject<void> = new Subject<void>();
  public form: FormGroup;

  constructor(private fb: FormBuilder, private timeEntryStore: TimeEntryStore) {
    this.form = fb.group({
      start: fb.control('', [Validators.required, Validators.pattern(/^[0-2][0-9]:[0-6][0-9]$/)]),
      end: fb.control('', [Validators.required, Validators.pattern(/^[0-2][0-9]:[0-6][0-9]$/)]),
    })
  }

  ngOnInit() {
    this.save$.pipe(
      tap(() => {
        if (this.form.valid) {
          this.timeEntryStore.add({
            id: uuid(),
            start: this.parsePointInTime(this.form.get('start').value),
            end: this.parsePointInTime(this.form.get('end').value)
          })
        } else {
          console.error('Form not valid')
        }
      })
    ).subscribe();
  }

  private parsePointInTime(timeString: string): PointInTime {
    let [hours, minute] = timeString.split(':');
    return {hour: parseInt(hours), minute: parseInt(minute)}
  }
}
