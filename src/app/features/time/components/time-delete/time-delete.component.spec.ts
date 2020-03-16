import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/firestore";

import { TimeDeleteComponent } from './time-delete.component';
import {AuthenticationService} from 'src/app/features/user/services/authentication.service';
import {MockAuthenticationService} from 'src/app/features/user/services/mock-authentication.service';
import {TimeEntryService} from 'src/app/features/time/services/time-entry.service';
import {MockTimeEntryService} from 'src/app/features/time/services/mock-time-entry.service';

describe('TimeDeleteComponent', () => {
  let component: TimeDeleteComponent;
  let fixture: ComponentFixture<TimeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeDeleteComponent ],
      providers: [
        {provide: AuthenticationService, useValue: MockAuthenticationService},
        {provide: TimeEntryService, useValue: MockTimeEntryService},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
