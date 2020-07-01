import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

import {DayDeleteComponent} from './day-delete.component';
import {AuthenticationService} from 'src/app/features/user/services/authentication.service';
import {MockAuthenticationService} from 'src/app/features/user/services/mock-authentication.service';
import {DateEntryService} from 'src/app/features/time/services/date-entry.service';
import {MockDateEntryService} from 'src/app/features/time/services/mock-date-entry.service';

describe('DayDeleteComponent', () => {
  let component: DayDeleteComponent;
  let fixture: ComponentFixture<DayDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DayDeleteComponent],
      providers: [
        {provide: AuthenticationService, useClass: MockAuthenticationService},
        {provide: DateEntryService, useClass: MockDateEntryService},
      ],
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
