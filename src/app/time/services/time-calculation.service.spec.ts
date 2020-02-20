import { TestBed } from '@angular/core/testing';

import { TimeCalculationService } from './time-calculation.service';

describe('TimeCalculationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeCalculationService = TestBed.get(TimeCalculationService);
    expect(service).toBeTruthy();
  });
});
