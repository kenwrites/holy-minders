import { TestBed } from '@angular/core/testing';

import { MyHolyDaysService } from './my-holy-days.service';

describe('MyHolyDaysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyHolyDaysService = TestBed.get(MyHolyDaysService);
    expect(service).toBeTruthy();
  });
});
