import {TestBed} from '@angular/core/testing';

import {LoggedInGuard} from 'src/app/features/user/services/logged-in.guard';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";

describe('LoggedInGuard', () => {
  let guard: LoggedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: AngularFireAuth, useValue: {}},
        {provide: Router, useValue: {}}
      ]
    });
    guard = TestBed.inject(LoggedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
