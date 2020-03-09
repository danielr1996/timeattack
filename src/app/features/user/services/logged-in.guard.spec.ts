import { TestBed } from '@angular/core/testing';

import { LoggedInGuard } from 'src/app/features/user/services/logged-in.guard';

describe('AuthenticationGuard', () => {
  let guard: LoggedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
