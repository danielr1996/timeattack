import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MockTimeEntryService} from "src/app/features/time/services/mock-time-entry.service";
import {TimeEntryService} from "src/app/features/time/services/time-entry.service";
import {DurationPipe} from "src/app/lib/time-fns/time-fns-ng/pipes/duration/duration.pipe";

import { TimeOvertimeComponent } from './time-overtime.component';

describe('TimeOvertimeComponent', () => {
  let component: TimeOvertimeComponent;
  let fixture: ComponentFixture<TimeOvertimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeOvertimeComponent, DurationPipe ],
      providers: [
        {provide: TimeEntryService, useClass: MockTimeEntryService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeOvertimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
