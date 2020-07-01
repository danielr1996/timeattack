import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TimeAddDialogComponent} from './time-add-dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";

describe('TimeAddDialogComponent', () => {
  let component: TimeAddDialogComponent;
  let fixture: ComponentFixture<TimeAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimeAddDialogComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {}},
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
