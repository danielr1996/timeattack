import {TestBed} from '@angular/core/testing';
import {AngularFirestore} from '@angular/fire/firestore';
import {of} from 'rxjs';

import {TimeEntryService} from './time-entry.service';
import {MockAuthenticationService} from 'src/app/features/user/services/mock-authentication.service';
import {AuthenticationService} from 'src/app/features/user/services/authentication.service';

describe('TimeEntryService', () => {
  let service: TimeEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: AuthenticationService, useClass: MockAuthenticationService},
        {
          provide: AngularFirestore, useValue: {}
        },
      ]
    });
    service = TestBed.inject(TimeEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
