import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeGroupComponent } from './time-group.component';

describe('TimeGroupComponent', () => {
  let component: TimeGroupComponent;
  let fixture: ComponentFixture<TimeGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
