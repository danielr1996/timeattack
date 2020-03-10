import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayDeleteComponent } from './day-delete.component';

describe('DayDeleteComponent', () => {
  let component: DayDeleteComponent;
  let fixture: ComponentFixture<DayDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
