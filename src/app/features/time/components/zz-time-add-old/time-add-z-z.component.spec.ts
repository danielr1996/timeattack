import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAddZZComponent } from './time-add-z-z.component';

describe('TimeAddComponent', () => {
  let component: TimeAddZZComponent;
  let fixture: ComponentFixture<TimeAddZZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeAddZZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeAddZZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
