import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayAddComponent } from './day-add.component';

describe('DayAddComponent', () => {
  let component: DayAddComponent;
  let fixture: ComponentFixture<DayAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
