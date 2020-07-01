import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TimeComponent} from './time.component';
import {AuthenticationService} from 'src/app/features/user/services/authentication.service';
import {MockAuthenticationService} from 'src/app/features/user/services/mock-authentication.service';
import {DateEntryService} from 'src/app/features/time/services/date-entry.service';
import {MockDateEntryService} from 'src/app/features/time/services/mock-date-entry.service';
import {DayAddComponent} from 'src/app/features/time/components/day-add/day-add.component';
import {MatListModule} from '@angular/material/list';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('TimeComponent', () => {
  let component: TimeComponent;
  let fixture: ComponentFixture<TimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [TimeComponent],
      imports: [MatListModule],
      providers: [
        {provide: DateEntryService, useClass: MockDateEntryService},
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
