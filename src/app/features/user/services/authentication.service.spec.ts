import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import {AngularFireAuth} from "@angular/fire/auth";

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{provide: AngularFireAuth, useValue: {}}]}));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});
