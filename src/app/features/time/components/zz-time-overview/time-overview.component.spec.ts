import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOverviewComponent } from './time-overview.component';

describe('TimeOverviewComponent', () => {
  let component: TimeOverviewComponent;
  let fixture: ComponentFixture<TimeOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
