import { TestBed } from '@angular/core/testing';

import { LoggedOutGuard } from './logged-out.guard';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";

describe('LoggedOutGuard', () => {
  let guard: LoggedOutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: AngularFireAuth, useValue: {}},
        {provide: Router, useValue: {}}
        ]});
    guard = TestBed.inject(LoggedOutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
