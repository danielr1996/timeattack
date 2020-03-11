import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRowComponent } from './time-row.component';
import {DifferencePipe} from "src/app/lib/time-fns/time-fns-ng/pipes/difference/difference.pipe";
import {DurationPipe} from "src/app/lib/time-fns/time-fns-ng/pipes/duration/duration.pipe";

describe('TimeRowComponent', () => {
  let component: TimeRowComponent;
  let fixture: ComponentFixture<TimeRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeRowComponent, DifferencePipe, DurationPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
