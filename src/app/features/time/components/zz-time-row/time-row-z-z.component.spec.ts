import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRowZZComponent } from './time-row-z-z.component';

describe('TimeRowComponent', () => {
  let component: TimeRowZZComponent;
  let fixture: ComponentFixture<TimeRowZZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeRowZZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeRowZZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
