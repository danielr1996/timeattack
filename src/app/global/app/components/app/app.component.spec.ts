import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MockAuthenticationService} from 'src/app/features/user/services/mock-authentication.service';
import {DateEntryService} from 'src/app/features/time/services/date-entry.service';
import {MockDateEntryService} from 'src/app/features/time/services/mock-date-entry.service';
import {TimeEntry} from 'src/app/features/time/store/time-entry/time-entry';
import {TimeEntryService} from 'src/app/features/time/services/time-entry.service';
import {MockTimeEntryService} from 'src/app/features/time/services/mock-time-entry.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: DateEntryService, useClass: MockDateEntryService},
        {provide: TimeEntryService, useClass: MockTimeEntryService},
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
