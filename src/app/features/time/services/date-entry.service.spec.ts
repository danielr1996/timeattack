import { TestBed } from '@angular/core/testing';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/firestore";
import {DateEntryService} from "./date-entry.service";
import {AuthenticationService} from 'src/app/features/user/services/authentication.service';
import {MockAuthenticationService} from 'src/app/features/user/services/mock-authentication.service';


describe('DateEntryService', () => {
  let service: DateEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: AngularFirestore, useValue: {}},
        {provide: AuthenticationService, useClass: MockAuthenticationService},
        ],
    });
    service = TestBed.inject(DateEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
