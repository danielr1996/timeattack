import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TimeAddComponent} from './time-add.component';
import {MatDialogModule} from "@angular/material/dialog";
import {TimeEntryService} from 'src/app/features/time/services/time-entry.service';
import {MockTimeEntryService} from 'src/app/features/time/services/mock-time-entry.service';

describe('TimeAddComponent', () => {
  let component: TimeAddComponent;
  let fixture: ComponentFixture<TimeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimeAddComponent],
      imports: [
        MatDialogModule,
      ],
      providers: [
        {provide: TimeEntryService, useClass: MockTimeEntryService},
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
