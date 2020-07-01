import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {empty} from "rxjs";
import {TimeEntry} from "src/app/features/time/store/time-entry/time-entry";
import {LocalTime} from "src/app/lib/time-fns/localtime";
import {v4 as uuid} from "uuid";

@Component({
  selector: 'app-time-add-dialog',
  template: `
    <form [formGroup]="form">
      <mat-form-field appearance="outline">
        <mat-label id="lbl-start">Start der Arbeit</mat-label>
        <input aria-labelledby="lbl-start" [formControlName]="'start'" required matInput placeholder="Start der Arbeit">
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label id="lbl-end">Ende der Arbeit</mat-label>
        <input aria-labelledby="lbl-end" [formControlName]="'end'" required matInput placeholder="Ende der Arbeit">
      </mat-form-field>
      <button [color]="'accent'" (click)="close()" mat-raised-button>Hinzufügen</button>
      <button [color]="'warn'" (click)="exit()" mat-raised-button>Abbrechen</button>
    </form>

  `,
  styleUrls: ['./time-add-dialog.component.scss']
})
export class TimeAddDialogComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    start: this.fb.control('09:20', [Validators.required, Validators.pattern(/^[0-2][0-9]:[0-6][0-9]$/)]),
    end: this.fb.control('17:32', [Validators.required, Validators.pattern(/^[0-2][0-9]:[0-6][0-9]$/)]),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: TimeEntry,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TimeAddDialogComponent>,
  ) {
  }

  close(): void {
    if (this.form.valid) {
      this.dialogRef.close({
        id: uuid(),
        start: this.parseTime(this.form.get('start').value),
        end: this.parseTime(this.form.get('end').value),
      });
    } else {
      console.error('Form not valid')
    }
  }

  // FIXME: Auslagern in TimeComponent
  parseTime(timeString): LocalTime {
    let [hour, minute]: number[] = timeString.split(':').map(s => parseInt(s));
    return LocalTime.of(hour, minute);
  }

  ngOnInit(): void {
  }

  exit() {
    this.dialogRef.close();
  }
}
