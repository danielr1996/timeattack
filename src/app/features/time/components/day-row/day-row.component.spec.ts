import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AngularFirestore} from '@angular/fire/firestore';
import {of} from 'rxjs';

import {DayRowComponent} from './day-row.component';
import {LocaldatePipe} from 'src/app/lib/time-fns/time-fns-ng/pipes/localdate/localdate.pipe';
import {DurationPipe} from 'src/app/lib/time-fns/time-fns-ng/pipes/duration/duration.pipe';
import {AuthenticationService} from 'src/app/features/user/services/authentication.service';
import {MockAuthenticationService} from 'src/app/features/user/services/mock-authentication.service';
import {TimeEntryService} from 'src/app/features/time/services/time-entry.service';
import {MockTimeEntryService} from 'src/app/features/time/services/mock-time-entry.service';

describe('DayRowComponent', () => {
  let component: DayRowComponent;
  let fixture: ComponentFixture<DayRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DayRowComponent, LocaldatePipe, DurationPipe],
      providers: [
        {provide: AuthenticationService, useClass: MockAuthenticationService},
        {provide: TimeEntryService, useClass: MockTimeEntryService},
      ],
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
