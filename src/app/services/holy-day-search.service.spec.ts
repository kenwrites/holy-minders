import { TestBed } from '@angular/core/testing';

import { HolyDaySearchService } from './holy-day-search.service';

describe('HolyDaySearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HolyDaySearchService = TestBed.get(HolyDaySearchService);
    expect(service).toBeTruthy();
  });
});
