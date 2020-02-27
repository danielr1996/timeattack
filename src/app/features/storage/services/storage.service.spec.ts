import { TestBed } from '@angular/core/testing';

import { StorageService } from 'src/app/features/storage/services/storage.service';

describe('StorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageService = TestBed.get(StorageService);
    expect(service).toBeTruthy();
  });
});
