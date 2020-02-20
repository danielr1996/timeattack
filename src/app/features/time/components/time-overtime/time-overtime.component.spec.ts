import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOvertimeComponent } from './time-overtime.component';

describe('TimeOvertimeComponent', () => {
  let component: TimeOvertimeComponent;
  let fixture: ComponentFixture<TimeOvertimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeOvertimeComponent ]
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
