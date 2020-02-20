import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRowComponent } from './time-row.component';

describe('TimeRowComponent', () => {
  let component: TimeRowComponent;
  let fixture: ComponentFixture<TimeRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeRowComponent ]
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
