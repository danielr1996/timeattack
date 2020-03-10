import { TestBed } from '@angular/core/testing';
import {DateEntryService} from "./date-entry.service";


describe('DateEntry.Service.TsService', () => {
  let service: DateEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
