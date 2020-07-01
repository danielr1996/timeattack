import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subject} from "rxjs";
import {DateEntry} from "../../store/date-entry/date-entry";
import {map, mergeMap, pluck, tap} from "rxjs/operators";
import {LocalDate} from "../../../../lib/time-fns/localdate";
import {v4 as uuid} from 'uuid'
import {DateEntryService} from "../../services/date-entry.service";

@Component({
  selector: 'app-day-add',
  template: `
    <form [formGroup]="form">
      <mat-form-field appearance="outline">
        <input aria-label="Datum" [formControlName]="'date'" required matInput [matDatepicker]="myDatepicker">
        <mat-datepicker-toggle matSuffix [for]="myDatepicker"></mat-datepicker-toggle>
        <mat-datepicker #myDatepicker></mat-datepicker>
      </mat-form-field>
      <button [color]="'accent'" (click)="add$.next()" mat-raised-button>Hinzufügen</button>
    </form>`,
  styleUrls: ['./day-add.component.scss']
})
export class DayAddComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    'date': new Date()
  });
  public add$ = new Subject().pipe(
    map(() => this.form.get('date').value),
    map((date) => ({id: uuid(), date: LocalDate.from(date)})),
    mergeMap(dateEntry => this.dateEntryService.add(dateEntry)),
  ) as Subject<any>;

  constructor(
    private fb: FormBuilder,
    private dateEntryService: DateEntryService,
  ) {
  }

  ngOnInit(): void {
    this.add$.subscribe();
  }

}
