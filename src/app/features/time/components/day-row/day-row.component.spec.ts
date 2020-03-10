import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayRowComponent } from './day-row.component';

describe('DayRowComponent', () => {
  let component: DayRowComponent;
  let fixture: ComponentFixture<DayRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayRowComponent ]
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
