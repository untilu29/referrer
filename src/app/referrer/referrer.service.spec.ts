import { TestBed, inject } from '@angular/core/testing';

import { ReferrerService } from './referrer.service';

describe('ReferrerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferrerService]
    });
  });

  it('should be created', inject([ReferrerService], (service: ReferrerService) => {
    expect(service).toBeTruthy();
  }));
});
