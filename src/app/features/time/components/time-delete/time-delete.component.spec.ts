import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDeleteComponent } from './time-delete.component';

describe('TimeDeleteComponent', () => {
  let component: TimeDeleteComponent;
  let fixture: ComponentFixture<TimeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
