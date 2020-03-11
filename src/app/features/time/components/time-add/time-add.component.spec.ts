import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TimeAddComponent} from './time-add.component';
import {MatDialogModule} from "@angular/material/dialog";

describe('TimeAddComponent', () => {
  let component: TimeAddComponent;
  let fixture: ComponentFixture<TimeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimeAddComponent],
      imports: [
        MatDialogModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
