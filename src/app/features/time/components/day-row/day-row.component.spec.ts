import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayRowComponent } from './day-row.component';
import {LocaldatePipe} from "src/app/lib/time-fns/time-fns-ng/pipes/localdate/localdate.pipe";
import {DurationPipe} from "src/app/lib/time-fns/time-fns-ng/pipes/duration/duration.pipe";

describe('DayRowComponent', () => {
  let component: DayRowComponent;
  let fixture: ComponentFixture<DayRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayRowComponent, LocaldatePipe, DurationPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayRowComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
